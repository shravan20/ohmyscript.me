import React from 'react';
import _ from 'lodash';

import components, { Layout } from '../components/index';
import HomePage from './home';

export default function Advanced(props) {
    // Check if this is the homepage
    const isHomePage = props.page?.__metadata?.urlPath === '/';
    
    if (isHomePage) {
        return <HomePage {...props} />;
    }

    // For other advanced pages, use the original section-based layout
    return (
        <Layout {...props}>
            {!props.page?.frontmatter?.hide_title && (
                <header className="page-header">
                    <div className="container">
                        <h1 className="page-title">{props.page?.frontmatter?.title}</h1>
                    </div>
                </header>
            )}
            
            <div className="page-content">
                {props.page?.frontmatter?.sections?.map((section, index) => {
                    const componentName = _.upperFirst(_.camelCase(section.type));
                    const Component = components[componentName];
                    
                    if (Component) {
                        return (
                            <Component 
                                key={index} 
                                {...props} 
                                section={section} 
                            />
                        );
                    }
                    return null;
                })}
            </div>
        </Layout>
    );
}
