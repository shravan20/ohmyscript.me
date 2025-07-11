import React, { useState, useEffect, useRef } from 'react';

export default function Metrics() {
    const [isVisible, setIsVisible] = useState(false);
    const [animatedNumbers, setAnimatedNumbers] = useState({
        commits: 0,
        years: 0,
    });
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible) {
            const commitsInterval = setInterval(() => {
                setAnimatedNumbers(prev => {
                    if (prev.commits < 500) {
                        return { ...prev, commits: prev.commits + 15 };
                    }
                    clearInterval(commitsInterval);
                    return { ...prev, commits: 500 };
                });
            }, 30);

            const yearsInterval = setInterval(() => {
                setAnimatedNumbers(prev => {
                    if (prev.years < 6) {
                        return { ...prev, years: prev.years + 1 };
                    }
                    clearInterval(yearsInterval);
                    return { ...prev, years: 6 };
                });
            }, 200);

            return () => {
                clearInterval(commitsInterval);
                clearInterval(yearsInterval);
            };
        }
    }, [isVisible]);

    const metrics = [
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="6" x2="6" y1="3" y2="15"/>
                    <circle cx="18" cy="6" r="3"/>
                    <circle cx="6" cy="18" r="3"/>
                    <path d="M18 9a9 9 0 0 1-9 9"/>
                </svg>
            ),
            number: `${animatedNumbers.commits}+`,
            label: 'Commits',
            sublabel: '"hotfix: final_workingfix_v2"',
            color: '#10B981',
            bgColor: '#064E3B'
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16,18 22,12 16,6"/>
                    <polyline points="8,6 2,12 8,18"/>
                </svg>
            ),
            number: `${animatedNumbers.years}+`,
            label: 'Years',
            sublabel: 'building, breaking, and fixing stuff',
            color: '#06B6D4',
            bgColor: '#164E63'
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
                    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
                </svg>
            ),
            number: '20+',
            label: 'Years',
            sublabel: 'tinkering (professionally since 2019)',
            color: '#8B5CF6',
            bgColor: '#581C87'
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
                    <line x1="6" x2="6" y1="1" y2="4"/>
                    <line x1="10" x2="10" y1="1" y2="4"/>
                    <line x1="14" x2="14" y1="1" y2="4"/>
                </svg>
            ),
            number: '15+',
            label: 'Cups',
            sublabel: 'legally concerning caffeine intake',
            color: '#F59E0B',
            bgColor: '#92400E'
        }
    ];

    return (
        <section ref={sectionRef} className="metrics-section">
            <div className="container">
                <div className="metrics-header">
                    <h2 className="metrics-title heading-2">My Journey, Quantified</h2>
                    <p className="metrics-subtitle body-large">
                        statistical glimpse into my chaotic journey
                    </p>
                </div>
                
                <div className="metrics-grid">
                    {metrics.map((metric, index) => (
                        <div 
                            key={index} 
                            className={`metric-card ${isVisible ? 'animate-in' : ''}`}
                            style={{ 
                                animationDelay: `${index * 150}ms`,
                                '--metric-color': metric.color,
                                '--metric-bg-color': metric.bgColor
                            }}
                        >
                            <div className="metric-icon-wrapper">
                                <div className="metric-icon">
                                    {metric.icon}
                                </div>
                                <div className="metric-glow"></div>
                            </div>
                            
                            <div className="metric-content">
                                <div className="metric-number text-display">{metric.number}</div>
                                <div className="metric-label heading-5">{metric.label}</div>
                                <div className="metric-sublabel caption">{metric.sublabel}</div>
                            </div>
                            
                            <div className="metric-decoration">
                                <div className="metric-dot"></div>
                                <div className="metric-line"></div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="metrics-footer">
                    <div className="metrics-disclaimer body-small">
                        * Results may vary. Side effects include increased coffee dependency 
                        and spontaneous debugging sessions at 3 AM.
                    </div>
                </div>
            </div>
        </section>
    );
}
