import React from 'react';
import style from './Footer.module.scss';

const footer = props => {
    const footerStyles = [props.className].join(' ');

    return (
        <footer className={footerStyles}>
            <nav>
                <ul className={style.FooterItems}>
                    <li className={style.FooterLink}>
                        <a href="https://marcnovak.com">marcnovak.com</a>
                    </li>
                    <li className={style.FooterLink}>
                        <a href="https://github.com/heymoose/recipo">github</a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default footer