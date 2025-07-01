import React from 'react';
import {Layout, ArticlesPage} from '../components/index';

export default class Articles extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                <ArticlesPage pages={this.props.pages} />
            </Layout>
        );
    }
}
