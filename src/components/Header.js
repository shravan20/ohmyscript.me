import React, { useState, useEffect } from 'react';
import { Link, withPrefix } from '../utils';
import NextLink from 'next/link';

export default function Header({ data, page }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else if (prefersDark) {
            setIsDarkMode(true);
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            setIsDarkMode(false);
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }, []);

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
        { label: 'Bug Tales', url: '/bug-tales', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14,12H10V10H14M14,16H10V14H14M20,8H17.19C16.74,7.22 16.12,6.55 15.37,6.04L17,4.41L15.59,3L13.42,5.17C12.96,5.06 12.5,5 12,5C11.5,5 11.04,5.06 10.59,5.17L8.41,3L7,4.41L8.62,6.04C7.88,6.55 7.26,7.22 6.81,8H4V10H6.09C6.04,10.33 6,10.66 6,11V12H4V14H6V15C6,15.34 6.04,15.67 6.09,16H4V18H6.81C7.85,19.79 9.78,21 12,21C14.22,21 16.15,19.79 17.19,18H20V16H17.91C17.96,15.67 18,15.34 18,15V14H20V12H18V11C18,10.66 17.96,10.33 17.91,10H20V8Z"/></svg> },
        { label: 'Newsletter', url: '/newsletter' },
        { label: 'Resume', url: '/resume' }
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleTheme = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        setIsDarkMode(!isDarkMode);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
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
