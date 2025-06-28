import React from 'react';
import { Layout, Hero, TechStack, Projects, Articles, Newsletter } from '../components';

export default function HomePage(props) {
    return (
        <Layout {...props}>
            <Hero data={props.data} />
            <TechStack />
            <Projects />
            <Articles pages={props.pages} />
            <Newsletter />
        </Layout>
    );
}
