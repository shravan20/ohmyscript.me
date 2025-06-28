import React from 'react';

const techStack = [
    { name: 'React', icon: 'react', color: '#61DAFB' },
    { name: 'Node.js', icon: 'nodejs', color: '#339933' },
    { name: 'TypeScript', icon: 'typescript', color: '#3178C6' },
    { name: 'Next.js', icon: 'nextjs', color: '#000000' },
    { name: 'MongoDB', icon: 'mongodb', color: '#47A248' },
    { name: 'Docker', icon: 'docker', color: '#2496ED' },
    { name: 'AWS', icon: 'aws', color: '#232F3E' },
    { name: 'Git', icon: 'git', color: '#F05032' }
];

export default function TechStack() {
    return (
        <section className="tech-stack" id="stack">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Current Stack</h2>
                    <p className="section-subtitle">
                        Technologies I'm currently working with
                    </p>
                </div>
                <div className="tech-grid">
                    {techStack.map((tech, index) => (
                        <div key={index} className="tech-item">
                            <div className="tech-icon" style={{ backgroundColor: tech.color }}>
                                <span className={`icon-${tech.icon}`}></span>
                            </div>
                            <span className="tech-name">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
