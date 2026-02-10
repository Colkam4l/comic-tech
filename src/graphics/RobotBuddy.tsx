import React from 'react';

interface Props {
  onRegionClick: (regionId: string) => void;
  regionColors: Record<string, string>;
}

const RobotBuddy: React.FC<Props> = ({ onRegionClick, regionColors }) => {
  const fill = (id: string) => regionColors[id] || '#ffffff';
  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.stopPropagation();
    onRegionClick(id);
  };

  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      {/* Antenna base */}
      <rect
        data-region="antenna-base"
        x="185" y="40" width="30" height="30" rx="4"
        fill={fill('antenna-base')} stroke="#1e293b" strokeWidth="2.5"
        onClick={handleClick('antenna-base')} style={{ cursor: 'pointer' }}
      />
      {/* Antenna ball */}
      <circle
        data-region="antenna-ball"
        cx="200" cy="28" r="16"
        fill={fill('antenna-ball')} stroke="#1e293b" strokeWidth="2.5"
        onClick={handleClick('antenna-ball')} style={{ cursor: 'pointer' }}
      />
      {/* Head */}
      <rect
        data-region="head"
        x="120" y="70" width="160" height="110" rx="20"
        fill={fill('head')} stroke="#1e293b" strokeWidth="2.5"
        onClick={handleClick('head')} style={{ cursor: 'pointer' }}
      />
      {/* Left eye */}
      <circle
        data-region="left-eye"
        cx="170" cy="120" r="22"
        fill={fill('left-eye')} stroke="#1e293b" strokeWidth="2.5"
        onClick={handleClick('left-eye')} style={{ cursor: 'pointer' }}
      />
      {/* Left pupil */}
      <circle
        data-region="left-pupil"
        cx="170" cy="120" r="10"
        fill={fill('left-pupil')} stroke="#1e293b" strokeWidth="2"
        onClick={handleClick('left-pupil')} style={{ cursor: 'pointer' }}
      />
      {/* Right eye */}
      <circle
        data-region="right-eye"
        cx="230" cy="120" r="22"
        fill={fill('right-eye')} stroke="#1e293b" strokeWidth="2.5"
        onClick={handleClick('right-eye')} style={{ cursor: 'pointer' }}
      />
      {/* Right pupil */}
      <circle
        data-region="right-pupil"
        cx="230" cy="120" r="10"
        fill={fill('right-pupil')} stroke="#1e293b" strokeWidth="2"
        onClick={handleClick('right-pupil')} style={{ cursor: 'pointer' }}
      />
      {/* Mouth */}
      <rect
        data-region="mouth"
        x="170" y="150" width="60" height="14" rx="7"
        fill={fill('mouth')} stroke="#1e293b" strokeWidth="2"
        onClick={handleClick('mouth')} style={{ cursor: 'pointer' }}
      />
      {/* Neck */}
      <rect
        data-region="neck"
        x="180" y="180" width="40" height="25" rx="4"
        fill={fill('neck')} stroke="#1e293b" strokeWidth="2.5"
        onClick={handleClick('neck')} style={{ cursor: 'pointer' }}
      />
      {/* Body */}
      <rect
        data-region="body"
        x="110" y="205" width="180" height="150" rx="16"
        fill={fill('body')} stroke="#1e293b" strokeWidth="2.5"
        onClick={handleClick('body')} style={{ cursor: 'pointer' }}
      />
      {/* Chest panel */}
      <rect
        data-region="chest-panel"
        x="150" y="230" width="100" height="60" rx="8"
        fill={fill('chest-panel')} stroke="#1e293b" strokeWidth="2"
        onClick={handleClick('chest-panel')} style={{ cursor: 'pointer' }}
      />
      {/* Button 1 */}
      <circle
        data-region="button-1"
        cx="175" cy="260" r="10"
        fill={fill('button-1')} stroke="#1e293b" strokeWidth="2"
        onClick={handleClick('button-1')} style={{ cursor: 'pointer' }}
      />
      {/* Button 2 */}
      <circle
        data-region="button-2"
        cx="225" cy="260" r="10"
        fill={fill('button-2')} stroke="#1e293b" strokeWidth="2"
        onClick={handleClick('button-2')} style={{ cursor: 'pointer' }}
      />
      {/* Belly indicator */}
      <rect
        data-region="belly"
        x="170" y="310" width="60" height="30" rx="6"
        fill={fill('belly')} stroke="#1e293b" strokeWidth="2"
        onClick={handleClick('belly')} style={{ cursor: 'pointer' }}
      />
      {/* Left arm */}
      <rect
        data-region="left-arm"
        x="55" y="220" width="50" height="110" rx="14"
        fill={fill('left-arm')} stroke="#1e293b" strokeWidth="2.5"
        onClick={handleClick('left-arm')} style={{ cursor: 'pointer' }}
      />
      {/* Left hand */}
      <circle
        data-region="left-hand"
        cx="80" cy="345" r="18"
        fill={fill('left-hand')} stroke="#1e293b" strokeWidth="2.5"
        onClick={handleClick('left-hand')} style={{ cursor: 'pointer' }}
      />
      {/* Right arm */}
      <rect
        data-region="right-arm"
        x="295" y="220" width="50" height="110" rx="14"
        fill={fill('right-arm')} stroke="#1e293b" strokeWidth="2.5"
        onClick={handleClick('right-arm')} style={{ cursor: 'pointer' }}
      />
      {/* Right hand */}
      <circle
        data-region="right-hand"
        cx="320" cy="345" r="18"
        fill={fill('right-hand')} stroke="#1e293b" strokeWidth="2.5"
        onClick={handleClick('right-hand')} style={{ cursor: 'pointer' }}
      />
      {/* Left leg */}
      <rect
        data-region="left-leg"
        x="140" y="355" width="45" height="90" rx="12"
        fill={fill('left-leg')} stroke="#1e293b" strokeWidth="2.5"
        onClick={handleClick('left-leg')} style={{ cursor: 'pointer' }}
      />
      {/* Left foot */}
      <rect
        data-region="left-foot"
        x="125" y="435" width="70" height="28" rx="10"
        fill={fill('left-foot')} stroke="#1e293b" strokeWidth="2.5"
        onClick={handleClick('left-foot')} style={{ cursor: 'pointer' }}
      />
      {/* Right leg */}
      <rect
        data-region="right-leg"
        x="215" y="355" width="45" height="90" rx="12"
        fill={fill('right-leg')} stroke="#1e293b" strokeWidth="2.5"
        onClick={handleClick('right-leg')} style={{ cursor: 'pointer' }}
      />
      {/* Right foot */}
      <rect
        data-region="right-foot"
        x="205" y="435" width="70" height="28" rx="10"
        fill={fill('right-foot')} stroke="#1e293b" strokeWidth="2.5"
        onClick={handleClick('right-foot')} style={{ cursor: 'pointer' }}
      />
      {/* Ear bolts */}
      <circle
        data-region="left-ear"
        cx="115" cy="125" r="10"
        fill={fill('left-ear')} stroke="#1e293b" strokeWidth="2"
        onClick={handleClick('left-ear')} style={{ cursor: 'pointer' }}
      />
      <circle
        data-region="right-ear"
        cx="285" cy="125" r="10"
        fill={fill('right-ear')} stroke="#1e293b" strokeWidth="2"
        onClick={handleClick('right-ear')} style={{ cursor: 'pointer' }}
      />
    </svg>
  );
};

export default RobotBuddy;
