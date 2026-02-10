import React from 'react';

interface Props {
    onRegionClick: (regionId: string) => void;
    regionColors: Record<string, string>;
}

const SpaceRocket: React.FC<Props> = ({ onRegionClick, regionColors }) => {
    const fill = (id: string) => regionColors[id] || '#ffffff';
    const handleClick = (id: string) => (e: React.MouseEvent) => {
        e.stopPropagation();
        onRegionClick(id);
    };

    return (
        <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            {/* Nose cone */}
            <path
                data-region="nose"
                d="M200,30 L160,120 L240,120 Z"
                fill={fill('nose')} stroke="#1e293b" strokeWidth="2.5"
                onClick={handleClick('nose')} style={{ cursor: 'pointer' }}
            />
            {/* Upper body */}
            <rect
                data-region="upper-body"
                x="160" y="120" width="80" height="80" rx="4"
                fill={fill('upper-body')} stroke="#1e293b" strokeWidth="2.5"
                onClick={handleClick('upper-body')} style={{ cursor: 'pointer' }}
            />
            {/* Window */}
            <circle
                data-region="window"
                cx="200" cy="160" r="24"
                fill={fill('window')} stroke="#1e293b" strokeWidth="2.5"
                onClick={handleClick('window')} style={{ cursor: 'pointer' }}
            />
            {/* Window inner */}
            <circle
                data-region="window-inner"
                cx="200" cy="160" r="14"
                fill={fill('window-inner')} stroke="#1e293b" strokeWidth="1.5"
                onClick={handleClick('window-inner')} style={{ cursor: 'pointer' }}
            />
            {/* Mid body */}
            <rect
                data-region="mid-body"
                x="155" y="200" width="90" height="100" rx="4"
                fill={fill('mid-body')} stroke="#1e293b" strokeWidth="2.5"
                onClick={handleClick('mid-body')} style={{ cursor: 'pointer' }}
            />
            {/* Body stripe */}
            <rect
                data-region="stripe"
                x="155" y="240" width="90" height="20"
                fill={fill('stripe')} stroke="#1e293b" strokeWidth="2"
                onClick={handleClick('stripe')} style={{ cursor: 'pointer' }}
            />
            {/* Lower body */}
            <rect
                data-region="lower-body"
                x="150" y="300" width="100" height="60" rx="4"
                fill={fill('lower-body')} stroke="#1e293b" strokeWidth="2.5"
                onClick={handleClick('lower-body')} style={{ cursor: 'pointer' }}
            />
            {/* Left fin */}
            <path
                data-region="left-fin"
                d="M150,280 L90,370 L150,360 Z"
                fill={fill('left-fin')} stroke="#1e293b" strokeWidth="2.5"
                onClick={handleClick('left-fin')} style={{ cursor: 'pointer' }}
            />
            {/* Right fin */}
            <path
                data-region="right-fin"
                d="M250,280 L310,370 L250,360 Z"
                fill={fill('right-fin')} stroke="#1e293b" strokeWidth="2.5"
                onClick={handleClick('right-fin')} style={{ cursor: 'pointer' }}
            />
            {/* Exhaust nozzle */}
            <path
                data-region="nozzle"
                d="M165,360 L155,400 L245,400 L235,360 Z"
                fill={fill('nozzle')} stroke="#1e293b" strokeWidth="2.5"
                onClick={handleClick('nozzle')} style={{ cursor: 'pointer' }}
            />
            {/* Flame center */}
            <path
                data-region="flame-center"
                d="M175,400 L200,470 L225,400 Z"
                fill={fill('flame-center')} stroke="#1e293b" strokeWidth="2"
                onClick={handleClick('flame-center')} style={{ cursor: 'pointer' }}
            />
            {/* Flame left */}
            <path
                data-region="flame-left"
                d="M160,400 L170,450 L185,400 Z"
                fill={fill('flame-left')} stroke="#1e293b" strokeWidth="2"
                onClick={handleClick('flame-left')} style={{ cursor: 'pointer' }}
            />
            {/* Flame right */}
            <path
                data-region="flame-right"
                d="M215,400 L230,450 L240,400 Z"
                fill={fill('flame-right')} stroke="#1e293b" strokeWidth="2"
                onClick={handleClick('flame-right')} style={{ cursor: 'pointer' }}
            />
            {/* Star 1 */}
            <polygon
                data-region="star-1"
                points="60,80 65,95 80,95 68,105 73,120 60,110 47,120 52,105 40,95 55,95"
                fill={fill('star-1')} stroke="#1e293b" strokeWidth="1.5"
                onClick={handleClick('star-1')} style={{ cursor: 'pointer' }}
            />
            {/* Star 2 */}
            <polygon
                data-region="star-2"
                points="340,140 345,155 360,155 348,165 353,180 340,170 327,180 332,165 320,155 335,155"
                fill={fill('star-2')} stroke="#1e293b" strokeWidth="1.5"
                onClick={handleClick('star-2')} style={{ cursor: 'pointer' }}
            />
            {/* Planet */}
            <circle
                data-region="planet"
                cx="60" cy="400" r="30"
                fill={fill('planet')} stroke="#1e293b" strokeWidth="2"
                onClick={handleClick('planet')} style={{ cursor: 'pointer' }}
            />
            {/* Planet ring */}
            <ellipse
                data-region="planet-ring"
                cx="60" cy="400" rx="48" ry="10"
                fill={fill('planet-ring')} stroke="#1e293b" strokeWidth="2"
                onClick={handleClick('planet-ring')} style={{ cursor: 'pointer' }}
            />
        </svg>
    );
};

export default SpaceRocket;
