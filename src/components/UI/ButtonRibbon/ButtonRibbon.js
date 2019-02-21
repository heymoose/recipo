import React from 'react';
import style from './ButtonRibbon.module.scss';

const buttonRibbon = props => {
    return (
        <div>
            <ul className={style.ButtonList}>
                <li>
                    <button className={style.RibbonButton}>One</button>
                </li>
                <li>
                    <button className={style.RibbonButton}>Two</button>
                </li>
                <li>
                    <button className={style.RibbonButton}>Three</button>
                </li>
                <li>
                    <button className={style.RibbonButton}>Four</button>
                </li>
                <li>
                    <button className={style.RibbonButton}>Five</button>
                </li>
            </ul>
        </div>
    );
}

export default buttonRibbon;