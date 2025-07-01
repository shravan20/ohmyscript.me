import React from 'react';
import _ from 'lodash';
import { sourcebitDataClient } from 'sourcebit-target-next';
import { withRemoteDataUpdates } from 'sourcebit-target-next/with-remote-data-updates';
import { Layout, ArticlesPage } from '../components/index';

function Blog(props) {
    console.log('Blog component props:', props);
    // Filter pages to get only blog posts (from /posts path)
    const allPages = props.pages || [];
    console.log('All pages:', allPages);
    const blogPosts = allPages.filter(page => {
        const urlPath = _.get(page, '__metadata.urlPath', '');
        const layout = _.get(page, 'frontmatter.layout', '');
        return urlPath.startsWith('/posts/') && layout === 'post';
    });
    console.log('Filtered blog posts:', blogPosts);
    
    // Sort posts by date (newest first)
    const sortedPosts = _.orderBy(blogPosts, ['frontmatter.date'], ['desc']);
    console.log('Sorted posts:', sortedPosts);
    
    return (
        <Layout page={{ 
            __metadata: { urlPath: '/blog' },
            title: 'Articles',
            excerpt: 'Articles and insights on software engineering, data science, and emerging technologies'
        }} {...props}>
            <ArticlesPage pages={sortedPosts} />
        </Layout>
    );
}

export async function getStaticProps() {
    console.log('Blog page getStaticProps');
    try {
        // Get all pages data
        const props = await sourcebitDataClient.getStaticPropsForPageAtPath('/');
        console.log('Received props from sourcebit:', props);
        console.log('Pages array:', props.pages);
        return { props };
    } catch (error) {
        console.error('Error loading blog data:', error);
        // Fallback to empty data if there's an issue
        return {
            props: {
                pages: []
            }
        };
    }
}

export default withRemoteDataUpdates(Blog);
