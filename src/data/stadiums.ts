export interface StadiumMeta {
  id: string;
  name: string;
  team: string;
  region: string;
  primaryColor: string;
  secondaryColor: string;
  thumbnail: string;
  tags: string[];
}

export const stadiumList: StadiumMeta[] = [
  {
    id: 'landers',
    name: '인천 SSG 랜더스필드',
    team: 'SSG 랜더스',
    region: '인천',
    primaryColor: '#CE1126',
    secondaryColor: '#f7f9fc',
    thumbnail: 'https://picsum.photos/id/1015/300/200',
    tags: ['야구', 'KBO', 'SSG', '인천']
  },
  {
    id: 'jamsil-bears',
    name: '서울 종합운동장 야구장 (잠실)',
    team: '두산 베어스 / LG 트윈스',
    region: '서울',
    primaryColor: '#131230',
    secondaryColor: '#ED1C24',
    thumbnail: 'https://picsum.photos/id/1016/300/200',
    tags: ['야구', 'KBO', '두산', 'LG', '서울']
  },
  {
    id: 'gocheok',
    name: '고척 스카이돔',
    team: '키움 히어로즈',
    region: '서울',
    primaryColor: '#820024',
    secondaryColor: '#B0B1B3',
    thumbnail: 'https://picsum.photos/id/1026/300/200',
    tags: ['야구', 'KBO', '키움', '서울', '고척']
  },
  {
    id: 'kt',
    name: '수원 KT 위즈 파크',
    team: 'kt wiz',
    region: '경기',
    primaryColor: '#000000',
    secondaryColor: '#EC008C',
    thumbnail: 'https://picsum.photos/id/1025/300/200',
    tags: ['야구', 'KBO', 'KT', '수원', '경기']
  },
  {
    id: 'eagles',
    name: '한화생명 이글스 파크',
    team: '한화 이글스',
    region: '대전',
    primaryColor: '#FF6600',
    secondaryColor: '#000000',
    thumbnail: 'https://picsum.photos/id/1021/300/200',
    tags: ['야구', 'KBO', '한화', '대전']
  },
  {
    id: 'lions',
    name: '대구 삼성 라이온즈 파크',
    team: '삼성 라이온즈',
    region: '대구',
    primaryColor: '#074CA1',
    secondaryColor: '#C0C0C0',
    thumbnail: 'https://picsum.photos/id/1022/300/200',
    tags: ['야구', 'KBO', '삼성', '대구']
  },
  {
    id: 'champions',
    name: '광주 기아 챔피언스 필드',
    team: 'KIA 타이거즈',
    region: '광주',
    primaryColor: '#EA0029',
    secondaryColor: '#000000',
    thumbnail: 'https://picsum.photos/id/1020/300/200',
    tags: ['야구', 'KBO', '기아', 'KIA', '광주']
  },
  {
    id: 'sajik',
    name: '부산 사직 야구장',
    team: '롯데 자이언츠',
    region: '부산',
    primaryColor: '#041E42',
    secondaryColor: '#D1143A',
    thumbnail: 'https://picsum.photos/id/1023/300/200',
    tags: ['야구', 'KBO', '롯데', '부산']
  },
  {
    id: 'nc',
    name: '창원 NC 파크',
    team: 'NC 다이노스',
    region: '경남',
    primaryColor: '#315288',
    secondaryColor: '#D1B280',
    thumbnail: 'https://picsum.photos/id/1024/300/200',
    tags: ['야구', 'KBO', 'NC', '창원', '경남']
  }
];
