import React from 'react';
import _ from 'lodash';
import { sourcebitDataClient } from 'sourcebit-target-next';
import { withRemoteDataUpdates } from 'sourcebit-target-next/with-remote-data-updates';

import pageLayouts from '../layouts';


class Page extends React.Component {
    render() {
        // every page can have different layout, pick the layout based
        // on the model of the page (_type in Sanity CMS)
        const componentName = _.get(this.props, 'page.__metadata.modelName');
        const PageLayout = pageLayouts[componentName];
        return <PageLayout {...this.props}/>;
    }
}

export async function getStaticPaths() {
    console.log('=== Page [...slug].js getStaticPaths ===');
    
    // Get paths from sourcebit
    const paths = await sourcebitDataClient.getStaticPaths();
    console.log('All paths from sourcebitDataClient:', paths);
    
    // Filter out the root page as it has its own page file `src/pages/index.js`
    const filteredPaths = _.reject(paths, path => path === '/');
    console.log('Filtered paths (excluding root):', filteredPaths);
    
    // Check specifically for projects and blog paths
    const hasProjects = paths.includes('/projects');
    const hasBlog = paths.includes('/blog');
    console.log('Has /projects path:', hasProjects);
    console.log('Has /blog path:', hasBlog);
    
    return { paths: filteredPaths, fallback: false };
}

export async function getStaticProps({ params }) {
    console.log('Page [...slug].js getStaticProps, params: ', params);
    const pagePath = '/' + params.slug.join('/');
    const props = await sourcebitDataClient.getStaticPropsForPageAtPath(pagePath);
    return { props };
}

export default withRemoteDataUpdates(Page);
