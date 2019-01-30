import React from 'react';
import PropTypes from 'prop-types';
import style from './Input.module.css';
import * as logic from './inputLogic';

const input = props => {
    let inputElement = null;
    const inputClasses = [style.InputElement];

    switch (props.elementType) {
        case 'input':
            inputElement = logic.defaultInput(props, inputClasses.join(' '))
            break;
        case 'select':
            inputElement = logic.createSelectInput(props, inputClasses.join(' '))
            break;
        case 'textarea':
            inputElement = logic.createTextAreaInput(props, inputClasses.join(' '))
            break;
        default:
            inputElement = logic.defaultInput(props, inputClasses.join(' '))
    }

    return (
        <div className={style.Input}>
            <label className={style.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

input.propTypes = {
    elementType: PropTypes.string.isRequired
};

export default input;