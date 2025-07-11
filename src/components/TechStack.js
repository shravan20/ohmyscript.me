import React from 'react';

const techCategories = [
    {
        title: 'Programming',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z"/></svg>,
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
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22,21H2V3H4V19H6V17H10V19H12V16H16V19H18V17H22V21M18,14H22V16H18V14M12,6H16V9H12V6M16,10H20V13H16V10M6,10H10V12H6V10M2,11H6V13H2V11M4,14H8V16H4V14Z"/></svg>,
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
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/></svg>,
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
