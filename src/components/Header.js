import React, { useState, useEffect } from 'react';
import { Link, withPrefix } from '../utils';

export default function Header({ data, page }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'About', url: '/about' },
        { label: 'Projects', url: '/projects' },
        { label: 'Articles', url: '/blog' },
        { label: 'Contact', url: '/contact' }
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <div className="container">
                <div className="header-content">
                    <div className="header-brand">
                        <Link href={withPrefix('/')} className="brand-link">
                            <span className="brand-text">SK</span>
                        </Link>
                    </div>
                    
                    <nav className={`header-nav ${isMenuOpen ? 'nav-open' : ''}`}>
                        <ul className="nav-list">
                            {navItems.map((item, index) => (
                                <li key={index} className="nav-item">
                                    <Link 
                                        href={withPrefix(item.url)} 
                                        className={`nav-link ${page?.__metadata?.urlPath === item.url ? 'nav-link-active' : ''}`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="header-actions">
                        <Link href={withPrefix('/contact')} className="btn btn-primary btn-sm">
                            Get In Touch
                        </Link>
                        <button 
                            className={`menu-toggle ${isMenuOpen ? 'menu-toggle-active' : ''}`}
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            <span className="menu-toggle-bar"></span>
                            <span className="menu-toggle-bar"></span>
                            <span className="menu-toggle-bar"></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
