import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import RecipeBuilder from './containers/RecipeBuilder/RecipeBuilder';
import style from './App.module.css';

class App extends Component {
    render() {
        return (
            <div className={style.App}>
                <Layout>
                    <RecipeBuilder />
                </Layout>
            </div>
        );
    }
}

export default App;
