import React from 'react';

interface Props {
    onRegionClick: (regionId: string) => void;
    regionColors: Record<string, string>;
}

const AiBrain: React.FC<Props> = ({ onRegionClick, regionColors }) => {
    const fill = (id: string) => regionColors[id] || '#ffffff';
    const handleClick = (id: string) => (e: React.MouseEvent) => {
        e.stopPropagation();
        onRegionClick(id);
    };

    return (
        <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            {/* Left hemisphere */}
            <path
                data-region="left-hemi"
                d="M200,80 C140,80 80,120 65,190 C50,260 70,340 100,370 C130,400 170,420 200,420 L200,80Z"
                fill={fill('left-hemi')} stroke="#1e293b" strokeWidth="2.5"
                onClick={handleClick('left-hemi')} style={{ cursor: 'pointer' }}
            />
            {/* Right hemisphere */}
            <path
                data-region="right-hemi"
                d="M200,80 C260,80 320,120 335,190 C350,260 330,340 300,370 C270,400 230,420 200,420 L200,80Z"
                fill={fill('right-hemi')} stroke="#1e293b" strokeWidth="2.5"
                onClick={handleClick('right-hemi')} style={{ cursor: 'pointer' }}
            />
            {/* Frontal lobe left */}
            <path
                data-region="frontal-left"
                d="M200,80 C165,80 125,100 105,140 C90,170 95,195 110,200 C130,206 165,195 200,190 L200,80Z"
                fill={fill('frontal-left')} stroke="#1e293b" strokeWidth="2"
                onClick={handleClick('frontal-left')} style={{ cursor: 'pointer' }}
            />
            {/* Frontal lobe right */}
            <path
                data-region="frontal-right"
                d="M200,80 C235,80 275,100 295,140 C310,170 305,195 290,200 C270,206 235,195 200,190 L200,80Z"
                fill={fill('frontal-right')} stroke="#1e293b" strokeWidth="2"
                onClick={handleClick('frontal-right')} style={{ cursor: 'pointer' }}
            />
            {/* Brain stem */}
            <path
                data-region="brain-stem"
                d="M180,400 C180,430 180,460 190,475 C195,480 205,480 210,475 C220,460 220,430 220,400Z"
                fill={fill('brain-stem')} stroke="#1e293b" strokeWidth="2.5"
                onClick={handleClick('brain-stem')} style={{ cursor: 'pointer' }}
            />

            {/* Neural nodes */}
            <circle data-region="node-1" cx="140" cy="160" r="16" fill={fill('node-1')} stroke="#1e293b" strokeWidth="2" onClick={handleClick('node-1')} style={{ cursor: 'pointer' }} />
            <circle data-region="node-2" cx="260" cy="160" r="16" fill={fill('node-2')} stroke="#1e293b" strokeWidth="2" onClick={handleClick('node-2')} style={{ cursor: 'pointer' }} />
            <circle data-region="node-3" cx="200" cy="220" r="20" fill={fill('node-3')} stroke="#1e293b" strokeWidth="2.5" onClick={handleClick('node-3')} style={{ cursor: 'pointer' }} />
            <circle data-region="node-4" cx="120" cy="270" r="14" fill={fill('node-4')} stroke="#1e293b" strokeWidth="2" onClick={handleClick('node-4')} style={{ cursor: 'pointer' }} />
            <circle data-region="node-5" cx="280" cy="270" r="14" fill={fill('node-5')} stroke="#1e293b" strokeWidth="2" onClick={handleClick('node-5')} style={{ cursor: 'pointer' }} />
            <circle data-region="node-6" cx="160" cy="330" r="14" fill={fill('node-6')} stroke="#1e293b" strokeWidth="2" onClick={handleClick('node-6')} style={{ cursor: 'pointer' }} />
            <circle data-region="node-7" cx="240" cy="330" r="14" fill={fill('node-7')} stroke="#1e293b" strokeWidth="2" onClick={handleClick('node-7')} style={{ cursor: 'pointer' }} />
            <circle data-region="node-8" cx="200" cy="380" r="16" fill={fill('node-8')} stroke="#1e293b" strokeWidth="2" onClick={handleClick('node-8')} style={{ cursor: 'pointer' }} />
            <circle data-region="node-center" cx="200" cy="290" r="18" fill={fill('node-center')} stroke="#1e293b" strokeWidth="2.5" onClick={handleClick('node-center')} style={{ cursor: 'pointer' }} />

            {/* Neural connections (decorative) */}
            <line x1="140" y1="160" x2="200" y2="220" stroke="#1e293b" strokeWidth="1.5" />
            <line x1="260" y1="160" x2="200" y2="220" stroke="#1e293b" strokeWidth="1.5" />
            <line x1="200" y1="220" x2="200" y2="290" stroke="#1e293b" strokeWidth="1.5" />
            <line x1="200" y1="290" x2="120" y2="270" stroke="#1e293b" strokeWidth="1.5" />
            <line x1="200" y1="290" x2="280" y2="270" stroke="#1e293b" strokeWidth="1.5" />
            <line x1="120" y1="270" x2="160" y2="330" stroke="#1e293b" strokeWidth="1.5" />
            <line x1="280" y1="270" x2="240" y2="330" stroke="#1e293b" strokeWidth="1.5" />
            <line x1="160" y1="330" x2="200" y2="380" stroke="#1e293b" strokeWidth="1.5" />
            <line x1="240" y1="330" x2="200" y2="380" stroke="#1e293b" strokeWidth="1.5" />
            <line x1="140" y1="160" x2="120" y2="270" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="260" y1="160" x2="280" y2="270" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="200" y1="290" x2="160" y2="330" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="200" y1="290" x2="240" y2="330" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
    );
};

export default AiBrain;
