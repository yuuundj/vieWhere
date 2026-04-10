import { useState } from 'react';
import classes from './SSGLandersMap.module.css';
import { ssgSectors } from '../data/mockSectors';
import bgImage from '../assets/maps/landersField.jpg';

interface SSGLandersMapProps {
  onSectorSelect: (id: string) => void;
  selectedSectorId: string | null;
}

export default function SSGLandersMap({ onSectorSelect, selectedSectorId }: SSGLandersMapProps) {
  const [hasClicked, setHasClicked] = useState(false);
  const mapData = Object.values(ssgSectors);

  const handleSelect = (id: string) => {
    setHasClicked(true);
    onSectorSelect(id);
  };

  return (
    <div className={classes.mapContainer}>
      <img src={bgImage} className={classes.bgImage} alt="SSG 랜더스필드 공식 스탠드 맵" />
      
      {!hasClicked && (
        <div className={classes.tooltip}>
          <span className={classes.tooltipIcon}>👆</span>
          구역을 터치해보세요!
        </div>
      )}

      <svg viewBox="0 0 3360 3084" className={classes.svgField}>
        {mapData.map((sec) => {
          const isActive = selectedSectorId === sec.id;
          return (
            <g key={sec.id} onClick={() => handleSelect(sec.id)}>
              <path
                d={sec.d}
                className={`${classes.sector} ${isActive ? classes.active : ''}`}
              >
                <title>{sec.name}</title>
              </path>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
