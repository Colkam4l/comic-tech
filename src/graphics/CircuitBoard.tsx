import React from 'react';

interface Props {
    onRegionClick: (regionId: string) => void;
    regionColors: Record<string, string>;
}

const CircuitBoard: React.FC<Props> = ({ onRegionClick, regionColors }) => {
    const fill = (id: string) => regionColors[id] || '#ffffff';
    const handleClick = (id: string) => (e: React.MouseEvent) => {
        e.stopPropagation();
        onRegionClick(id);
    };

    return (
        <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            {/* Board background */}
            <rect
                data-region="board"
                x="30" y="30" width="340" height="440" rx="12"
                fill={fill('board')} stroke="#1e293b" strokeWidth="2.5"
                onClick={handleClick('board')} style={{ cursor: 'pointer' }}
            />
            {/* Main processor chip */}
            <rect
                data-region="cpu"
                x="140" y="160" width="120" height="120" rx="6"
                fill={fill('cpu')} stroke="#1e293b" strokeWidth="2.5"
                onClick={handleClick('cpu')} style={{ cursor: 'pointer' }}
            />
            {/* CPU inner die */}
            <rect
                data-region="cpu-die"
                x="165" y="185" width="70" height="70" rx="4"
                fill={fill('cpu-die')} stroke="#1e293b" strokeWidth="2"
                onClick={handleClick('cpu-die')} style={{ cursor: 'pointer' }}
            />
            {/* Memory chip 1 */}
            <rect
                data-region="mem-1"
                x="60" y="60" width="80" height="40" rx="4"
                fill={fill('mem-1')} stroke="#1e293b" strokeWidth="2"
                onClick={handleClick('mem-1')} style={{ cursor: 'pointer' }}
            />
            {/* Memory chip 2 */}
            <rect
                data-region="mem-2"
                x="260" y="60" width="80" height="40" rx="4"
                fill={fill('mem-2')} stroke="#1e293b" strokeWidth="2"
                onClick={handleClick('mem-2')} style={{ cursor: 'pointer' }}
            />
            {/* Capacitor 1 */}
            <ellipse
                data-region="cap-1"
                cx="85" cy="160" rx="22" ry="22"
                fill={fill('cap-1')} stroke="#1e293b" strokeWidth="2"
                onClick={handleClick('cap-1')} style={{ cursor: 'pointer' }}
            />
            {/* Capacitor 2 */}
            <ellipse
                data-region="cap-2"
                cx="315" cy="160" rx="22" ry="22"
                fill={fill('cap-2')} stroke="#1e293b" strokeWidth="2"
                onClick={handleClick('cap-2')} style={{ cursor: 'pointer' }}
            />
            {/* Resistor block 1 */}
            <rect
                data-region="res-1"
                x="55" y="240" width="60" height="24" rx="4"
                fill={fill('res-1')} stroke="#1e293b" strokeWidth="2"
                onClick={handleClick('res-1')} style={{ cursor: 'pointer' }}
            />
            {/* Resistor block 2 */}
            <rect
                data-region="res-2"
                x="285" y="240" width="60" height="24" rx="4"
                fill={fill('res-2')} stroke="#1e293b" strokeWidth="2"
                onClick={handleClick('res-2')} style={{ cursor: 'pointer' }}
            />
            {/* GPU chip */}
            <rect
                data-region="gpu"
                x="140" y="330" width="120" height="70" rx="6"
                fill={fill('gpu')} stroke="#1e293b" strokeWidth="2.5"
                onClick={handleClick('gpu')} style={{ cursor: 'pointer' }}
            />
            {/* Power regulator */}
            <rect
                data-region="power"
                x="60" y="380" width="50" height="60" rx="4"
                fill={fill('power')} stroke="#1e293b" strokeWidth="2"
                onClick={handleClick('power')} style={{ cursor: 'pointer' }}
            />
            {/* IO connector */}
            <rect
                data-region="io"
                x="290" y="380" width="50" height="60" rx="4"
                fill={fill('io')} stroke="#1e293b" strokeWidth="2"
                onClick={handleClick('io')} style={{ cursor: 'pointer' }}
            />

            {/* Trace lines (decorative, not fillable) */}
            <line x1="140" y1="80" x2="140" y2="160" stroke="#1e293b" strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="260" y1="80" x2="260" y2="160" stroke="#1e293b" strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="107" y1="160" x2="140" y2="200" stroke="#1e293b" strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="293" y1="160" x2="260" y2="200" stroke="#1e293b" strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="200" y1="280" x2="200" y2="330" stroke="#1e293b" strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="115" y1="252" x2="140" y2="252" stroke="#1e293b" strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="260" y1="252" x2="285" y2="252" stroke="#1e293b" strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="110" y1="410" x2="140" y2="370" stroke="#1e293b" strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="290" y1="410" x2="260" y2="370" stroke="#1e293b" strokeWidth="1.5" strokeDasharray="4 3" />

            {/* Solder pads */}
            <circle data-region="pad-1" cx="140" cy="130" r="8" fill={fill('pad-1')} stroke="#1e293b" strokeWidth="1.5" onClick={handleClick('pad-1')} style={{ cursor: 'pointer' }} />
            <circle data-region="pad-2" cx="260" cy="130" r="8" fill={fill('pad-2')} stroke="#1e293b" strokeWidth="1.5" onClick={handleClick('pad-2')} style={{ cursor: 'pointer' }} />
            <circle data-region="pad-3" cx="200" cy="310" r="8" fill={fill('pad-3')} stroke="#1e293b" strokeWidth="1.5" onClick={handleClick('pad-3')} style={{ cursor: 'pointer' }} />
            <circle data-region="pad-4" cx="100" cy="310" r="8" fill={fill('pad-4')} stroke="#1e293b" strokeWidth="1.5" onClick={handleClick('pad-4')} style={{ cursor: 'pointer' }} />
            <circle data-region="pad-5" cx="300" cy="310" r="8" fill={fill('pad-5')} stroke="#1e293b" strokeWidth="1.5" onClick={handleClick('pad-5')} style={{ cursor: 'pointer' }} />
        </svg>
    );
};

export default CircuitBoard;
