import React from 'react';
import { withPrefix } from '../utils';

const projects = [
    {
        id: 1,
        title: "GitHub Dynamic Quote Generator",
        description: "An Open-Source Project that allows you to add dynamic quotes to your GitHub profile README.",
        image: "/images/1.jpg",
        tags: ["React", "Express.js", "Node.js"],
        demoUrl: "https://github-readme-quotes.herokuapp.com/",
        sourceUrl: "https://github.com/shravan20/github-readme-quotes",
        featured: true
    },
    {
        id: 2,
        title: "Smart Corona Mask",
        description: "IoT-based smart mask with social distancing detection and contact tracing capabilities.",
        image: "/images/2.jpg",
        tags: ["Arduino", "C++", "Bluetooth", "Spring Boot"],
        sourceUrl: "https://github.com/shravan20/nl-hackathon-2020-iot",
        featured: true
    },
    {
        id: 3,
        title: "Autonomous Garbage Collection System",
        description: "IoT-based autonomous robot for indoor garbage collection using positioning systems.",
        image: "/images/3.jpg",
        tags: ["IoT", "Arduino", "Machine Learning"],
        featured: false
    }
];

export default function Projects() {
    const featuredProjects = projects.filter(project => project.featured);
    
    return (
        <section className="projects" id="projects">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">
                        Some of the projects I've been working on
                    </p>
                </div>
                <div className="projects-grid">
                    {featuredProjects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                <img src={withPrefix(project.image)} alt={project.title} />
                                <div className="project-overlay">
                                    <div className="project-actions">
                                        {project.demoUrl && (
                                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm">
                                                Live Demo
                                            </a>
                                        )}
                                        {project.sourceUrl && (
                                            <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline">
                                                View Code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="projects-footer">
                    <a href="/projects" className="btn btn-outline">View All Projects</a>
                </div>
            </div>
        </section>
    );
}
