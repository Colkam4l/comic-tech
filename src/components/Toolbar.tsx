import React from 'react';
import ColorPalette from './ColorPalette';
import BrushSelector, { type BrushType } from './BrushSelector';
import './Toolbar.css';

interface Props {
    activeColor: string;
    activeBrush: BrushType;
    onColorChange: (color: string) => void;
    onBrushChange: (brush: BrushType) => void;
    onUndo: () => void;
    onReset: () => void;
    onExport: () => void;
    canUndo: boolean;
}

const Toolbar: React.FC<Props> = ({
    activeColor,
    activeBrush,
    onColorChange,
    onBrushChange,
    onUndo,
    onReset,
    onExport,
    canUndo,
}) => {
    return (
        <div className="toolbar">
            <div className="toolbar__inner">
                <ColorPalette activeColor={activeColor} onColorChange={onColorChange} />
                <div className="toolbar__divider" />
                <BrushSelector activeBrush={activeBrush} onBrushChange={onBrushChange} />
                <div className="toolbar__divider" />
                <div className="toolbar__actions">
                    <button
                        className="toolbar__action-btn"
                        onClick={onUndo}
                        disabled={!canUndo}
                        aria-label="Undo last action"
                        title="Undo"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 7v6h6" />
                            <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
                        </svg>
                    </button>
                    <button
                        className="toolbar__action-btn toolbar__action-btn--danger"
                        onClick={onReset}
                        aria-label="Reset all colors"
                        title="Reset"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                            <path d="M3 3v5h5" />
                        </svg>
                    </button>
                    <button
                        className="toolbar__action-btn toolbar__action-btn--export"
                        onClick={onExport}
                        aria-label="Save as image"
                        title="Save as Image"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Toolbar;
