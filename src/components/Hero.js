import React from 'react';
import { withPrefix } from '../utils';

export default function Hero({ data }) {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">
                        Hi, I'm Shravan Kumar B
                    </h1>
                    <p className="hero-description">
                        A passionate software developer who loves building innovative solutions 
                        and exploring new technologies. Welcome to my digital playground.
                    </p>
                    <div className="hero-actions">
                        <a href="#contact" className="btn btn-primary">Get In Touch</a>
                        <a href="#projects" className="btn btn-secondary">View My Work</a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="hero-image">
                        <img src={withPrefix('images/author.jpg')} alt="Shravan Kumar B" />
                    </div>
                </div>
            </div>
        </section>
    );
}
