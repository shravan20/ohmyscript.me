import React from 'react';

const techCategories = [
    {
        title: 'Programming',
        icon: '💻',
        skills: [
            { name: 'Python', level: 'Expert' },
            { name: 'JavaScript', level: 'Advanced' },
            { name: 'TypeScript', level: 'Intermediate' },
            { name: 'Java', level: 'Intermediate' },
            { name: 'C++', level: 'Intermediate' },
            { name: 'SQL', level: 'Advanced' }
        ]
    },
    {
        title: 'Data Science',
        icon: '📊',
        skills: [
            { name: 'Machine Learning', level: 'Advanced' },
            { name: 'Deep Learning', level: 'Intermediate' },
            { name: 'Data Analysis', level: 'Expert' },
            { name: 'Statistics', level: 'Advanced' },
            { name: 'Pandas', level: 'Expert' },
            { name: 'NumPy', level: 'Expert' },
            { name: 'Scikit-learn', level: 'Advanced' },
            { name: 'TensorFlow', level: 'Intermediate' }
        ]
    },
    {
        title: 'Web Development',
        icon: '🌐',
        skills: [
            { name: 'React', level: 'Advanced' },
            { name: 'Next.js', level: 'Intermediate' },
            { name: 'Node.js', level: 'Intermediate' },
            { name: 'HTML/CSS', level: 'Advanced' },
            { name: 'REST APIs', level: 'Advanced' },
            { name: 'GraphQL', level: 'Beginner' }
        ]
    }
];

const getLevelColor = (level) => {
    switch (level) {
        case 'Expert': return '#10B981';
        case 'Advanced': return '#3B82F6';
        case 'Intermediate': return '#F59E0B';
        case 'Beginner': return '#EF4444';
        default: return '#6B7280';
    }
};

export default function TechStack() {
    return (
        <section className="tech-stack" id="stack">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Tech Stack</h2>
                    <p className="section-subtitle">
                        Technologies and skills I work with
                    </p>
                </div>
                <div className="tech-categories">
                    {techCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="tech-category">
                            <div className="category-header">
                                <span className="category-icon">{category.icon}</span>
                                <h3 className="category-title">{category.title}</h3>
                            </div>
                            <div className="skills-grid">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <span className="skill-name">{skill.name}</span>
                                        <span 
                                            className="skill-level" 
                                            style={{ color: getLevelColor(skill.level) }}
                                        >
                                            {skill.level}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
