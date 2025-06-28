import React from 'react';
import { Link, withPrefix } from '../utils';

export default function StackLife() {
    const currentActivities = {
        reading: [
            {
                title: "Designing Data-Intensive Applications",
                author: "Martin Kleppmann",
                quote: "Mind blown by distributed systems concepts!",
                image: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Atomic Habits",
                author: "James Clear",
                quote: "Transforming my coding workflow one habit at a time",
                image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "The Pragmatic Programmer",
                author: "Andy Hunt & Dave Thomas",
                quote: "Old but gold. Why didn't I read this 5 years ago?",
                image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80"
            }
        ],
        building: [
            {
                title: "Personal Knowledge Hub",
                status: "IN PROGRESS",
                description: "A second brain for my developer notes and resources",
                tags: ["React", "TypeScript", "TailwindCSS"],
                update: "feat: add bidirectional linking between notes"
            },
            {
                title: "API Rate Limiter",
                status: "LAUNCHED",
                description: "Distributed rate limiting library for microservices",
                tags: ["Go", "Redis", "Docker"],
                update: "fix: handle edge case in sliding window algorithm"
            },
            {
                title: "IoT Home Dashboard",
                status: "PLANNING",
                description: "Unified dashboard for smart home devices",
                tags: ["Vue", "MQTT", "Node.js"],
                update: ""
            },
            {
                title: "ML-Powered Recipe App",
                status: "ABANDONED",
                description: "App that suggests recipes based on ingredients in your fridge",
                tags: ["Python", "TensorFlow", "React Native"],
                update: "refactor: switch to new image recognition model"
            }
        ],
        watching: [
            {
                title: "Everything Everywhere All at Once",
                type: "Movie",
                quote: "Multiverse concept makes me rethink my error handling strategies",
                image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Advanced React Patterns",
                type: "Course",
                quote: "Mind-blowing approach to component composition!",
                image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "The Bear",
                type: "Series",
                quote: "High-pressure environments in kitchens = debugging in production",
                image: "https://images.unsplash.com/photo-1581557991964-2d6c487245a1?auto=format&fit=crop&w=800&q=80"
            }
        ]
    };

    const getStatusColor = (status) => {
        switch(status) {
            case 'IN PROGRESS': return 'status-progress';
            case 'LAUNCHED': return 'status-launched';
            case 'PLANNING': return 'status-planning';
            case 'ABANDONED': return 'status-abandoned';
            default: return '';
        }
    };

    return (
        <section className="stack-life">
            <div className="container">
                <div className="stack-life-header">
                    <h2 className="section-title">My Current Stack Life</h2>
                </div>

                <div className="stack-life-grid">
                    <div className="stack-life-section">
                        <h3 className="stack-life-title">Currently Reading</h3>
                        <div className="reading-list">
                            {currentActivities.reading.map((book, index) => (
                                <div key={index} className="reading-item">
                                    <div className="reading-image">
                                        <img src={book.image} alt={book.title} />
                                    </div>
                                    <div className="reading-content">
                                        <h4 className="reading-title">{book.title}</h4>
                                        <p className="reading-author">{book.author}</p>
                                        <p className="reading-quote">"{book.quote}"</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="stack-life-section">
                        <h3 className="stack-life-title">Currently Building</h3>
                        <div className="building-list">
                            {currentActivities.building.map((project, index) => (
                                <div key={index} className="building-item">
                                    <div className="building-header">
                                        <h4 className="building-title">{project.title}</h4>
                                        <span className={`building-status ${getStatusColor(project.status)}`}>
                                            {project.status}
                                        </span>
                                    </div>
                                    <p className="building-description">{project.description}</p>
                                    <div className="building-tags">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="building-tag">{tag}</span>
                                        ))}
                                    </div>
                                    {project.update && (
                                        <p className="building-update">{project.update}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="stack-life-section">
                        <h3 className="stack-life-title">Currently Watching</h3>
                        <div className="watching-list">
                            {currentActivities.watching.map((item, index) => (
                                <div key={index} className="watching-item">
                                    <div className="watching-image">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="watching-content">
                                        <h4 className="watching-title">{item.title}</h4>
                                        <p className="watching-type">{item.type}</p>
                                        <p className="watching-quote">"{item.quote}"</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
