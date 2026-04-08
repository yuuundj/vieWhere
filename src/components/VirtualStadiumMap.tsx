import classes from './VirtualStadiumMap.module.css';

interface VirtualStadiumMapProps {
  onSectorSelect: (id: string) => void;
  selectedSectorId: string | null;
}

export default function VirtualStadiumMap({ onSectorSelect, selectedSectorId }: VirtualStadiumMapProps) {
  // SVG paths roughly mapping to a baseball stadium seating arrangement
  const sectors = [
    { id: 'home-plate', d: 'M 350 550 Q 400 570 450 550 L 490 590 Q 400 630 310 590 Z', label: 'VIP석', bx: 400, by: 580 },
    { id: 'first-base', d: 'M 450 550 L 720 280 L 780 340 Q 650 550 490 590 Z', label: '1루 응원석', bx: 600, by: 470 },
    { id: 'third-base', d: 'M 350 550 L 80 280 L 20 340 Q 150 550 310 590 Z', label: '3루 지정석', bx: 200, by: 470 },
    { id: 'outfield', d: 'M 720 280 L 680 240 Q 400 80 120 240 L 80 280 Q 400 10 720 280 Z', label: '외야 일반석', bx: 400, by: 160 },
  ];

  return (
    <div className={classes.mapContainer}>
      <svg viewBox="0 0 800 650" className={classes.svgField}>
        {/* Grass and Diamond (Field, Not Clickable) */}
        <path d="M 400 520 L 700 220 Q 400 50 100 220 Z" className={classes.grass} />
        <path d="M 400 520 L 470 450 L 400 380 L 330 450 Z" className={classes.dirt} />

        {/* Clickable Sectors */}
        {sectors.map((sec) => (
          <path
            key={sec.id}
            d={sec.d}
            className={`${classes.sector} ${selectedSectorId === sec.id ? classes.active : ''}`}
            onClick={() => onSectorSelect(sec.id)}
          >
            <title>{sec.label}</title>
          </path>
        ))}
        
        {/* Simple Text Labels */}
        {sectors.map((sec) => (
           <text key={`label-${sec.id}`} x={sec.bx} y={sec.by} textAnchor="middle" className={classes.label}>
             {sec.label}
           </text>
        ))}
      </svg>
    </div>
  );
}
