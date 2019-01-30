import React from 'react';
import { shallow } from 'enzyme';
import RecipeBuilder from './RecipeBuilder';
import Input from '../../components/UI/Input/Input';

describe('RecipeBuilder', () => {
    let wrapper;
    beforeEach(() => (wrapper = shallow(<RecipeBuilder />)));

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should render an input component', () => {
        expect(wrapper.find('input').length).toEqual(1);
    })
});
