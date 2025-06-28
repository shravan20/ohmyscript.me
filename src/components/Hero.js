import React, { useState, useEffect } from 'react';
import { withPrefix } from '../utils';

export default function Hero({ data }) {
    const roles = [
        'Data Scientist',
        'Open Source Enthusiast',
        'Computer Science Engineer',
        'Software Engineer',
        'Data Science Enthusiast',
        'Tinkerer at Heart'
    ];

    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const currentRole = roles[currentRoleIndex];
            
            if (isDeleting) {
                setDisplayText(prev => prev.slice(0, -1));
                setTypingSpeed(75);
            } else {
                setDisplayText(prev => currentRole.slice(0, prev.length + 1));
                setTypingSpeed(150);
            }

            if (!isDeleting && displayText === currentRole) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && displayText === '') {
                setIsDeleting(false);
                setCurrentRoleIndex(prev => (prev + 1) % roles.length);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentRoleIndex, typingSpeed, roles]);

    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-visual">
                        <div className="hero-circle">
                            <div className="circle-gradient"></div>
                            <div className="circle-inner">AI</div>
                        </div>
                    </div>
                    <div className="hero-text">
                        <h1 className="hero-title">
                            Building <span className="hero-highlight">intelligent</span> solutions
                        </h1>
                        <p className="hero-subtitle">
                            Software Engineering + Data Science
                        </p>
                        <p className="hero-role">
                            I am a <span className="role-highlight typewriter">
                                {displayText}
                                <span className="cursor">|</span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
