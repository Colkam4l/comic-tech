import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import './ColorPalette.css';

const SWATCHES: { hex: string; name: string }[] = [
    { hex: '#EF4444', name: 'Red' },
    { hex: '#F97316', name: 'Orange' },
    { hex: '#EAB308', name: 'Yellow' },
    { hex: '#22C55E', name: 'Green' },
    { hex: '#14B8A6', name: 'Teal' },
    { hex: '#3B82F6', name: 'Blue' },
    { hex: '#8B5CF6', name: 'Purple' },
    { hex: '#EC4899', name: 'Pink' },
    { hex: '#F43F5E', name: 'Rose' },
    { hex: '#06B6D4', name: 'Cyan' },
    { hex: '#84CC16', name: 'Lime' },
    { hex: '#A855F7', name: 'Violet' },
    { hex: '#1E293B', name: 'Dark' },
    { hex: '#64748B', name: 'Grey' },
    { hex: '#F8FAFC', name: 'Light' },
    { hex: '#FFFFFF', name: 'White' },
];

/** Get the name of a color from hex, or format the hex itself */
export function getColorName(hex: string): string {
    const match = SWATCHES.find(
        (s) => s.hex.toLowerCase() === hex.toLowerCase()
    );
    return match ? match.name : hex.toUpperCase();
}

interface Props {
    activeColor: string;
    onColorChange: (color: string) => void;
}

const ColorPalette: React.FC<Props> = ({ activeColor, onColorChange }) => {
    const [showPicker, setShowPicker] = useState(false);
    const colorName = getColorName(activeColor);

    return (
        <div className="color-palette">
            <span className="color-palette__heading">Colors</span>
            <div className="color-palette__row">
                <div className="color-palette__swatches">
                    {SWATCHES.map((swatch) => (
                        <button
                            key={swatch.hex}
                            className={`color-palette__swatch ${activeColor === swatch.hex ? 'color-palette__swatch--active' : ''}`}
                            style={{ backgroundColor: swatch.hex }}
                            onClick={() => onColorChange(swatch.hex)}
                            aria-label={`Select ${swatch.name}`}
                            title={swatch.name}
                        />
                    ))}
                    <button
                        className="color-palette__custom-btn"
                        onClick={() => setShowPicker(!showPicker)}
                        aria-label="Open custom color picker"
                        title="More Colors"
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
                <div className="color-palette__preview-group">
                    <div className="color-palette__preview" style={{ backgroundColor: activeColor }} />
                    <span className="color-palette__color-name">{colorName}</span>
                </div>
            </div>
        </div>
    );
};

export default ColorPalette;
