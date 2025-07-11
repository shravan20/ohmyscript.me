import React from 'react';
import { withPrefix } from '../utils';

const ProjectPreview = ({ project, isOpen, onClose }) => {
    if (!isOpen || !project) return null;

    React.useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="project-preview-overlay" onClick={handleBackdropClick}>
            <div className="project-preview-modal">
                <button className="project-preview-close" onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                
                <div className="project-preview-content">
                    <div className="project-preview-header">
                        <div className="project-preview-image">
                            <img src={withPrefix(project.image)} alt={project.title} />
                            {project.featured && (
                                <div className="project-featured-badge">Featured</div>
                            )}
                        </div>
                        
                        <div className="project-preview-info">
                            <h2 className="project-preview-title">{project.title}</h2>
                            <p className="project-preview-description">{project.description}</p>
                            
                            <div className="project-preview-tags">
                                {project.tags && project.tags.map((tag, index) => (
                                    <span key={index} className="tag">{tag}</span>
                                ))}
                            </div>
                            
                            <div className="project-preview-actions">
                                {project.demoUrl && (
                                    <a 
                                        href={project.demoUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="btn btn-primary"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        Live Demo
                                    </a>
                                )}
                                {project.sourceUrl && (
                                    <a 
                                        href={project.sourceUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="btn btn-outline"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        View Code
                                    </a>
                                )}
                                {project.paperUrl && (
                                    <a 
                                        href={project.paperUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="btn btn-secondary"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        Research Paper
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                    
                    {project.detailedDescription && (
                        <div className="project-preview-details">
                            <h3>Project Details</h3>
                            <div dangerouslySetInnerHTML={{ __html: project.detailedDescription }} />
                        </div>
                    )}
                    
                    {project.features && project.features.length > 0 && (
                        <div className="project-preview-features">
                            <h3>Key Features</h3>
                            <ul>
                                {project.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    
                    {project.techStack && project.techStack.length > 0 && (
                        <div className="project-preview-tech">
                            <h3>Technology Stack</h3>
                            <div className="tech-grid">
                                {project.techStack.map((tech, index) => (
                                    <div key={index} className="tech-item">
                                        <span className="tech-name">{tech.name}</span>
                                        {tech.description && (
                                            <span className="tech-description">{tech.description}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    
                    {project.screenshots && project.screenshots.length > 0 && (
                        <div className="project-preview-gallery">
                            <h3>Screenshots</h3>
                            <div className="screenshot-grid">
                                {project.screenshots.map((screenshot, index) => (
                                    <div key={index} className="screenshot-item">
                                        <img src={withPrefix(screenshot.url)} alt={screenshot.caption || `Screenshot ${index + 1}`} />
                                        {screenshot.caption && (
                                            <p className="screenshot-caption">{screenshot.caption}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectPreview;
