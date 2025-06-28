import React from 'react';
import moment from 'moment-strftime';
import { withPrefix, getPages } from '../utils';

export default function Articles({ pages }) {
    // Get blog posts from pages data
    const blogPosts = pages ? getPages(pages, '/posts') : [];
    
    // Use dynamic content if available, otherwise fallback to sample
    const articles = blogPosts.length > 0 ? blogPosts.slice(0, 3).map((post, index) => ({
        id: index + 1,
        title: post.frontmatter.title,
        excerpt: post.frontmatter.excerpt || post.frontmatter.subtitle || 'No excerpt available',
        image: post.frontmatter.thumb_image || `/images/${index + 4}.jpg`,
        date: post.frontmatter.date,
        readTime: post.frontmatter.read_time || "5 min read",
        url: post.url
    })) : [
        {
            id: 1,
            title: "DevOps Best Practices for Modern Development",
            excerpt: "Explore essential DevOps practices that can streamline your development workflow and improve deployment efficiency.",
            image: "/images/4.jpg",
            date: "2024-01-15",
            readTime: "5 min read",
            url: "/articles/devops-best-practices"
        },
        {
            id: 2,
            title: "Open Source Contribution Guide",
            excerpt: "A comprehensive guide to getting started with open source contributions and making meaningful impact.",
            image: "/images/5.jpg",
            date: "2024-01-10",
            readTime: "8 min read",
            url: "/articles/open-source-guide"
        },
        {
            id: 3,
            title: "React with TypeScript: A Complete Guide",
            excerpt: "Learn how to build robust React applications with TypeScript for better code quality and developer experience.",
            image: "/images/6.jpg",
            date: "2024-01-05",
            readTime: "12 min read",
            url: "/articles/react-typescript-guide"
        }
    ];

    return (
        <section className="articles" id="articles">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Latest Articles</h2>
                    <p className="section-subtitle">
                        Thoughts, tutorials, and insights from my journey
                    </p>
                </div>
                <div className="articles-grid">
                    {articles.map((article) => (
                        <article key={article.id} className="article-card">
                            <div className="article-image">
                                <img src={withPrefix(article.image)} alt={article.title} />
                            </div>
                            <div className="article-content">
                                <div className="article-meta">
                                    <time className="article-date">
                                        {moment(article.date).format('MMM DD, YYYY')}
                                    </time>
                                    <span className="article-read-time">{article.readTime}</span>
                                </div>
                                <h3 className="article-title">
                                    <a href={article.url}>{article.title}</a>
                                </h3>
                                <p className="article-excerpt">{article.excerpt}</p>
                                <a href={article.url} className="article-link">Read More</a>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="articles-footer">
                    <a href="/blog" className="btn btn-outline">View All Articles</a>
                </div>
            </div>
        </section>
    );
}
