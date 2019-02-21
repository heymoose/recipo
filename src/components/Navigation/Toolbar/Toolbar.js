import React from 'react';
import Icon from '../../../icons';
import style from './Toolbar.module.css';

const toolbar = props => {
    const toolbarStyles = [props.className, style.Toolbar].join(' ');

    return (
        <header className={toolbarStyles}>
            <a className={style.Icon} href="/">
                <Icon iconName='forkandknife' width={'2rem'} fill={'#fff'} />
            </a>
        </header>
    );
};

export default toolbar;