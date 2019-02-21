import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';
import ButtonRibbon from '../../components/UI/ButtonRibbon/ButtonRibbon';
import style from './RecipeBuilder.module.css';

class RecipeBuilder extends Component {
    render() {
        return (
            <div className={style.RecipeBuilder}>
                <ButtonRibbon />
                <Input elementType='input' elementConfig={{ type: 'text', placeholder: 'Enter ingredient' }} />
                <button>Add</button>
            </div>
        );
    }
}

export default RecipeBuilder;