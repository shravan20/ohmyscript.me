import React from 'react';
import { Link, withPrefix } from '../utils';

export default function Footer({ data }) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3 className="footer-title">OhMyScript</h3>
                        <p className="footer-subtitle">Software Engineer & Data Scientist</p>
                    </div>
                    
                    <nav className="footer-nav">
                        <Link href={withPrefix('/')}>Home</Link>
                        <Link href={withPrefix('/blog')}>Articles</Link>
                        <Link href={withPrefix('/projects')}>Projects</Link>
                        <Link href={withPrefix('/contact')}>Newsletter</Link>
                        <Link href={withPrefix('/about')}>Resume</Link>
                    </nav>
                    
                    <div className="footer-bottom">
                        <p className="footer-copyright">© {currentYear} Shravan. All rights reserved.</p>
                        <p className="footer-credit">Designed & Built with <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{display: 'inline', color: '#ef4444'}}><path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/></svg></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
