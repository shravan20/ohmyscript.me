import React from 'react';
import Head from 'next/head';
import _ from 'lodash';

import { withPrefix, attribute } from '../utils';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, page, data }) {
    const siteTitle = data?.config?.title || 'Shravan Kumar B';
    const pageTitle = page?.frontmatter?.seo?.title || page?.frontmatter?.title;
    const fullTitle = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
    const description = page?.frontmatter?.seo?.description || 'A passionate software developer who loves building innovative solutions and exploring new technologies.';

    return (
        <React.Fragment>
            <Head>
                <title>{fullTitle}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="google" content="notranslate" />
                <meta name="description" content={description} />
                
                {page?.frontmatter?.seo?.robots && (
                    <meta name="robots" content={page.frontmatter.seo.robots.join(',')} />
                )}
                
                {page?.frontmatter?.seo?.extra?.map((meta, index) => {
                    const keyName = meta.keyName || 'name';
                    if (meta.relativeUrl && data?.config?.domain) {
                        const domain = data.config.domain.replace(/\/$/, '');
                        const relUrl = withPrefix(meta.value);
                        const fullUrl = domain + relUrl;
                        return (
                            <meta 
                                key={index} 
                                {...{ [keyName]: meta.name }} 
                                content={fullUrl} 
                            />
                        );
                    }
                    return (
                        <meta 
                            key={index} 
                            {...{ [keyName]: meta.name }} 
                            content={meta.value} 
                        />
                    );
                })}
                
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                
                {data?.config?.favicon && (
                    <link rel="icon" href={withPrefix(data.config.favicon)} />
                )}
            </Head>
            
            <div className="app">
                <Header data={data} page={page} />
                <main className="main">
                    {children}
                </main>
                <Footer data={data} />
            </div>
        </React.Fragment>
    );
}
