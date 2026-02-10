import React from 'react';

interface Props {
    onRegionClick: (regionId: string) => void;
    regionColors: Record<string, string>;
}

const TechDrone: React.FC<Props> = ({ onRegionClick, regionColors }) => {
    const fill = (id: string) => regionColors[id] || '#ffffff';
    const handleClick = (id: string) => (e: React.MouseEvent) => {
        e.stopPropagation();
        onRegionClick(id);
    };

    return (
        <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            {/* Propeller 1 (top-left) */}
            <ellipse
                data-region="prop-1"
                cx="100" cy="120" rx="55" ry="12"
                fill={fill('prop-1')} stroke="#1e293b" strokeWidth="2"
                onClick={handleClick('prop-1')} style={{ cursor: 'pointer' }}
            />
            <circle data-region="prop-hub-1" cx="100" cy="120" r="8" fill={fill('prop-hub-1')} stroke="#1e293b" strokeWidth="2" onClick={handleClick('prop-hub-1')} style={{ cursor: 'pointer' }} />

            {/* Propeller 2 (top-right) */}
            <ellipse
                data-region="prop-2"
                cx="300" cy="120" rx="55" ry="12"
                fill={fill('prop-2')} stroke="#1e293b" strokeWidth="2"
                onClick={handleClick('prop-2')} style={{ cursor: 'pointer' }}
            />
            <circle data-region="prop-hub-2" cx="300" cy="120" r="8" fill={fill('prop-hub-2')} stroke="#1e293b" strokeWidth="2" onClick={handleClick('prop-hub-2')} style={{ cursor: 'pointer' }} />

            {/* Propeller 3 (bottom-left) */}
            <ellipse
                data-region="prop-3"
                cx="100" cy="280" rx="55" ry="12"
                fill={fill('prop-3')} stroke="#1e293b" strokeWidth="2"
                onClick={handleClick('prop-3')} style={{ cursor: 'pointer' }}
            />
            <circle data-region="prop-hub-3" cx="100" cy="280" r="8" fill={fill('prop-hub-3')} stroke="#1e293b" strokeWidth="2" onClick={handleClick('prop-hub-3')} style={{ cursor: 'pointer' }} />

            {/* Propeller 4 (bottom-right) */}
            <ellipse
                data-region="prop-4"
                cx="300" cy="280" rx="55" ry="12"
                fill={fill('prop-4')} stroke="#1e293b" strokeWidth="2"
                onClick={handleClick('prop-4')} style={{ cursor: 'pointer' }}
            />
            <circle data-region="prop-hub-4" cx="300" cy="280" r="8" fill={fill('prop-hub-4')} stroke="#1e293b" strokeWidth="2" onClick={handleClick('prop-hub-4')} style={{ cursor: 'pointer' }} />

            {/* Arms connecting body to motors */}
            <rect x="130" y="135" width="65" height="12" rx="4" fill="none" stroke="#1e293b" strokeWidth="2" />
            <rect x="205" y="135" width="65" height="12" rx="4" fill="none" stroke="#1e293b" strokeWidth="2" />
            <rect x="130" y="255" width="65" height="12" rx="4" fill="none" stroke="#1e293b" strokeWidth="2" />
            <rect x="205" y="255" width="65" height="12" rx="4" fill="none" stroke="#1e293b" strokeWidth="2" />

            {/* Arm connectors (fillable) */}
            <rect data-region="arm-tl" x="125" y="132" width="70" height="18" rx="4" fill={fill('arm-tl')} stroke="#1e293b" strokeWidth="2" onClick={handleClick('arm-tl')} style={{ cursor: 'pointer' }} />
            <rect data-region="arm-tr" x="205" y="132" width="70" height="18" rx="4" fill={fill('arm-tr')} stroke="#1e293b" strokeWidth="2" onClick={handleClick('arm-tr')} style={{ cursor: 'pointer' }} />
            <rect data-region="arm-bl" x="125" y="252" width="70" height="18" rx="4" fill={fill('arm-bl')} stroke="#1e293b" strokeWidth="2" onClick={handleClick('arm-bl')} style={{ cursor: 'pointer' }} />
            <rect data-region="arm-br" x="205" y="252" width="70" height="18" rx="4" fill={fill('arm-br')} stroke="#1e293b" strokeWidth="2" onClick={handleClick('arm-br')} style={{ cursor: 'pointer' }} />

            {/* Main body */}
            <rect
                data-region="body"
                x="145" y="155" width="110" height="92" rx="16"
                fill={fill('body')} stroke="#1e293b" strokeWidth="2.5"
                onClick={handleClick('body')} style={{ cursor: 'pointer' }}
            />
            {/* Camera housing */}
            <rect
                data-region="camera-housing"
                x="170" y="200" width="60" height="35" rx="8"
                fill={fill('camera-housing')} stroke="#1e293b" strokeWidth="2"
                onClick={handleClick('camera-housing')} style={{ cursor: 'pointer' }}
            />
            {/* Camera lens */}
            <circle
                data-region="camera-lens"
                cx="200" cy="217" r="12"
                fill={fill('camera-lens')} stroke="#1e293b" strokeWidth="2"
                onClick={handleClick('camera-lens')} style={{ cursor: 'pointer' }}
            />
            {/* Status LED */}
            <circle
                data-region="led"
                cx="200" cy="168" r="6"
                fill={fill('led')} stroke="#1e293b" strokeWidth="1.5"
                onClick={handleClick('led')} style={{ cursor: 'pointer' }}
            />

            {/* Landing gear */}
            <rect
                data-region="gear-left"
                x="140" y="320" width="10" height="50" rx="4"
                fill={fill('gear-left')} stroke="#1e293b" strokeWidth="2"
                onClick={handleClick('gear-left')} style={{ cursor: 'pointer' }}
            />
            <rect
                data-region="gear-right"
                x="250" y="320" width="10" height="50" rx="4"
                fill={fill('gear-right')} stroke="#1e293b" strokeWidth="2"
                onClick={handleClick('gear-right')} style={{ cursor: 'pointer' }}
            />
            <rect
                data-region="skid-left"
                x="120" y="365" width="50" height="10" rx="4"
                fill={fill('skid-left')} stroke="#1e293b" strokeWidth="2"
                onClick={handleClick('skid-left')} style={{ cursor: 'pointer' }}
            />
            <rect
                data-region="skid-right"
                x="230" y="365" width="50" height="10" rx="4"
                fill={fill('skid-right')} stroke="#1e293b" strokeWidth="2"
                onClick={handleClick('skid-right')} style={{ cursor: 'pointer' }}
            />

            {/* Vertical connectors (decorative) */}
            <line x1="145" y1="247" x2="145" y2="320" stroke="#1e293b" strokeWidth="2" />
            <line x1="255" y1="247" x2="255" y2="320" stroke="#1e293b" strokeWidth="2" />
        </svg>
    );
};

export default TechDrone;
