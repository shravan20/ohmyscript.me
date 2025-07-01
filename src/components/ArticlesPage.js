import React, { useState, useEffect, useMemo } from 'react';
import moment from 'moment-strftime';
import { withPrefix, getPages } from '../utils';

export default function ArticlesPage({ pages }) {
    console.log('ArticlesPage received pages:', pages);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Sample articles data with categories
    const sampleArticles = [
        {
            id: 1,
            title: "Building Reactive UIs with React",
            excerpt: "Learn how to create responsive and reactive user interfaces using React's state management.",
            image: "/images/4.jpg",
            date: "2024-04-15",
            readTime: "8 min read",
            cognitiveLoad: "Moderate",
            categories: ["React", "Frontend", "JavaScript"],
            url: "/posts/react-typescript-guide"
        },
        {
            id: 2,
            title: "Advanced TypeScript Patterns",
            excerpt: "Explore advanced TypeScript patterns to improve type safety and developer experience in your projects.",
            image: "/images/5.jpg",
            date: "2024-05-22",
            readTime: "12 min read",
            cognitiveLoad: "Heavy",
            categories: ["TypeScript", "Programming", "Web Development"],
            url: "/posts/devops-best-practices"
        },
        {
            id: 3,
            title: "DevOps Best Practices",
            excerpt: "A comprehensive guide to modern DevOps practices for streamlined development workflows.",
            image: "/images/6.jpg",
            date: "2024-03-10",
            readTime: "10 min read",
            cognitiveLoad: "Moderate",
            categories: ["DevOps", "Programming", "Web Development"],
            url: "/posts/open-source-guide"
        },
        {
            id: 4,
            title: "Machine Learning Fundamentals",
            excerpt: "Understanding the core concepts of machine learning and their practical applications.",
            image: "/images/7.jpg",
            date: "2024-02-28",
            readTime: "15 min read",
            cognitiveLoad: "Heavy",
            categories: ["Machine Learning", "Data Science", "Python"],
            url: "/posts/ml-fundamentals"
        },
        {
            id: 5,
            title: "Modern JavaScript Features",
            excerpt: "Discover the latest JavaScript features and how to use them effectively in your projects.",
            image: "/images/8.jpg",
            date: "2024-04-05",
            readTime: "6 min read",
            cognitiveLoad: "Light",
            categories: ["JavaScript", "Frontend", "Web Development"],
            url: "/posts/modern-javascript"
        },
        {
            id: 6,
            title: "Data Visualization with D3.js",
            excerpt: "Create stunning data visualizations using D3.js and modern web technologies.",
            image: "/images/9.jpg",
            date: "2024-01-20",
            readTime: "14 min read",
            cognitiveLoad: "Heavy",
            categories: ["Data Science", "JavaScript", "Frontend"],
            url: "/posts/data-visualization"
        }
    ];

    // Get blog posts from pages data and transform them
    const articles = useMemo(() => {
        const blogPosts = pages || [];
        
        if (blogPosts.length > 0) {
            console.log('Using dynamic blog posts:', blogPosts);
            return blogPosts.map((post, index) => ({
                id: index + 1,
                title: post.frontmatter.title || 'Untitled Post',
                excerpt: post.frontmatter.excerpt || 'No excerpt available',
                image: post.frontmatter.thumb_img_path ? withPrefix(post.frontmatter.thumb_img_path) : `/images/${(index % 6) + 4}.jpg`,
                date: post.frontmatter.date || new Date().toISOString().split('T')[0],
                readTime: post.frontmatter.read_time || "5 min read",
                cognitiveLoad: post.frontmatter.cognitive_load || "Moderate",
                categories: post.frontmatter.categories || ["Programming"],
                url: post.__metadata?.urlPath || '#'
            }));
        }
        
        console.log('Using sample articles - no blog posts found');
        return sampleArticles;
    }, [pages]);

    // Get all unique categories
    const allCategories = [...new Set(articles.flatMap(article => article.categories))];
    const categoryFilters = ['Frontend', 'JavaScript', 'Programming', 'React', 'TypeScript', 'Web Development'];

    useEffect(() => {
        let filtered = articles;

        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(article =>
                article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                article.categories.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }

        // Filter by category
        if (selectedCategory) {
            filtered = filtered.filter(article =>
                article.categories.includes(selectedCategory)
            );
        }

        setFilteredArticles(filtered);
        setIsLoading(false);
    }, [searchTerm, selectedCategory, articles]);

    // Initial load effect
    useEffect(() => {
        if (articles.length > 0 && filteredArticles.length === 0) {
            setFilteredArticles(articles);
            setIsLoading(false);
        }
    }, [articles]);

    const getCognitiveLoadColor = (load) => {
        switch (load) {
            case 'Light': return 'var(--color-success)';
            case 'Moderate': return 'var(--color-warning)';
            case 'Heavy': return 'var(--color-error)';
            default: return 'var(--color-secondary)';
        }
    };

    return (
        <div className="articles-page">
            <div className="articles-hero">
                <div className="container">
                    <div className="articles-hero-content">
                        <h1 className="articles-hero-title">Articles & Insights</h1>
                        <p className="articles-hero-subtitle">
                            Sharing thoughts, tutorials, and deep dives on software engineering, data science, and
                            emerging technologies.
                        </p>
                        
                        <div className="articles-search">
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="search-input"
                            />
                        </div>

                        <div className="articles-filters">
                            <button
                                className={`filter-btn ${selectedCategory === '' ? 'active' : ''}`}
                                onClick={() => setSelectedCategory('')}
                            >
                                All
                            </button>
                            {categoryFilters.map(category => (
                                <button
                                    key={category}
                                    className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="articles-content">
                <div className="container">
                    {isLoading ? (
                        <div className="loading-state">
                            <div className="loading-spinner"></div>
                            <p>Loading articles...</p>
                        </div>
                    ) : (
                        <>
                            <div className="articles-grid">
                                {filteredArticles.map((article) => (
                            <article key={article.id} className="article-card">
                                <div className="article-image">
                                    <img src={withPrefix(article.image)} alt={article.title} loading="lazy" />
                                    <div className="article-categories">
                                        {article.categories.slice(0, 2).map(category => (
                                            <span key={category} className="category-tag">
                                                {category}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="article-content">
                                    <h3 className="article-title">
                                        <a href={withPrefix(article.url)}>{article.title}</a>
                                    </h3>
                                    <p className="article-excerpt">{article.excerpt}</p>
                                         <div className="article-meta">
                                    <div className="meta-left">
                                        <span className="article-read-time">⏱️ {article.readTime}</span>
                                        <span 
                                            className="cognitive-load"
                                            style={{ color: getCognitiveLoadColor(article.cognitiveLoad) }}
                                        >
                                            🧠 {article.cognitiveLoad}
                                        </span>
                                    </div>
                                    <time className="article-date">
                                        {moment(article.date).format('MMM DD, YYYY')}
                                    </time>
                                </div>
                                
                                <a href={withPrefix(article.url)} className="read-article-btn">
                                    Read Article
                                </a>
                                </div>
                            </article>
                        ))}
                            </div>

                            {filteredArticles.length === 0 && (
                                <div className="no-articles">
                                    <h3>No articles found</h3>
                                    <p>Try adjusting your search terms or filters.</p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
