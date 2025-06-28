import React from 'react';
import { Layout, Hero, TechStack, StackLife, Projects, Articles, Newsletter } from '../components';

export default function HomePage(props) {
    return (
        <Layout {...props}>
            <Hero data={props.data} />
            <TechStack />
            <StackLife />
            <Projects />
            <Articles pages={props.pages} />
            <Newsletter />
        </Layout>
    );
}
