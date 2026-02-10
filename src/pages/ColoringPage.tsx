import React, { useState, useCallback, useMemo, useRef } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Toolbar from '../components/Toolbar';
import PageNavigation from '../components/PageNavigation';
import { type BrushType } from '../components/BrushSelector';
import RobotBuddy from '../graphics/RobotBuddy';
import CircuitBoard from '../graphics/CircuitBoard';
import AiBrain from '../graphics/AiBrain';
import SpaceRocket from '../graphics/SpaceRocket';
import TechDrone from '../graphics/TechDrone';
import VrHeadset from '../graphics/VrHeadset';
import './ColoringPage.css';

const PAGES = [
    { id: 1, title: 'Robot Buddy', Component: RobotBuddy },
    { id: 2, title: 'Circuit Board', Component: CircuitBoard },
    { id: 3, title: 'AI Brain', Component: AiBrain },
    { id: 4, title: 'Space Rocket', Component: SpaceRocket },
    { id: 5, title: 'Tech Drone', Component: TechDrone },
    { id: 6, title: 'VR Headset', Component: VrHeadset },
];

const RAINBOW_HUES = [
    '#EF4444', '#F97316', '#EAB308', '#22C55E', '#14B8A6',
    '#3B82F6', '#8B5CF6', '#EC4899', '#06B6D4', '#84CC16',
];

function getRandomColor(): string {
    return RAINBOW_HUES[Math.floor(Math.random() * RAINBOW_HUES.length)];
}

interface HistoryEntry {
    regionId: string;
    previousColor: string | undefined;
}

const ColoringPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const pageId = parseInt(id || '1', 10);
    const page = PAGES.find((p) => p.id === pageId);

    const [regionColors, setRegionColors] = useState<Record<string, string>>({});
    const [activeColor, setActiveColor] = useState('#EF4444');
    const [activeBrush, setActiveBrush] = useState<BrushType>('paint');
    const [history, setHistory] = useState<HistoryEntry[]>([]);
    const svgWrapperRef = useRef<HTMLDivElement>(null);

    const handleRegionClick = useCallback(
        (regionId: string) => {
            setRegionColors((prev) => {
                const previousColor = prev[regionId];
                let newColor: string;

                switch (activeBrush) {
                    case 'paint':
                        newColor = activeColor;
                        break;
                    case 'eraser':
                        newColor = '#ffffff';
                        break;
                    case 'rainbow':
                        newColor = getRandomColor();
                        break;
                    default:
                        newColor = activeColor;
                }

                setHistory((h) => [...h.slice(-19), { regionId, previousColor: previousColor || '#ffffff' }]);

                return { ...prev, [regionId]: newColor };
            });
        },
        [activeColor, activeBrush]
    );

    const handleUndo = useCallback(() => {
        setHistory((prev) => {
            if (prev.length === 0) return prev;
            const last = prev[prev.length - 1];
            setRegionColors((colors) => {
                const updated = { ...colors };
                if (last.previousColor === '#ffffff' || !last.previousColor) {
                    delete updated[last.regionId];
                } else {
                    updated[last.regionId] = last.previousColor;
                }
                return updated;
            });
            return prev.slice(0, -1);
        });
    }, []);

    const handleReset = useCallback(() => {
        setRegionColors({});
        setHistory([]);
    }, []);

    const handleExport = useCallback(() => {
        const wrapper = svgWrapperRef.current;
        if (!wrapper) return;
        const svgEl = wrapper.querySelector('svg');
        if (!svgEl) return;

        const clone = svgEl.cloneNode(true) as SVGSVGElement;
        clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

        // Set explicit dimensions for the canvas
        const viewBox = clone.getAttribute('viewBox');
        const parts = viewBox?.split(' ').map(Number) || [0, 0, 400, 500];
        const svgW = parts[2];
        const svgH = parts[3];
        const scale = 2; // 2x resolution for crisp export

        clone.setAttribute('width', String(svgW));
        clone.setAttribute('height', String(svgH));

        const serializer = new XMLSerializer();
        const svgString = serializer.serializeToString(clone);
        const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(svgBlob);

        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = svgW * scale;
            canvas.height = svgH * scale;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            URL.revokeObjectURL(url);

            const link = document.createElement('a');
            link.download = `${page?.title.toLowerCase().replace(/\s+/g, '-') || 'coloring'}-techtoons.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        };
        img.src = url;
    }, [page]);

    const canUndo = history.length > 0;

    const GraphicComponent = useMemo(() => page?.Component, [page]);

    if (!page || !GraphicComponent) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="coloring-page">
            <div className="coloring-page__top">
                <PageNavigation currentPage={pageId} totalPages={PAGES.length} />
                <h2 className="coloring-page__title">{page.title}</h2>
            </div>
            <div className="coloring-page__canvas">
                <div className="coloring-page__svg-wrapper" ref={svgWrapperRef}>
                    <GraphicComponent
                        onRegionClick={handleRegionClick}
                        regionColors={regionColors}
                    />
                </div>
            </div>
            <Toolbar
                activeColor={activeColor}
                activeBrush={activeBrush}
                onColorChange={setActiveColor}
                onBrushChange={setActiveBrush}
                onUndo={handleUndo}
                onReset={handleReset}
                onExport={handleExport}
                canUndo={canUndo}
            />
        </div>
    );
};

export default ColoringPage;
