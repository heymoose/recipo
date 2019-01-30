import React from 'react';
import { shallow } from 'enzyme';
import RecipeBuilder from './RecipeBuilder';

describe('RecipeBuilder', () => {
    let wrapper;
    beforeEach(() => (wrapper = shallow(<RecipeBuilder />)));

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });
});
