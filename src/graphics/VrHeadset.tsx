import React from 'react';

interface Props {
    onRegionClick: (regionId: string) => void;
    regionColors: Record<string, string>;
}

const VrHeadset: React.FC<Props> = ({ onRegionClick, regionColors }) => {
    const fill = (id: string) => regionColors[id] || '#ffffff';
    const handleClick = (id: string) => (e: React.MouseEvent) => {
        e.stopPropagation();
        onRegionClick(id);
    };

    return (
        <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            {/* Main headset body */}
            <path
                data-region="body"
                d="M60,180 C60,140 100,100 200,100 C300,100 340,140 340,180 L340,280 C340,310 310,340 280,340 L250,340 L220,310 L180,310 L150,340 L120,340 C90,340 60,310 60,280 Z"
                fill={fill('body')} stroke="#1e293b" strokeWidth="2.5"
                onClick={handleClick('body')} style={{ cursor: 'pointer' }}
            />
            {/* Front visor */}
            <path
                data-region="visor"
                d="M80,170 C85,135 130,110 200,110 C270,110 315,135 320,170 L320,250 C320,265 310,275 295,275 L105,275 C90,275 80,265 80,250 Z"
                fill={fill('visor')} stroke="#1e293b" strokeWidth="2.5"
                onClick={handleClick('visor')} style={{ cursor: 'pointer' }}
            />
            {/* Left lens */}
            <circle
                data-region="left-lens"
                cx="155" cy="200" r="42"
                fill={fill('left-lens')} stroke="#1e293b" strokeWidth="2.5"
                onClick={handleClick('left-lens')} style={{ cursor: 'pointer' }}
            />
            {/* Left lens inner */}
            <circle
                data-region="left-lens-inner"
                cx="155" cy="200" r="25"
                fill={fill('left-lens-inner')} stroke="#1e293b" strokeWidth="1.5"
                onClick={handleClick('left-lens-inner')} style={{ cursor: 'pointer' }}
            />
            {/* Right lens */}
            <circle
                data-region="right-lens"
                cx="245" cy="200" r="42"
                fill={fill('right-lens')} stroke="#1e293b" strokeWidth="2.5"
                onClick={handleClick('right-lens')} style={{ cursor: 'pointer' }}
            />
            {/* Right lens inner */}
            <circle
                data-region="right-lens-inner"
                cx="245" cy="200" r="25"
                fill={fill('right-lens-inner')} stroke="#1e293b" strokeWidth="1.5"
                onClick={handleClick('right-lens-inner')} style={{ cursor: 'pointer' }}
            />
            {/* Nose bridge */}
            <path
                data-region="nose-bridge"
                d="M180,310 C190,290 210,290 220,310"
                fill={fill('nose-bridge')} stroke="#1e293b" strokeWidth="2.5"
                onClick={handleClick('nose-bridge')} style={{ cursor: 'pointer' }}
            />
            {/* Top strap */}
            <path
                data-region="top-strap"
                d="M140,105 C160,60 240,60 260,105"
                fill={fill('top-strap')} stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round"
                onClick={handleClick('top-strap')} style={{ cursor: 'pointer' }}
            />
            {/* Left strap */}
            <rect
                data-region="left-strap"
                x="30" y="190" width="30" height="60" rx="8"
                fill={fill('left-strap')} stroke="#1e293b" strokeWidth="2.5"
                onClick={handleClick('left-strap')} style={{ cursor: 'pointer' }}
            />
            {/* Right strap */}
            <rect
                data-region="right-strap"
                x="340" y="190" width="30" height="60" rx="8"
                fill={fill('right-strap')} stroke="#1e293b" strokeWidth="2.5"
                onClick={handleClick('right-strap')} style={{ cursor: 'pointer' }}
            />
            {/* LED indicator 1 */}
            <circle
                data-region="led-1"
                cx="200" cy="130" r="6"
                fill={fill('led-1')} stroke="#1e293b" strokeWidth="1.5"
                onClick={handleClick('led-1')} style={{ cursor: 'pointer' }}
            />
            {/* LED indicator 2 */}
            <circle
                data-region="led-2"
                cx="130" cy="148" r="5"
                fill={fill('led-2')} stroke="#1e293b" strokeWidth="1.5"
                onClick={handleClick('led-2')} style={{ cursor: 'pointer' }}
            />
            {/* LED indicator 3 */}
            <circle
                data-region="led-3"
                cx="270" cy="148" r="5"
                fill={fill('led-3')} stroke="#1e293b" strokeWidth="1.5"
                onClick={handleClick('led-3')} style={{ cursor: 'pointer' }}
            />

            {/* Controller - Left */}
            <rect
                data-region="controller-left"
                x="70" y="380" width="40" height="80" rx="12"
                fill={fill('controller-left')} stroke="#1e293b" strokeWidth="2"
                onClick={handleClick('controller-left')} style={{ cursor: 'pointer' }}
            />
            <circle data-region="ctrl-btn-left" cx="90" cy="400" r="8" fill={fill('ctrl-btn-left')} stroke="#1e293b" strokeWidth="1.5" onClick={handleClick('ctrl-btn-left')} style={{ cursor: 'pointer' }} />
            <rect data-region="ctrl-grip-left" x="78" y="430" width="24" height="20" rx="4" fill={fill('ctrl-grip-left')} stroke="#1e293b" strokeWidth="1.5" onClick={handleClick('ctrl-grip-left')} style={{ cursor: 'pointer' }} />

            {/* Controller - Right */}
            <rect
                data-region="controller-right"
                x="290" y="380" width="40" height="80" rx="12"
                fill={fill('controller-right')} stroke="#1e293b" strokeWidth="2"
                onClick={handleClick('controller-right')} style={{ cursor: 'pointer' }}
            />
            <circle data-region="ctrl-btn-right" cx="310" cy="400" r="8" fill={fill('ctrl-btn-right')} stroke="#1e293b" strokeWidth="1.5" onClick={handleClick('ctrl-btn-right')} style={{ cursor: 'pointer' }} />
            <rect data-region="ctrl-grip-right" x="298" y="430" width="24" height="20" rx="4" fill={fill('ctrl-grip-right')} stroke="#1e293b" strokeWidth="1.5" onClick={handleClick('ctrl-grip-right')} style={{ cursor: 'pointer' }} />
        </svg>
    );
};

export default VrHeadset;
