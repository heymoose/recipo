import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import RecipeBuilder from './containers/RecipeBuilder/RecipeBuilder';

class App extends Component {
    render() {
        return (
            <>
                <Layout>
                    <RecipeBuilder />
                </Layout>
            </>
        );
    }
}

export default App;
