import React from 'react';
import { shallow } from 'enzyme';
import ManualIngredientAdder from './ManualIngredientAdder';

describe('ManualIngredientAdder', () => {
    let wrapper;
    beforeEach(() => (wrapper = shallow(<ManualIngredientAdder />)));

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });
});
