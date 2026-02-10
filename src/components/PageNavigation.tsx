import React from 'react';
import { Link } from 'react-router-dom';
import './PageNavigation.css';

interface Props {
    currentPage: number;
    totalPages: number;
}

const PageNavigation: React.FC<Props> = ({ currentPage, totalPages }) => {
    const hasPrev = currentPage > 1;
    const hasNext = currentPage < totalPages;

    return (
        <nav className="page-nav" aria-label="Page navigation">
            <Link
                to="/"
                className="page-nav__home-btn"
                aria-label="Back to gallery"
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <span>Gallery</span>
            </Link>
            <div className="page-nav__controls">
                {hasPrev ? (
                    <Link to={`/page/${currentPage - 1}`} className="page-nav__arrow" aria-label="Previous page">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </Link>
                ) : (
                    <span className="page-nav__arrow page-nav__arrow--disabled" aria-hidden="true">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </span>
                )}
                <span className="page-nav__indicator">
                    {currentPage} / {totalPages}
                </span>
                {hasNext ? (
                    <Link to={`/page/${currentPage + 1}`} className="page-nav__arrow" aria-label="Next page">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </Link>
                ) : (
                    <span className="page-nav__arrow page-nav__arrow--disabled" aria-hidden="true">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </span>
                )}
            </div>
        </nav>
    );
};

export default PageNavigation;
