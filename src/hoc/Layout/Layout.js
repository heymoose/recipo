import React, { Component } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import style from './Layout.module.scss';

// Icon credit
/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 		    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */

class Layout extends Component {
    render() {
        return (
            <div className={style.Layout}>
                <Toolbar className={style.Header} />
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