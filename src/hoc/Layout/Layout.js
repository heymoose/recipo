import React, { Component } from 'react';
import style from './Layout.module.scss';

class Layout extends Component {
    render() {
        return (
            <div className={style.Layout}>
                <header className={style.Header}>header</header>
                <aside className={style.Sidebar}>sidebar</aside>
                <main className={style.Main}>
                    {this.props.children}
                </main>
                <footer className={style.Footer}>footer</footer>
            </div>
        );
    }
}

export default Layout;