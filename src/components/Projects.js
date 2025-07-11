import React, { useState } from 'react';
import { withPrefix } from '../utils';
import ProjectPreview from './ProjectPreview';

const projects = [
    {
        id: 1,
        title: "GitHub Dynamic Quote Generator",
        description: "An Open-Source Project that allows you to add dynamic quotes to your GitHub profile README.",
        detailedDescription: `
            <p>GitHub Dynamic Quote Generator simply allows you to add an image link in the markdown (README.md) and it will view you a dynamic quote for every user visiting your GitHub account.</p>
            <p>This project demonstrates modern web development practices with a clean, responsive design and real-time quote generation.</p>
        `,
        image: "/images/1.jpg",
        tags: ["React", "Express.js", "Node.js"],
        demoUrl: "https://github-readme-quotes.herokuapp.com/",
        sourceUrl: "https://github.com/shravan20/github-readme-quotes",
        featured: true,
        features: [
            "Dynamic quote generation for GitHub profiles",
            "Clean and responsive design",
            "Easy integration with markdown files",
            "Real-time quote updates"
        ],
        techStack: [
            { name: "React", description: "Frontend framework for building the user interface" },
            { name: "Express.js", description: "Backend framework for API development" },
            { name: "Node.js", description: "Runtime environment for server-side JavaScript" }
        ]
    },
    {
        id: 2,
        title: "Smart Corona Mask",
        description: "IoT-based smart mask with social distancing detection and contact tracing capabilities.",
        detailedDescription: `
            <p>Designed a Smart Mask for the Hackathon event, which consisted of a Smart Mask that beeped whenever two people violated social distancing, connected using Bluetooth Technology.</p>
            <p>The system also stored data about who came in contact with the person on the server-side, with a mobile application to view this data and general stats regarding Corona.</p>
        `,
        image: "/images/2.jpg",
        tags: ["Arduino", "C++", "Bluetooth", "Spring Boot"],
        sourceUrl: "https://github.com/shravan20/nl-hackathon-2020-iot",
        featured: true,
        features: [
            "Social distancing violation detection",
            "Contact tracing capabilities",
            "Real-time alerts via audio feedback",
            "Mobile app for data visualization",
            "Bluetooth connectivity between devices"
        ],
        techStack: [
            { name: "Arduino", description: "Microcontroller platform for hardware control" },
            { name: "C++", description: "Programming language for embedded systems" },
            { name: "Bluetooth", description: "Wireless communication protocol" },
            { name: "Spring Boot", description: "Backend framework for API development" },
            { name: "React Native", description: "Mobile app development framework" }
        ]
    },
    {
        id: 3,
        title: "Autonomous Garbage Collection System",
        description: "IoT-based autonomous robot for indoor garbage collection using positioning systems.",
        detailedDescription: `
            <p>This project aimed at designing a Garbage Collection System using a Robot in the Indoors based on Indoor Positioning System using Internet of Things.</p>
            <p>A smart bin was deployed which would notify the Collector Robot to collect the garbage as and when it was filled. Two major challenges were solved: Path Planning for the locomotion of the Robot & Autonomous Control of the Robot.</p>
        `,
        image: "/images/3.jpg",
        tags: ["IoT", "Arduino", "Machine Learning"],
        paperUrl: "https://github.com/shravan20/certificates/blob/main/Publications/Autonomous%20Garbage%20Collection%20System%20using%0AInternet%20of%20Things/10F.pdf",
        sourceUrl: "https://github.com/shravan20/certificates/blob/main/Publications/Autonomous%20Garbage%20Collection%20System%20using%0AInternet%20of%20Things/10F.pdf",
        featured: false,
        features: [
            "Autonomous navigation and path planning",
            "Smart bin with fill-level detection",
            "Indoor positioning system",
            "Real-time notification system",
            "Machine learning for optimization"
        ],
        techStack: [
            { name: "Python", description: "Main programming language for control systems" },
            { name: "C++", description: "Low-level hardware control" },
            { name: "ESP32", description: "Microcontroller for IoT connectivity" },
            { name: "Raspberry Pi", description: "Single-board computer for processing" }
        ]
    },
    {
        id: 4,
        title: "Zoo Management Information System",
        description: "DBMS project aimed at solving problems faced by a Zoo to manage workflow from incoming animals to visitors.",
        detailedDescription: `
            <p>This Database Management System project was designed to address all the challenges faced by a Zoo to manage all the workflow from incoming animals, employees, and everyday coming visitors' data.</p>
            <p>The system provides comprehensive management features for zoo operations including animal care, staff management, and visitor tracking.</p>
        `,
        image: "/images/4.jpg",
        tags: ["HTML5", "CSS3", "PHP", "MySQL"],
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
    },
    {
        id: 5,
        title: "Obstacle Detection and Avoidance Robot",
        description: "Mini project on Embedded Systems exhibiting an autonomous robot using Arduino Uno and Ultrasonic Sensors.",
        detailedDescription: `
            <p>This embedded systems project demonstrates the implementation of an autonomous obstacle detection and avoidance robot using Arduino Uno and ultrasonic sensors.</p>
            <p>The robot can navigate through environments by detecting obstacles and automatically adjusting its path to avoid collisions.</p>
        `,
        image: "/images/5.jpg",
        tags: ["Arduino Uno", "C++", "Sensors"],
        sourceUrl: "https://github.com/shravan20/obstacle-detection-bot",
        featured: false,
        features: [
            "Real-time obstacle detection",
            "Automatic path adjustment",
            "Ultrasonic sensor integration",
            "Autonomous navigation",
            "Collision avoidance algorithms"
        ],
        techStack: [
            { name: "Arduino Uno", description: "Microcontroller platform" },
            { name: "C++", description: "Programming language for embedded systems" },
            { name: "Ultrasonic Sensors", description: "Distance measurement sensors" },
            { name: "Servo Motors", description: "Actuators for robot movement" }
        ]
    },
    {
        id: 6,
        title: "Online Food Portal Website",
        description: "Web Development project featuring an Online Food Portal to view menus and give hotel reviews.",
        detailedDescription: `
            <p>This Web Development project was completed to fulfill the requirement of an internship. It features an Online Food Portal that allows users to view hotel menus and provide reviews.</p>
            <p>The application includes user authentication, menu browsing, review system, and order management functionalities.</p>
        `,
        image: "/images/6.jpg",
        tags: ["Bootstrap", "AngularJS", "jQuery", "Express.js", "MongoDB"],
        featured: false,
        features: [
            "User authentication and profiles",
            "Restaurant menu browsing",
            "Review and rating system",
            "Order management",
            "Responsive web design"
        ],
        techStack: [
            { name: "AngularJS", description: "Frontend JavaScript framework" },
            { name: "Express.js", description: "Backend web framework for Node.js" },
            { name: "MongoDB", description: "NoSQL database" },
            { name: "Bootstrap", description: "Frontend CSS framework" },
            { name: "jQuery", description: "JavaScript library for DOM manipulation" }
        ]
    }
];

export default function Projects({ showAllProjects = false }) {
    const displayProjects = showAllProjects ? projects : projects.filter(project => project.featured);
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
    
    return (
        <section className="projects" id="projects">
            <div className="container">
                {!showAllProjects && (
                    <div className="section-header">
                        <h2 className="section-title heading-2">Featured Projects</h2>
                        <p className="section-subtitle body-large">
                            Some of the projects I've been working on
                        </p>
                    </div>
                )}
                <div className="projects-grid">
                    {displayProjects.map((project) => (
                        <div key={project.id} className="project-card" onClick={() => openPreview(project)}>
                            <div className="project-image">
                                <img src={withPrefix(project.image)} alt={project.title} />
                                <div className="project-overlay">
                                    <div className="project-actions">
                                        <button className="btn btn-sm btn-primary">
                                            View Details
                                        </button>
                                        {project.demoUrl && (
                                            <a 
                                                href={project.demoUrl} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="btn btn-sm"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                Live Demo
                                            </a>
                                        )}
                                        {project.sourceUrl && (
                                            <a 
                                                href={project.sourceUrl} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="btn btn-sm btn-outline"
                                                onClick={(e) => e.stopPropagation()}
                                            >
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
                {!showAllProjects && (
                    <div className="projects-footer">
                        <a href="/projects" className="btn btn-outline">View All Projects</a>
                    </div>
                )}
            </div>
            
            <ProjectPreview 
                project={selectedProject}
                isOpen={isPreviewOpen}
                onClose={closePreview}
            />
        </section>
    );
}
