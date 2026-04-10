import cv2
import numpy as np
import random

# 경로 및 설정
IMAGE_PATH = 'src/assets/maps/landersField.jpg'
DEFAULT_TOLERANCE = 15  # 초기 색상 허용 오차
SIMPLIFY_EPSILON = 2.0  # 곡선 단순화 계수
DISPLAY_HEIGHT = 800    # 화면에 표시될 창의 세로 크기 제한

def bgr_to_hex(bgr):
    b, g, r = [int(v) for v in bgr]
    return f"#{r:02X}{g:02X}{b:02X}"

def mouse_callback(event, x, y, flags, param):
    if event == cv2.EVENT_LBUTTONDOWN:
        img = param['original_image'].copy()
        scale = param['scale']
        
        real_x = int(x / scale)
        real_y = int(y / scale)
        
        clicked_color_bgr = img[real_y, real_x]
        clicked_color_hex = bgr_to_hex(clicked_color_bgr)
        
        h, w = img.shape[:2]
        mask = np.zeros((h+2, w+2), np.uint8)
        
        # 🌟 상단 툴바(트랙바)에서 실시간으로 사용자가 설정한 민감도 값을 가져옵니다.
        tolerance = cv2.getTrackbarPos("Tolerance", "Map Clicker")
        if tolerance < 1: tolerance = 1
        
        lo_diff = (tolerance, tolerance, tolerance)
        up_diff = (tolerance, tolerance, tolerance)
        
        # 🌟 FLOODFILL_FIXED_RANGE 옵션 추가!
        # 기존에는 '서서히 변하는 색'을 따라 이웃 픽셀로 계속 번져나가 흰색 등 다른 구역을 침범했습니다.
        # FIXED_RANGE를 적용하면 오직 '처음 클릭한 그 픽셀의 오리지널 색'만을 비교 기준으로 삼기 때문에, 
        # 경계선이 명확하게 차단되고 다른 구역으로 번지지 않습니다.
        ff_flags = 4 | (255 << 8) | cv2.FLOODFILL_FIXED_RANGE
        cv2.floodFill(img, mask, (real_x, real_y), (0, 255, 0), lo_diff, up_diff, flags=ff_flags)
        
        fill_mask = mask[1:-1, 1:-1]
        
        kernel = np.ones((25, 25), np.uint8)
        closed_mask = cv2.morphologyEx(fill_mask, cv2.MORPH_CLOSE, kernel)
        
        contours, _ = cv2.findContours(closed_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        
        if not contours:
            print("영역을 찾을 수 없습니다.")
            return

        c = max(contours, key=cv2.contourArea)
        approx = cv2.approxPolyDP(c, SIMPLIFY_EPSILON, True)
        
        svg_points = []
        for i, point in enumerate(approx):
            px, py = point[0]
            if i == 0:
                svg_points.append(f"M {px} {py}")
            else:
                svg_points.append(f"L {px} {py}")
        svg_path = " ".join(svg_points) + " Z"
        
        zone_id = f"sector-{random.randint(100, 999)}"
        
        print("\n" + "="*80)
        print(f"✅ 오차 허용치(Tolerance): {tolerance} 기반 추출 완료!")
        print("-"*80)
        print(f"  '{zone_id}': {{")
        print(f"    id: '{zone_id}',")
        print(f"    name: '추출된 구역 ({real_x}, {real_y})',")
        print(f"    description: '구역에 대한 설명을 입력해주세요.',")
        print(f"    imageUrl: 'https://picsum.photos/id/{random.randint(10, 500)}/800/500',")
        print(f"    color: '{clicked_color_hex}',")
        print(f"    d: '{svg_path}'")
        print("  },")
        print("="*80 + "\n")

        cv2.drawContours(img, [approx], -1, (0, 0, 255), 4)
        cv2.circle(img, (real_x, real_y), 5, (255, 0, 0), -1)
        
        display_img = cv2.resize(img, (0, 0), fx=scale, fy=scale)
        cv2.imshow("Map Clicker", display_img)

def nothing(x):
    """트랙바 조작 시 호출되는 더미 함수"""
    pass

def main():
    img = cv2.imread(IMAGE_PATH)
    if img is None:
        print(f"에러: 이미지를 찾을 수 없습니다. 경로 확인 바랍니다: {IMAGE_PATH}")
        return

    h, w = img.shape[:2]
    scale = DISPLAY_HEIGHT / h
    display_img = cv2.resize(img, (0, 0), fx=scale, fy=scale)

    # 창 생성
    cv2.namedWindow("Map Clicker")
    
    # 🌟 민감도(Tolerance) 수동 조절 트랙바(슬라이더) 생성
    # 창의 상단에 드래그할 수 있는 막대가 생깁니다. 값이 작을수록 깐깐하게 같은 색만 잡습니다.
    cv2.createTrackbar("Tolerance", "Map Clicker", DEFAULT_TOLERANCE, 100, nothing)

    print("\n=== SSG Landers Color-to-SVG Extractor (v2.0) ===")
    print("1. [핵심] 다른 구역으로 번지던 문제를 해결하는 FIXED_RANGE 로직이 적용되었습니다.")
    print("2. 창 상단에 'Tolerance' 조절 바가 생겼습니다! 구역이 덜 칠해지면 늘리고, 너무 많이 번지면 줄이면서 클릭해 보세요.")
    print("3. 종료하려면 'q' 또는 'ESC' 키를 누르세요.\n")

    cv2.imshow("Map Clicker", display_img)
    
    cv2.setMouseCallback("Map Clicker", mouse_callback, {
        'original_image': img, 
        'scale': scale
    })
    
    while True:
        key = cv2.waitKey(1) & 0xFF
        if key == 27 or key == ord('q'):
            break
            
    cv2.destroyAllWindows()

if __name__ == '__main__':
    main()
