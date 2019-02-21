import React from 'react';
import { shallow } from 'enzyme';
import ButtonRibbon from './ButtonRibbon';

describe('ButtonRibbon', () => {
    let wrapper;
    beforeEach(() => (wrapper = shallow(<ButtonRibbon />)));

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });
});
