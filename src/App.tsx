import { useState } from 'react';
import classes from './App.module.css';
import VirtualStadiumMap from './components/VirtualStadiumMap';
import SectorViewPanel from './components/SectorViewPanel';
import { mockSectors } from './data/mockSectors';

function App() {
  const [selectedSectorId, setSelectedSectorId] = useState<string | null>(null);

  const selectedSector = selectedSectorId ? mockSectors[selectedSectorId] : null;

  return (
    <div className={classes.appContainer}>
      <header className={classes.header}>
        <h1>vieWhere</h1>
        <p>Phase 2: 가상 스태디움 시야 뷰어 모델 (PoC)</p>
      </header>
      
      <main className={classes.mainContent}>
        <div className={classes.layoutGrid}>
          <div className={classes.mapSection}>
            <div className={classes.sectionTitle}>
              <h2>인터랙티브 좌석 배치도</h2>
              <p>색상이 표시된 구역을 클릭하여 해당 시야를 확인해보세요.</p>
            </div>
            <VirtualStadiumMap 
              onSectorSelect={setSelectedSectorId} 
              selectedSectorId={selectedSectorId} 
            />
          </div>
          
          <div className={classes.panelSection}>
            <SectorViewPanel sector={selectedSector} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
