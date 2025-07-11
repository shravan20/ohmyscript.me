import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {Layout} from '../components/index';
import {htmlToReact, withPrefix, markdownify} from '../utils';

export default class Post extends React.Component {
    generateTableOfContents() {
        // Extract headings from markdown content for TOC
        const content = _.get(this.props, 'page.markdown', '');
        const headings = [];
        const headingRegex = /^(#{2,4})\s+(.+)$/gm;
        let match;
        
        while ((match = headingRegex.exec(content)) !== null) {
            const level = match[1].length;
            const text = match[2].trim();
            const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
            headings.push({ level, text, id });
        }
        
        return headings;
    }

    render() {
        const toc = this.generateTableOfContents();
        const tags = _.get(this.props, 'page.frontmatter.tags', []);
        const readTime = Math.ceil(_.get(this.props, 'page.markdown', '').split(' ').length / 200);
        
        return (
            <Layout {...this.props}>
                <main className="post-detail-page">
                    <div className="post-detail-container">
                        <div className="post-main">
                            {_.get(this.props, 'page.frontmatter.content_img_path', null) && (
                            <div className="post-hero-image">
                                <img src={withPrefix(_.get(this.props, 'page.frontmatter.content_img_path', null))} 
                                     alt={_.get(this.props, 'page.frontmatter.content_img_alt', null)} />
                            </div>
                            )}
                            
                            <div className="post-tags">
                                <span className="post-tag">React</span>
                                <span className="post-tag">Frontend</span>
                                <span className="post-tag">JavaScript</span>
                            </div>
                            
                            <h1 className="post-title">{_.get(this.props, 'page.frontmatter.title', null)}</h1>
                            
                            <div className="post-meta">
                                <span><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{display: 'inline', marginRight: '4px'}}><path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"/></svg> {readTime} min read</span>
                                <span className="dot">•</span>
                                <span className="cognitive-load"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{display: 'inline', marginRight: '4px'}}><path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"/></svg> Cognitive Load: Moderate</span>
                                <span className="dot">•</span>
                                <time className="post-date">
                                    {moment(_.get(this.props, 'page.frontmatter.date', null)).strftime('%b %d, %Y')}
                                </time>
                            </div>
                            
                            <article className="post-content">
                                {markdownify(_.get(this.props, 'page.markdown', null))}
                            </article>
                        </div>
                        
                        <aside className="post-sidebar">
                            {toc.length > 0 && (
                            <div className="sidebar-card">
                                <h3 className="sidebar-title">Table of Contents</h3>
                                <ul className="sidebar-toc">
                                    {toc.map((item, index) => (
                                        <li key={index} className={`toc-level-${item.level}`}>
                                            <a href={`#${item.id}`}>{item.text}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            )}
                            
                            <div className="sidebar-card">
                                <h3 className="sidebar-title">Share this Article</h3>
                                <button className="share-btn">
                                    🔗 Share
                                </button>
                            </div>
                        </aside>
                    </div>
                </main>
            </Layout>
        );
    }
}
