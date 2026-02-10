import React from 'react';
import { Link } from 'react-router-dom';
import RobotBuddy from '../graphics/RobotBuddy';
import CircuitBoard from '../graphics/CircuitBoard';
import AiBrain from '../graphics/AiBrain';
import SpaceRocket from '../graphics/SpaceRocket';
import TechDrone from '../graphics/TechDrone';
import VrHeadset from '../graphics/VrHeadset';
import './HomePage.css';

const PAGES = [
    { id: 1, title: 'Robot Buddy', subtitle: 'Build your own robot pal', Component: RobotBuddy },
    { id: 2, title: 'Circuit Board', subtitle: 'Electronic pathways', Component: CircuitBoard },
    { id: 3, title: 'AI Brain', subtitle: 'Neural network patterns', Component: AiBrain },
    { id: 4, title: 'Space Rocket', subtitle: 'Blast off to the stars', Component: SpaceRocket },
    { id: 5, title: 'Tech Drone', subtitle: 'Aerial explorer', Component: TechDrone },
    { id: 6, title: 'VR Headset', subtitle: 'Virtual worlds await', Component: VrHeadset },
];

const emptyColors: Record<string, string> = {};
const noop = () => { };

const HomePage: React.FC = () => {
    return (
        <div className="home">
            <header className="home__header">
                <div className="home__logo">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="8" y="10" width="24" height="20" rx="4" fill="#0d9488" />
                        <circle cx="15" cy="20" r="3.5" fill="#f0fdfa" />
                        <circle cx="25" cy="20" r="3.5" fill="#f0fdfa" />
                        <rect x="17" y="5" width="6" height="7" rx="3" fill="#0d9488" />
                        <circle cx="20" cy="4" r="2.5" fill="#f97066" />
                    </svg>
                </div>
                <h1 className="home__title">TechToons</h1>
                <p className="home__tagline">
                    Pick a page, choose your colors, and paint tech gadgets to life.
                </p>
            </header>
            <main className="page-container">
                <div className="gallery-grid">
                    {PAGES.map((page) => (
                        <Link key={page.id} to={`/page/${page.id}`} className="gallery-card" id={`gallery-card-${page.id}`}>
                            <div className="gallery-card__preview">
                                <page.Component onRegionClick={noop} regionColors={emptyColors} />
                            </div>
                            <div className="gallery-card__info">
                                <h3 className="gallery-card__title">{page.title}</h3>
                                <p className="gallery-card__subtitle">{page.subtitle}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
            <footer className="home__footer">
                <p>&copy; {new Date().getFullYear()} TechToons. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
