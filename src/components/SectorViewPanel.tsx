import classes from './SectorViewPanel.module.css';
import { SectorData } from '../data/mockSectors';

interface SectorViewPanelProps {
  sector: SectorData | null;
}

export default function SectorViewPanel({ sector }: SectorViewPanelProps) {
  if (!sector) {
    return (
      <div className={`${classes.panelContainer} ${classes.empty}`}>
        <div className={classes.emptyIcon}>⚾</div>
        <h3>구역을 탐색해주세요.</h3>
        <p>좌측 지도에서 좌석 블록을 클릭하면<br />시야 이미지가 표시됩니다.</p>
      </div>
    );
  }

  return (
    <div className={classes.panelContainer} key={sector.id}>
      <div className={classes.imageWrapper}>
        <img src={sector.imageUrl} alt={sector.name} className={classes.viewImage} />
        <div className={classes.imageOverlay}>
          <span className={classes.badge}>테스트 시야 뷰</span>
        </div>
      </div>
      <div className={classes.info}>
        <h2>{sector.name}</h2>
        <p className={classes.desc}>{sector.description}</p>
      </div>
    </div>
  );
}
