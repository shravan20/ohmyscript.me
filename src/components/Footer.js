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
                        <p className="footer-credit">Designed & Built with ❤️</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
