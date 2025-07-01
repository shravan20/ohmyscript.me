import React, { useState, useMemo } from 'react';
import { withPrefix } from '../utils';
import ProjectPreview from './ProjectPreview';

const projects = [
    {
        id: 1,
        title: "NeuralVision: Deep Learning Image Classifier",
        description: "A sophisticated image classification system built with TensorFlow and deployed via a React-based web interface.",
        detailedDescription: `
            <p>NeuralVision is an advanced image classification system that leverages deep learning techniques to accurately identify and categorize images across multiple classes.</p>
            <p>The system uses convolutional neural networks (CNNs) trained on large datasets to achieve high accuracy in image recognition tasks.</p>
        `,
        image: "/images/1.jpg",
        tags: ["Machine Learning", "TensorFlow", "React"],
        category: "Machine Learning",
        demoUrl: "https://neuralvision-demo.herokuapp.com/",
        sourceUrl: "https://github.com/shravan20/neuralvision-classifier",
        featured: true,
        features: [
            "Real-time image classification",
            "Multiple model support",
            "Batch processing capabilities",
            "REST API integration",
            "Web-based interface"
        ],
        techStack: [
            { name: "TensorFlow", description: "Machine learning framework" },
            { name: "Python", description: "Backend programming language" },
            { name: "React", description: "Frontend JavaScript library" },
            { name: "Flask", description: "Web framework for Python" },
            { name: "OpenCV", description: "Computer vision library" }
        ]
    },
    {
        id: 2,
        title: "DataFlow: Streaming Analytics Platform",
        description: "Real-time data processing pipeline using Apache Kafka, Spark Streaming, and visualization with D3.js.",
        detailedDescription: `
            <p>DataFlow is a comprehensive real-time analytics platform designed for processing large volumes of streaming data.</p>
            <p>The system provides end-to-end data pipeline capabilities with real-time visualization and monitoring.</p>
        `,
        image: "/images/2.jpg",
        tags: ["Big Data", "Apache Kafka", "Spark"],
        category: "Big Data",
        demoUrl: "https://dataflow-analytics.herokuapp.com/",
        sourceUrl: "https://github.com/shravan20/dataflow-platform",
        featured: true,
        features: [
            "Real-time data ingestion",
            "Stream processing at scale",
            "Interactive dashboards",
            "Alert and notification system",
            "Multi-source data integration"
        ],
        techStack: [
            { name: "Apache Kafka", description: "Distributed streaming platform" },
            { name: "Apache Spark", description: "Analytics engine for big data" },
            { name: "D3.js", description: "Data visualization library" },
            { name: "Python", description: "Backend processing" },
            { name: "Docker", description: "Containerization platform" }
        ]
    },
    {
        id: 3,
        title: "CodeNarratives: Developer Documentation Tool",
        description: "An intelligent documentation generator that extracts narratives from codebases and creates interactive documentation.",
        detailedDescription: `
            <p>CodeNarratives is an innovative tool that automatically generates comprehensive documentation by analyzing code structure and extracting meaningful narratives.</p>
            <p>It helps development teams maintain up-to-date documentation with minimal manual effort.</p>
        `,
        image: "/images/3.jpg",
        tags: ["NLP", "Documentation", "TypeScript"],
        category: "Developer Tools",
        demoUrl: "https://codenarratives-demo.herokuapp.com/",
        sourceUrl: "https://github.com/shravan20/codenarratives",
        featured: true,
        features: [
            "Automated documentation generation",
            "Code analysis and narrative extraction",
            "Interactive documentation interface",
            "Multi-language support",
            "Integration with popular IDEs"
        ],
        techStack: [
            { name: "TypeScript", description: "Strongly typed JavaScript" },
            { name: "Node.js", description: "JavaScript runtime" },
            { name: "Natural Language Processing", description: "Text analysis capabilities" },
            { name: "React", description: "Frontend framework" },
            { name: "AST Parsing", description: "Code structure analysis" }
        ]
    },
    {
        id: 4,
        title: "Smart Corona Mask",
        description: "IoT-enabled smart mask with social distancing alerts and contact tracing capabilities using Bluetooth technology.",
        detailedDescription: `
            <p>Smart Corona Mask is an innovative IoT solution designed for the pandemic era, featuring automatic social distancing monitoring and contact tracing.</p>
            <p>The system includes both hardware components and mobile application for comprehensive health monitoring.</p>
        `,
        image: "/images/4.jpg",
        tags: ["IoT", "Arduino", "Bluetooth"],
        category: "IoT",
        sourceUrl: "https://github.com/shravan20/nl-hackathon-2020-iot",
        featured: false,
        features: [
            "Proximity detection and alerts",
            "Contact tracing capabilities",
            "Mobile app integration",
            "Real-time health monitoring",
            "Data analytics dashboard"
        ],
        techStack: [
            { name: "Arduino", description: "Microcontroller platform" },
            { name: "Bluetooth Technology", description: "Wireless communication" },
            { name: "React Native", description: "Mobile app development" },
            { name: "Spring Boot", description: "Backend framework" },
            { name: "MySQL", description: "Database management" }
        ]
    },
    {
        id: 5,
        title: "GitHub Dynamic Quote Generator",
        description: "An Open-Source Project that allows you to add dynamic quotes to your GitHub profile README with customizable themes.",
        detailedDescription: `
            <p>GitHub Dynamic Quote Generator is an open-source service that provides dynamic, refreshing quotes for GitHub profile READMEs.</p>
            <p>The service offers various themes and customization options to match different profile aesthetics.</p>
        `,
        image: "/images/5.jpg",
        tags: ["React", "Express.js", "Open Source"],
        category: "Web Development",
        demoUrl: "https://github-readme-quotes.herokuapp.com/",
        sourceUrl: "https://github.com/shravan20/github-readme-quotes",
        featured: false,
        features: [
            "Dynamic quote generation",
            "Multiple theme options",
            "Easy integration with GitHub",
            "Customizable styling",
            "API endpoint access"
        ],
        techStack: [
            { name: "Express.js", description: "Node.js web framework" },
            { name: "React", description: "Frontend library" },
            { name: "SVG Generation", description: "Dynamic image creation" },
            { name: "Heroku", description: "Cloud platform deployment" },
            { name: "GitHub API", description: "Repository integration" }
        ]
    },
    {
        id: 6,
        title: "Zoo Management Information System",
        description: "DBMS project aimed at solving problems faced by a Zoo to manage workflow from incoming animals to visitors.",
        detailedDescription: `
            <p>This Database Management System project was designed to address all the challenges faced by a Zoo to manage all the workflow from incoming animals, employees, and everyday coming visitors' data.</p>
            <p>The system provides comprehensive management features for zoo operations including animal care, staff management, and visitor tracking.</p>
        `,
        image: "/images/6.jpg",
        tags: ["PHP", "MySQL", "HTML5"],
        category: "Database",
        sourceUrl: "https://github.com/shravan20/dbms-zoo-mgmt-system",
        featured: false,
        features: [
            "Animal information management",
            "Employee and staff tracking",
            "Visitor registration and management",
            "Feeding schedules and health records",
            "Report generation and analytics"
        ],
        techStack: [
            { name: "PHP", description: "Server-side scripting language" },
            { name: "MySQL", description: "Relational database management system" },
            { name: "HTML5", description: "Markup language for web structure" },
            { name: "CSS3", description: "Styling language for web presentation" },
            { name: "XAMPP", description: "Local development environment" }
        ]
    }
];

const allTags = [
    "Apache Kafka", "Big Data", "D3.js", "Developer Tools", "Documentation", 
    "Machine Learning", "NLP", "Python", "React", "Real-time Analytics", 
    "Spark", "TensorFlow", "TypeScript", "IoT", "Arduino", "Bluetooth",
    "Express.js", "Open Source", "PHP", "MySQL", "HTML5"
];

export default function ProjectsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTag, setSelectedTag] = useState('');
    const [selectedProject, setSelectedProject] = useState(null);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    const openPreview = (project) => {
        setSelectedProject(project);
        setIsPreviewOpen(true);
    };

    const closePreview = () => {
        setIsPreviewOpen(false);
        setSelectedProject(null);
    };

    // Filter projects based on search term and selected tag
    const filteredProjects = useMemo(() => {
        let filtered = projects;

        if (searchTerm) {
            filtered = filtered.filter(project =>
                project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }

        if (selectedTag) {
            filtered = filtered.filter(project =>
                project.tags.includes(selectedTag) || project.category === selectedTag
            );
        }

        return filtered;
    }, [searchTerm, selectedTag]);

    return (
        <div className="projects-page">
            <div className="container">
                <div className="projects-header">
                    <h1 className="projects-title">Projects Portfolio</h1>
                    <p className="projects-subtitle">
                        A collection of my work in software engineering, data science, and machine learning. Each
                        project demonstrates different skills and approaches.
                    </p>
                </div>

                <div className="projects-controls">
                    <div className="search-section">
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                    </div>

                    <div className="filter-tags">
                        <button
                            className={`filter-tag ${selectedTag === '' ? 'active' : ''}`}
                            onClick={() => setSelectedTag('')}
                        >
                            All
                        </button>
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                className={`filter-tag ${selectedTag === tag ? 'active' : ''}`}
                                onClick={() => setSelectedTag(tag)}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="project-card" onClick={() => openPreview(project)}>
                            <div className="project-image">
                                <img src={withPrefix(project.image)} alt={project.title} />
                                <div className="project-category-badge">
                                    {project.category}
                                </div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.slice(0, 3).map((tag, index) => (
                                        <span key={index} className="project-tag">{tag}</span>
                                    ))}
                                    {project.tags.length > 3 && (
                                        <span className="project-tag more">+{project.tags.length - 3}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="no-projects">
                        <h3>No projects found</h3>
                        <p>Try adjusting your search terms or filters.</p>
                    </div>
                )}
            </div>

            <ProjectPreview 
                project={selectedProject}
                isOpen={isPreviewOpen}
                onClose={closePreview}
            />
        </div>
    );
}
