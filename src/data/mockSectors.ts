export interface SectorData {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export const mockSectors: Record<string, SectorData> = {
  'home-plate': {
    id: 'home-plate',
    name: '포수 뒷편 중앙석 (VIP)',
    description: '가장 편안하고 생동감 넘치는 프리미엄 좌석입니다. 투구의 역동성을 가장 가까이서 느낄 수 있습니다.',
    imageUrl: 'https://picsum.photos/id/1015/800/500', 
  },
  'first-base': {
    id: 'first-base',
    name: '1루 응원지정석 (홈팀)',
    description: '응원단상과 가장 가까운 위치로, 홈팀 팬들과 함께 에너제틱한 응원전을 즐기기에 최적인 구역입니다.',
    imageUrl: 'https://picsum.photos/id/1016/800/500', 
  },
  'third-base': {
    id: 'third-base',
    name: '3루 블루석 (원정팀)',
    description: '경기를 쾌적하고 다양한 각도에서 관람할 수 있으며 1루측의 열기를 마주보며 즐기는 원정 응원 구역입니다.',
    imageUrl: 'https://picsum.photos/id/1018/800/500', 
  },
  'outfield': {
    id: 'outfield',
    name: '외야 일반석',
    description: '소풍 온 듯 돗자리를 펴고 자유롭고 쾌적하게 관람할 수 있습니다. 외야수들의 멋진 수비를 가까이서 볼 수 있습니다.',
    imageUrl: 'https://picsum.photos/id/1019/800/500', 
  }
};
