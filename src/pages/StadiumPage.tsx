import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import classes from '../App.module.css'; // Reusing existing layout
import SSGLandersMap from '../components/SSGLandersMap';
import SectorViewPanel from '../components/SectorViewPanel';
import { ssgSectors } from '../data/mockSectors';
import { stadiumList } from '../data/stadiums';

export default function StadiumPage() {
  const { stadiumId } = useParams();
  const navigate = useNavigate();
  const [selectedSectorId, setSelectedSectorId] = useState<string | null>(null);

  // 현재 구장의 메타데이터 로드
  const stadiumMeta = stadiumList.find(s => s.id === stadiumId);

  // Dynamic Theming (팀 컬러 주입)
  useEffect(() => {
    if (stadiumMeta) {
      document.documentElement.style.setProperty('--primary-color', stadiumMeta.primaryColor);
      // secondaryColor가 너무 밝으므로 임시로 어둡게 변경하거나 다른 변수를 조정
      // document.documentElement.style.setProperty('--secondary-color', stadiumMeta.secondaryColor);
    }
    return () => {
      // 컴포넌트 언마운트 (뒤로가기 등) 시 원래 테마로 복구
      document.documentElement.style.setProperty('--primary-color', '#2b2b2b');
    };
  }, [stadiumMeta]);

  if (!stadiumMeta) {
    return (
      <div style={{padding: '5rem', textAlign: 'center', fontSize: '1.2rem'}}>
        존재하지 않는 구장입니다.<br/><br/>
        <button onClick={()=>navigate('/')} style={{padding: '0.8rem 1.5rem', borderRadius: '8px', cursor: 'pointer'}}>
          홈으로 돌아가기
        </button>
      </div>
    );
  }

  // 아직 SSG 외에는 데이터 매핑 전이므로 빈 객체 반환
  const sectorsData = stadiumId === 'landers' ? ssgSectors : {};
  // URL로 다이렉트 딥링킹된 섹터가 있는지 검사 (예: /stadium/landers?sector=couple-left 향후 대응)
  const selectedSector = selectedSectorId ? sectorsData[selectedSectorId] : null;

  return (
    <div className={classes.appContainer}>
      <header className={classes.header} style={{ transition: 'background-color 0.4s ease' }}>
        <div className={classes.stadiumHeaderLayout}>
          <button 
            onClick={() => navigate('/')} 
            className={classes.backButton}
            aria-label="뒤로가기"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <div className={classes.stadiumHeaderTitles}>
            <h1>{stadiumMeta.name}</h1>
          </div>
          {/* Empty div for flex balance if needed */}
          <div className={classes.headerSpacer}></div>
        </div>
      </header>
      
      <main className={classes.mainContent}>
        <div className={classes.layoutGrid}>
          <div className={classes.mapSection}>
            <div className={classes.sectionTitle}>
              <h2>좌석 배치도</h2>
              <p>배치도 내 구역을 터치하여 상세 뷰와 사용자 리뷰를 확인하세요.</p>
            </div>
            
            {stadiumId === 'landers' ? (
              <SSGLandersMap 
                onSectorSelect={setSelectedSectorId} 
                selectedSectorId={selectedSectorId} 
              />
            ) : (
              <div style={{background: '#fff', padding: '5rem 2rem', borderRadius: '16px', textAlign: 'center', color: '#a0aec0', boxShadow: '0 10px 20px rgba(0,0,0,0.05)'}}>
                <h3>🚧 위성 지도 매핑 작업 진행 중입니다 🚧</h3>
                <p>python 추출 스크립트를 통해 곧 {stadiumMeta.name}의 상세 도면이 업로드 됩니다.</p>
              </div>
            )}
          </div>
          
          <div className={classes.panelSection}>
            <SectorViewPanel sector={selectedSector} />
          </div>
        </div>
      </main>
    </div>
  )
}
