import React, { useState, useEffect } from 'react';
import { Link, withPrefix } from '../utils';
import NextLink from 'next/link';

export default function Header({ data, page }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Home', url: '/' },
        { label: 'Articles', url: '/blog' },
        { label: 'Projects', url: '/projects' },
        { label: 'Bug Tales', url: '/bug-tales', icon: '🐛' },
        { label: 'Newsletter', url: '/newsletter' },
        { label: 'Resume', url: '/resume' }
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        // You can add theme switching logic here
    };

    const handleNavClick = (url) => {
        setIsMenuOpen(false);
        
        if (url.startsWith('#')) {
            const element = document.querySelector(url);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <div className="container">
                <div className="header-content">
                    <div className="header-brand">
                        <Link href={withPrefix('/')} className="brand-link">
                            <span className="brand-text">OhMyScript</span>
                        </Link>
                    </div>
                    
                    <nav className={`header-nav ${isMenuOpen ? 'nav-open' : ''}`}>
                        <ul className="nav-list">
                            {navItems.map((item, index) => (
                                <li key={index} className="nav-item">
                                    {item.url === '/blog' ? (
                                        <NextLink href="/blog" passHref>
                                            <a 
                                                className={`nav-link ${page?.__metadata?.urlPath === item.url ? 'nav-link-active' : ''}`}
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {item.icon && <span className="nav-icon">{item.icon}</span>}
                                                {item.label}
                                            </a>
                                        </NextLink>
                                    ) : item.url.startsWith('#') ? (
                                        <a 
                                            href={item.url}
                                            className={`nav-link ${page?.__metadata?.urlPath === item.url ? 'nav-link-active' : ''}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleNavClick(item.url);
                                            }}
                                        >
                                            {item.icon && <span className="nav-icon">{item.icon}</span>}
                                            {item.label}
                                        </a>
                                    ) : (
                                        <Link 
                                            href={withPrefix(item.url)} 
                                            className={`nav-link ${page?.__metadata?.urlPath === item.url ? 'nav-link-active' : ''}`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.icon && <span className="nav-icon">{item.icon}</span>}
                                            {item.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="header-actions">
                        <button 
                            className="theme-toggle"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                        >
                            {isDarkMode ? '☀️' : '🌙'}
                        </button>
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
