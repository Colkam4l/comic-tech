import React from 'react';
import './BrushSelector.css';

export type BrushType = 'paint' | 'eraser' | 'rainbow';

interface Props {
    activeBrush: BrushType;
    onBrushChange: (brush: BrushType) => void;
}

const BrushSelector: React.FC<Props> = ({ activeBrush, onBrushChange }) => {
    return (
        <div className="brush-selector">
            <button
                className={`brush-selector__btn ${activeBrush === 'paint' ? 'brush-selector__btn--active' : ''}`}
                onClick={() => onBrushChange('paint')}
                aria-label="Paint bucket tool"
                title="Paint Bucket"
            >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 11H5a4 4 0 0 0-4 4v0a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4v0a4 4 0 0 0-4-4Z" />
                    <path d="M12 11V3" />
                    <path d="m8 7 4-4 4 4" />
                </svg>
            </button>
            <button
                className={`brush-selector__btn ${activeBrush === 'eraser' ? 'brush-selector__btn--active' : ''}`}
                onClick={() => onBrushChange('eraser')}
                aria-label="Eraser tool"
                title="Eraser"
            >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21" />
                    <path d="M22 21H7" />
                    <path d="m5 11 9 9" />
                </svg>
            </button>
            <button
                className={`brush-selector__btn ${activeBrush === 'rainbow' ? 'brush-selector__btn--active' : ''}`}
                onClick={() => onBrushChange('rainbow')}
                aria-label="Rainbow tool"
                title="Rainbow"
            >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 17a10 10 0 0 0-20 0" />
                    <path d="M6 17a6 6 0 0 1 12 0" />
                    <path d="M10 17a2 2 0 0 1 4 0" />
                </svg>
            </button>
        </div>
    );
};

export default BrushSelector;
