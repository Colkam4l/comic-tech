import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import './ColorPalette.css';

const SWATCHES = [
    '#EF4444', '#F97316', '#EAB308', '#22C55E',
    '#14B8A6', '#3B82F6', '#8B5CF6', '#EC4899',
    '#F43F5E', '#06B6D4', '#84CC16', '#A855F7',
    '#1E293B', '#64748B', '#F8FAFC', '#FFFFFF',
];

interface Props {
    activeColor: string;
    onColorChange: (color: string) => void;
}

const ColorPalette: React.FC<Props> = ({ activeColor, onColorChange }) => {
    const [showPicker, setShowPicker] = useState(false);

    return (
        <div className="color-palette">
            <div className="color-palette__swatches">
                {SWATCHES.map((color) => (
                    <button
                        key={color}
                        className={`color-palette__swatch ${activeColor === color ? 'color-palette__swatch--active' : ''}`}
                        style={{ backgroundColor: color }}
                        onClick={() => onColorChange(color)}
                        aria-label={`Select color ${color}`}
                    />
                ))}
                <button
                    className="color-palette__custom-btn"
                    onClick={() => setShowPicker(!showPicker)}
                    aria-label="Open custom color picker"
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M4,10 A6,6 0 0,1 10,4" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M10,4 A6,6 0 0,1 16,10" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M16,10 A6,6 0 0,1 10,16" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M10,16 A6,6 0 0,1 4,10" stroke="#EAB308" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                </button>
            </div>
            {showPicker && (
                <div className="color-palette__picker-popover">
                    <HexColorPicker color={activeColor} onChange={onColorChange} />
                </div>
            )}
            <div className="color-palette__preview" style={{ backgroundColor: activeColor }} />
        </div>
    );
};

export default ColorPalette;
