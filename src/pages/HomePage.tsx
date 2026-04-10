import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './HomePage.module.css';
import { stadiumList } from '../data/stadiums';
import { SVGMap } from "react-svg-map";
import SouthKorea from "@svg-maps/south-korea";
import "react-svg-map/lib/index.css";

// 💡 한반도 내륙이 더 꽉 차게 보이도록 viewBox 우측을 잘라내어 울릉도/독도 여백을 제거합니다.
const CustomSouthKorea = {
  ...SouthKorea,
  viewBox: "0 0 410 631" // 원본: "0 0 524 631" -> 우측 독도만 크롭하고 하단(제주도) 높이는 631로 원복
};

// 우측 사이드바 2열 나열용 커스텀 순서 (특별시->광역시->도)
const REGION_LIST = [
  { id: 'seoul', name: '서울' },
  { id: 'incheon', name: '인천' },
  { id: 'sejong', name: '세종' },
  { id: 'daejeon', name: '대전' },
  { id: 'gwangju', name: '광주' },
  { id: 'daegu', name: '대구' },
  { id: 'ulsan', name: '울산' },
  { id: 'busan', name: '부산' },
  { id: 'gyeonggi', name: '경기' },
  { id: 'gangwon', name: '강원' },
  { id: 'south-chungcheong', name: '충남' },
  { id: 'north-chungcheong', name: '충북' },
  { id: 'north-jeolla', name: '전북' },
  { id: 'north-gyeongsang', name: '경북' },
  { id: 'south-jeolla', name: '전남' },
  { id: 'south-gyeongsang', name: '경남' },
  { id: 'jeju', name: '제주' }
];

// 모바일 세로 뷰어용 오리지널 단순 리스트 정렬
const REGION_LIST_MOBILE = [
  { id: 'seoul', name: '서울' },
  { id: 'incheon', name: '인천' },
  { id: 'daejeon', name: '대전' },
  { id: 'daegu', name: '대구' },
  { id: 'gwangju', name: '광주' },
  { id: 'ulsan', name: '울산' },
  { id: 'busan', name: '부산' },
  { id: 'sejong', name: '세종' },
  { id: 'gyeonggi', name: '경기' },
  { id: 'gangwon', name: '강원' },
  { id: 'north-chungcheong', name: '충북' },
  { id: 'south-chungcheong', name: '충남' },
  { id: 'north-jeolla', name: '전북' },
  { id: 'south-jeolla', name: '전남' },
  { id: 'north-gyeongsang', name: '경북' },
  { id: 'south-gyeongsang', name: '경남' },
  { id: 'jeju', name: '제주' }
];

// react-svg-map 대한민국 행정구역 ID와 실제 데이터의 지역 한글명 매핑
const REGION_MAP: Record<string, string> = Object.fromEntries(
  REGION_LIST.map(r => [r.id, r.name])
);

// 검색어의 띄어쓰기 밎 대소문자 무시 필터 트릭
const cleanStr = (str: string) => str.replace(/\s+/g, '').toLowerCase();

export default function HomePage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const cleanQuery = cleanStr(searchQuery);

  const filteredStadiums = stadiumList.filter(s => {
    // 1. 검색어 태그/이름/팀/지역 검색
    const matchesSearch = 
      cleanQuery === '' || 
      cleanStr(s.name).includes(cleanQuery) || 
      cleanStr(s.team).includes(cleanQuery) || 
      cleanStr(s.region).includes(cleanQuery) ||
      s.tags.some(tag => cleanStr(tag).includes(cleanQuery));
    
    const matchesRegion = selectedRegion ? s.region === selectedRegion : true;
    
    return matchesSearch && matchesRegion;
  });

  const isActiveMode = selectedRegion !== null || cleanQuery !== '';

  const handleLocationClick = (event: any) => {
    const id = event.target.id;
    const koreanName = REGION_MAP[id];
    if (koreanName) {
       // Toggle logic
       setSelectedRegion(koreanName === selectedRegion ? null : koreanName);
       setSearchQuery('');
    } else {
       setSelectedRegion(null);
    }
  };

  const getLocationClassName = (location: any) => {
    const koreanName = REGION_MAP[location.id];
    const isSelected = selectedRegion && koreanName === selectedRegion;
    const hasStadiums = !!koreanName;
    let className = `svg-map__location ${classes.mapPath}`;
    if (isSelected) className += ` ${classes.mapPathActive}`;
    if (!hasStadiums) className += ` ${classes.mapPathDisabled}`;
    return className;
  };

  return (
    <div className={classes.homeContainer}>
      <header className={classes.homeHeader}>
        <h1>vieWhere 🏟️</h1>
        <p>전국 프로야구 시야 통합 뷰어</p>
        <input 
          type="text" 
          placeholder="구장, 구단, 지역 이름으로 검색 (예: 라이온즈, 잠실, 서울)" 
          className={classes.searchBar}
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setSelectedRegion(null); // 검색 시 지역 필터 해제
          }}
        />
      </header>

      <main className={classes.homeMain}>
        <div className={`${classes.layoutFlex} ${!isActiveMode ? classes.centeredLayout : ''}`}>
          
          {/* Left: Interactive Map */}
          <div className={classes.mapContainer}>
            {!isActiveMode && (
              <p className={classes.mapTip}>지도나 지역명을 선택하세요 👆</p>
            )}
            <div className={classes.mapWithSidebar}>
              <div className={classes.realMap}>
                <SVGMap 
                  map={CustomSouthKorea} 
                  onLocationClick={handleLocationClick}
                  locationClassName={getLocationClassName}
                />
              </div>
              <div className={`${classes.regionSidebar} ${classes.desktopSidebar}`}>
                {REGION_LIST.map(region => (
                  <button 
                    key={`desktop-${region.id}`} 
                    className={`${classes.sidebarBtn} ${selectedRegion === region.name ? classes.activeSidebarBtn : ''} ${!stadiumList.some(s => s.region === region.name) ? classes.sidebarBtnEmpty : ''}`}
                    onClick={() => {
                      setSelectedRegion(region.name === selectedRegion ? null : region.name);
                      setSearchQuery('');
                    }}
                  >
                    {region.name}
                  </button>
                ))}
              </div>
              <div className={`${classes.regionSidebar} ${classes.mobileSidebar}`}>
                {REGION_LIST_MOBILE.map(region => (
                  <button 
                    key={`mobile-${region.id}`} 
                    className={`${classes.sidebarBtn} ${selectedRegion === region.name ? classes.activeSidebarBtn : ''} ${!stadiumList.some(s => s.region === region.name) ? classes.sidebarBtnEmpty : ''}`}
                    onClick={() => {
                      setSelectedRegion(region.name === selectedRegion ? null : region.name);
                      setSearchQuery('');
                    }}
                  >
                    {region.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Stadium Results (Only show when active) */}
          {isActiveMode && (
            <div className={classes.stadiumListContainer}>
              <h2 className={classes.listTitle}>
                {selectedRegion ? `${selectedRegion} 지역 야구장` : `"${searchQuery}" 검색 결과`}
              </h2>
              <div className={classes.grid}>
                {filteredStadiums.map(stadium => (
                  <div 
                    key={stadium.id} 
                    className={classes.stadiumCard} 
                    onClick={() => navigate(`/stadium/${stadium.id}`)}
                  >
                    <div className={classes.thumbnail} style={{ backgroundImage: `url(${stadium.thumbnail})` }}>
                      <span className={classes.regionBadge}>{stadium.region}</span>
                    </div>
                    <div className={classes.cardInfo}>
                      <h3>{stadium.name}</h3>
                      <p className={classes.teamName}>{stadium.team}</p>
                    </div>
                  </div>
                ))}
                {filteredStadiums.length === 0 && (
                  <p className={classes.emptyState}>조건에 일치하는 구장이 없습니다.</p>
                )}
              </div>
            </div>
          )}
          
        </div>
      </main>
    </div>
  )
}
