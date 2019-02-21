import React from 'react';
import { shallow } from 'enzyme';
import Toolbar from './Toolbar';

describe('Toolbar', () => {
    let wrapper;
    beforeEach(() => (wrapper = shallow(<Toolbar />)));

    it('should render a <header />', () => {
        expect(wrapper.find('header').length).toEqual(1);
    });
});
