import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
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
    1: {
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
    2: {
        'board': 'Circuit Board', 'cpu': 'Processor (CPU)', 'cpu-die': 'CPU Core',
        'mem-1': 'Memory Chip 1', 'mem-2': 'Memory Chip 2',
        'cap-1': 'Capacitor 1', 'cap-2': 'Capacitor 2',
        'res-1': 'Resistor 1', 'res-2': 'Resistor 2',
        'gpu': 'Graphics Chip (GPU)', 'power': 'Power Supply', 'io': 'I/O Connector',
        'pad-1': 'Solder Pad 1', 'pad-2': 'Solder Pad 2', 'pad-3': 'Solder Pad 3',
        'pad-4': 'Solder Pad 4', 'pad-5': 'Solder Pad 5',
    },
    3: {
        'left-hemi': 'Left Side of Brain', 'right-hemi': 'Right Side of Brain',
        'frontal-left': 'Left Thinking Area', 'frontal-right': 'Right Thinking Area',
        'brain-stem': 'Brain Stem',
        'node-1': 'Node 1', 'node-2': 'Node 2', 'node-3': 'Center Node',
        'node-4': 'Node 4', 'node-5': 'Node 5', 'node-6': 'Node 6',
        'node-7': 'Node 7', 'node-8': 'Node 8', 'node-center': 'Core Node',
    },
    4: {
        'nose': 'Nose Cone', 'upper-body': 'Upper Body', 'window': 'Porthole Window',
        'window-inner': 'Window Glass', 'mid-body': 'Middle Body', 'stripe': 'Racing Stripe',
        'lower-body': 'Engine Section', 'left-fin': 'Left Fin', 'right-fin': 'Right Fin',
        'nozzle': 'Exhaust Nozzle', 'flame-center': 'Center Flame',
        'flame-left': 'Left Flame', 'flame-right': 'Right Flame',
        'star-1': 'Star 1', 'star-2': 'Star 2', 'planet': 'Planet', 'planet-ring': 'Planet Ring',
    },
    5: {
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
    6: {
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

// Unified undo entry — either a region fill or a canvas snapshot
type HistoryEntry =
    | { type: 'region'; regionId: string; previousColor: string | undefined }
    | { type: 'canvas'; snapshot: ImageData };

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

    /* ─── Freehand brush state ─── */
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const isDrawingRef = useRef(false);
    const lastPosRef = useRef<{ x: number; y: number } | null>(null);
    // Snapshot taken at pointerDown — pushed to history on pointerUp
    const strokeSnapshotRef = useRef<ImageData | null>(null);

    const labels = useMemo(() => REGION_LABELS[pageId] || {}, [pageId]);

    /* ─── Resize the freehand canvas to match the SVG wrapper ─── */
    useEffect(() => {
        const canvas = canvasRef.current;
        const wrapper = svgWrapperRef.current;
        if (!canvas || !wrapper) return;

        const syncSize = () => {
            const rect = wrapper.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            // Save current content before resize
            const ctx = canvas.getContext('2d');
            let saved: ImageData | null = null;
            if (ctx && canvas.width > 0 && canvas.height > 0) {
                try { saved = ctx.getImageData(0, 0, canvas.width, canvas.height); } catch { /* ignore */ }
            }
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;
            const ctx2 = canvas.getContext('2d');
            if (ctx2) {
                ctx2.scale(dpr, dpr);
                if (saved) ctx2.putImageData(saved, 0, 0);
            }
        };

        syncSize();
        const observer = new ResizeObserver(syncSize);
        observer.observe(wrapper);
        return () => observer.disconnect();
    }, [pageId]);

    /* ─── Helper: snapshot canvas at current size ─── */
    const snapshotCanvas = useCallback((): ImageData | null => {
        const canvas = canvasRef.current;
        if (!canvas) return null;
        const ctx = canvas.getContext('2d');
        if (!ctx) return null;
        try {
            return ctx.getImageData(0, 0, canvas.width, canvas.height);
        } catch {
            return null;
        }
    }, []);

    /* ─── Helper: restore canvas from snapshot ─── */
    const restoreCanvas = useCallback((snapshot: ImageData) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.putImageData(snapshot, 0, 0);
    }, []);

    /* ─── Clear the freehand canvas ─── */
    const clearBrushCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, []);

    /* ─── Freehand drawing helpers ─── */
    const getCanvasPos = useCallback((e: React.PointerEvent): { x: number; y: number } => {
        const canvas = canvasRef.current!;
        const rect = canvas.getBoundingClientRect();
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
    }, []);

    const isEraserOnCanvas = activeBrush === 'eraser';
    const isCanvasMode = activeBrush === 'brush' || isEraserOnCanvas;

    const handleCanvasPointerDown = useCallback(
        (e: React.PointerEvent) => {
            if (!isCanvasMode) return;
            // Take a "before" snapshot — will be pushed to history when stroke ends
            strokeSnapshotRef.current = snapshotCanvas();
            isDrawingRef.current = true;
            lastPosRef.current = getCanvasPos(e);
            (e.target as HTMLCanvasElement).setPointerCapture(e.pointerId);
        },
        [isCanvasMode, getCanvasPos, snapshotCanvas]
    );

    const handleCanvasPointerMove = useCallback(
        (e: React.PointerEvent) => {
            if (!isDrawingRef.current || !isCanvasMode) return;
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            const pos = getCanvasPos(e);
            const last = lastPosRef.current;
            if (!last) {
                lastPosRef.current = pos;
                return;
            }

            ctx.beginPath();
            ctx.moveTo(last.x, last.y);
            ctx.lineTo(pos.x, pos.y);

            if (isEraserOnCanvas) {
                // Use destination-out to punch through canvas pixels
                ctx.globalCompositeOperation = 'destination-out';
                ctx.strokeStyle = 'rgba(0,0,0,1)';
                ctx.lineWidth = 20;
            } else {
                ctx.globalCompositeOperation = 'source-over';
                ctx.strokeStyle = activeColor;
                ctx.lineWidth = 6;
            }

            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.stroke();
            // Reset composite to default after eraser use
            ctx.globalCompositeOperation = 'source-over';
            lastPosRef.current = pos;
        },
        [isCanvasMode, isEraserOnCanvas, activeColor, getCanvasPos]
    );

    const handleCanvasPointerUp = useCallback(() => {
        if (!isDrawingRef.current) return;
        isDrawingRef.current = false;
        lastPosRef.current = null;
        // Push "before" snapshot so undo can restore pre-stroke state
        if (strokeSnapshotRef.current) {
            const snap = strokeSnapshotRef.current;
            setHistory((h) => [...h.slice(-29), { type: 'canvas', snapshot: snap }]);
            strokeSnapshotRef.current = null;
        }
    }, []);

    const handleRegionClick = useCallback(
        (regionId: string) => {
            // Canvas tools handle their own events — ignore region clicks
            if (isCanvasMode) return;

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

                setHistory((h) => [
                    ...h.slice(-29),
                    { type: 'region', regionId, previousColor: previousColor || '#ffffff' },
                ]);

                return { ...prev, [regionId]: newColor };
            });
        },
        [activeColor, activeBrush, isCanvasMode, labels]
    );

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

    /* ─── Unified undo — handles both region fills and canvas strokes ─── */
    const handleUndo = useCallback(() => {
        setHistory((prev) => {
            if (prev.length === 0) return prev;
            const last = prev[prev.length - 1];

            if (last.type === 'canvas') {
                // Restore the canvas to the snapshot taken before this stroke
                restoreCanvas(last.snapshot);
            } else {
                // Restore the SVG region fill
                setRegionColors((colors) => {
                    const updated = { ...colors };
                    if (!last.previousColor || last.previousColor === '#ffffff') {
                        delete updated[last.regionId];
                    } else {
                        updated[last.regionId] = last.previousColor;
                    }
                    return updated;
                });
            }

            return prev.slice(0, -1);
        });
    }, [restoreCanvas]);

    const handleReset = useCallback(() => {
        setRegionColors({});
        setHistory([]);
        setActiveRegionLabel(null);
        clearBrushCanvas();
    }, [clearBrushCanvas]);

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

            // Composite brush strokes on top
            const brushCanvas = canvasRef.current;
            if (brushCanvas) {
                const wrapperRect = wrapper.getBoundingClientRect();
                const scaleX = (svgW * scale) / wrapperRect.width;
                const scaleY = (svgH * scale) / wrapperRect.height;
                ctx.drawImage(
                    brushCanvas,
                    0, 0, brushCanvas.width, brushCanvas.height,
                    0, 0, wrapperRect.width * scaleX, wrapperRect.height * scaleY
                );
            }

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

    // Eraser also needs canvas overlay active so it can erase brush strokes
    const isCanvasOverlayActive = isCanvasMode;

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
                ) : activeBrush === 'brush' ? (
                    <>✏️ Draw freely with your finger or stylus!</>
                ) : activeBrush === 'eraser' ? (
                    <>🧹 Erase brush strokes or tap a region to clear it!</>
                ) : (
                    <>👆 Tap a part to start coloring!</>
                )}
            </div>

            <div className="coloring-page__canvas">
                <div
                    className={`coloring-page__svg-wrapper ${isCanvasOverlayActive ? 'coloring-page__svg-wrapper--brush-mode' : ''}`}
                    ref={svgWrapperRef}
                    onPointerOver={handlePointerOver}
                    onPointerLeave={handlePointerLeave}
                >
                    <GraphicComponent
                        onRegionClick={handleRegionClick}
                        regionColors={regionColors}
                    />
                    {/* Freehand brush/eraser canvas overlay */}
                    <canvas
                        ref={canvasRef}
                        className={`coloring-page__brush-canvas ${isCanvasOverlayActive ? 'coloring-page__brush-canvas--active' : ''}`}
                        onPointerDown={handleCanvasPointerDown}
                        onPointerMove={handleCanvasPointerMove}
                        onPointerUp={handleCanvasPointerUp}
                        onPointerCancel={handleCanvasPointerUp}
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
