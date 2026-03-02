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
    {
        id: 1,
        title: 'Robot Buddy',
        Component: RobotBuddy,
        description: 'A robot has a head, arms, and legs — just like you! Can you color each part?',
    },
    {
        id: 2,
        title: 'Circuit Board',
        Component: CircuitBoard,
        description: 'Circuit boards are inside every computer and phone. They connect all the tiny parts together!',
    },
    {
        id: 3,
        title: 'AI Brain',
        Component: AiBrain,
        description: 'An AI brain uses connected nodes to think and learn — kind of like your brain\'s neurons!',
    },
    {
        id: 4,
        title: 'Space Rocket',
        Component: SpaceRocket,
        description: 'Rockets carry astronauts and satellites into space. 3… 2… 1… liftoff!',
    },
    {
        id: 5,
        title: 'Tech Drone',
        Component: TechDrone,
        description: 'Drones fly using spinning propellers and cameras to see the world from above!',
    },
    {
        id: 6,
        title: 'VR Headset',
        Component: VrHeadset,
        description: 'Put on a VR headset and step inside a virtual world — you can look all around!',
    },
];

/* ─── Human-readable labels for every colorable region ─── */
const REGION_LABELS: Record<number, Record<string, string>> = {
    1: { // Robot Buddy
        'antenna-base': 'Antenna Base', 'antenna-ball': 'Antenna Ball',
        'head': 'Head', 'left-eye': 'Left Eye', 'left-pupil': 'Left Pupil',
        'right-eye': 'Right Eye', 'right-pupil': 'Right Pupil', 'mouth': 'Mouth',
        'neck': 'Neck', 'body': 'Body', 'chest-panel': 'Chest Panel',
        'button-1': 'Button 1', 'button-2': 'Button 2', 'belly': 'Belly Light',
        'left-arm': 'Left Arm', 'left-hand': 'Left Hand',
        'right-arm': 'Right Arm', 'right-hand': 'Right Hand',
        'left-leg': 'Left Leg', 'left-foot': 'Left Foot',
        'right-leg': 'Right Leg', 'right-foot': 'Right Foot',
        'left-ear': 'Left Ear Bolt', 'right-ear': 'Right Ear Bolt',
    },
    2: { // Circuit Board
        'board': 'Circuit Board', 'cpu': 'Processor (CPU)', 'cpu-die': 'CPU Core',
        'mem-1': 'Memory Chip 1', 'mem-2': 'Memory Chip 2',
        'cap-1': 'Capacitor 1', 'cap-2': 'Capacitor 2',
        'res-1': 'Resistor 1', 'res-2': 'Resistor 2',
        'gpu': 'Graphics Chip (GPU)', 'power': 'Power Supply', 'io': 'I/O Connector',
        'pad-1': 'Solder Pad 1', 'pad-2': 'Solder Pad 2', 'pad-3': 'Solder Pad 3',
        'pad-4': 'Solder Pad 4', 'pad-5': 'Solder Pad 5',
    },
    3: { // AI Brain
        'left-hemi': 'Left Side of Brain', 'right-hemi': 'Right Side of Brain',
        'frontal-left': 'Left Thinking Area', 'frontal-right': 'Right Thinking Area',
        'brain-stem': 'Brain Stem',
        'node-1': 'Node 1', 'node-2': 'Node 2', 'node-3': 'Center Node',
        'node-4': 'Node 4', 'node-5': 'Node 5', 'node-6': 'Node 6',
        'node-7': 'Node 7', 'node-8': 'Node 8', 'node-center': 'Core Node',
    },
    4: { // Space Rocket
        'nose': 'Nose Cone', 'upper-body': 'Upper Body', 'window': 'Porthole Window',
        'window-inner': 'Window Glass', 'mid-body': 'Middle Body', 'stripe': 'Racing Stripe',
        'lower-body': 'Engine Section', 'left-fin': 'Left Fin', 'right-fin': 'Right Fin',
        'nozzle': 'Exhaust Nozzle', 'flame-center': 'Center Flame',
        'flame-left': 'Left Flame', 'flame-right': 'Right Flame',
        'star-1': 'Star 1', 'star-2': 'Star 2', 'planet': 'Planet', 'planet-ring': 'Planet Ring',
    },
    5: { // Tech Drone
        'prop-1': 'Propeller 1', 'prop-hub-1': 'Motor 1',
        'prop-2': 'Propeller 2', 'prop-hub-2': 'Motor 2',
        'prop-3': 'Propeller 3', 'prop-hub-3': 'Motor 3',
        'prop-4': 'Propeller 4', 'prop-hub-4': 'Motor 4',
        'arm-tl': 'Top-Left Arm', 'arm-tr': 'Top-Right Arm',
        'arm-bl': 'Bottom-Left Arm', 'arm-br': 'Bottom-Right Arm',
        'body': 'Body', 'camera-housing': 'Camera Housing', 'camera-lens': 'Camera Lens',
        'led': 'Status Light',
        'gear-left': 'Left Landing Leg', 'gear-right': 'Right Landing Leg',
        'skid-left': 'Left Landing Skid', 'skid-right': 'Right Landing Skid',
    },
    6: { // VR Headset
        'body': 'Headset Body', 'visor': 'Front Visor',
        'left-lens': 'Left Lens', 'left-lens-inner': 'Left Lens Center',
        'right-lens': 'Right Lens', 'right-lens-inner': 'Right Lens Center',
        'nose-bridge': 'Nose Bridge', 'top-strap': 'Top Strap',
        'left-strap': 'Left Strap', 'right-strap': 'Right Strap',
        'led-1': 'Power Light', 'led-2': 'Tracking Light Left', 'led-3': 'Tracking Light Right',
        'controller-left': 'Left Controller', 'ctrl-btn-left': 'Left Button',
        'ctrl-grip-left': 'Left Grip',
        'controller-right': 'Right Controller', 'ctrl-btn-right': 'Right Button',
        'ctrl-grip-right': 'Right Grip',
    },
};

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
    const [activeRegionLabel, setActiveRegionLabel] = useState<string | null>(null);
    const svgWrapperRef = useRef<HTMLDivElement>(null);

    const labels = useMemo(() => REGION_LABELS[pageId] || {}, [pageId]);

    const handleRegionClick = useCallback(
        (regionId: string) => {
            // Update the label indicator
            const label = labels[regionId];
            if (label) setActiveRegionLabel(label);

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
        [activeColor, activeBrush, labels]
    );

    /* Show label on hover via event delegation on the SVG wrapper */
    const handlePointerOver = useCallback(
        (e: React.PointerEvent) => {
            const target = e.target as HTMLElement;
            const regionId = target.getAttribute('data-region');
            if (regionId && labels[regionId]) {
                setActiveRegionLabel(labels[regionId]);
            }
        },
        [labels]
    );

    const handlePointerLeave = useCallback(() => {
        setActiveRegionLabel(null);
    }, []);

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
        setActiveRegionLabel(null);
    }, []);

    const handleExport = useCallback(() => {
        const wrapper = svgWrapperRef.current;
        if (!wrapper) return;
        const svgEl = wrapper.querySelector('svg');
        if (!svgEl) return;

        const clone = svgEl.cloneNode(true) as SVGSVGElement;
        clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

        const viewBox = clone.getAttribute('viewBox');
        const parts = viewBox?.split(' ').map(Number) || [0, 0, 400, 500];
        const svgW = parts[2];
        const svgH = parts[3];
        const scale = 2;

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
                <p className="coloring-page__description">{page.description}</p>
            </div>

            {/* Live region label indicator */}
            <div className="coloring-page__region-label" aria-live="polite">
                {activeRegionLabel ? (
                    <>🎨 You're coloring: <strong>{activeRegionLabel}</strong></>
                ) : (
                    <>👆 Tap a part to start coloring!</>
                )}
            </div>

            <div className="coloring-page__canvas">
                <div
                    className="coloring-page__svg-wrapper"
                    ref={svgWrapperRef}
                    onPointerOver={handlePointerOver}
                    onPointerLeave={handlePointerLeave}
                >
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
