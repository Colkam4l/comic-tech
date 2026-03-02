import React from 'react';
import './BrushSelector.css';

export type BrushType = 'paint' | 'brush' | 'eraser' | 'rainbow';

interface Props {
    activeBrush: BrushType;
    onBrushChange: (brush: BrushType) => void;
}

const BrushSelector: React.FC<Props> = ({ activeBrush, onBrushChange }) => {
    return (
        <div className="brush-selector">
            <span className="brush-selector__heading">Tools</span>
            <div className="brush-selector__buttons">
                <button
                    className={`brush-selector__btn ${activeBrush === 'paint' ? 'brush-selector__btn--active' : ''}`}
                    onClick={() => onBrushChange('paint')}
                    aria-label="Paint bucket tool — fills an entire region with color"
                    title="Paint Bucket"
                >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 11H5a4 4 0 0 0-4 4v0a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4v0a4 4 0 0 0-4-4Z" />
                        <path d="M12 11V3" />
                        <path d="m8 7 4-4 4 4" />
                    </svg>
                    <span className="brush-selector__label">Fill</span>
                </button>
                <button
                    className={`brush-selector__btn ${activeBrush === 'brush' ? 'brush-selector__btn--active' : ''}`}
                    onClick={() => onBrushChange('brush')}
                    aria-label="Brush tool — draw freely with your finger or stylus"
                    title="Brush"
                >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
                        <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
                    </svg>
                    <span className="brush-selector__label">Brush</span>
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
                    <span className="brush-selector__label">Erase</span>
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
                    <span className="brush-selector__label">Rainbow</span>
                </button>
            </div>
        </div>
    );
};

export default BrushSelector;
