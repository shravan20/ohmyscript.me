import React from 'react';
import { Layout, ProjectsPage } from '../components/index';

export default function ProjectsLayout(props) {
    return (
        <Layout {...props}>
            <ProjectsPage />
        </Layout>
    );
}
