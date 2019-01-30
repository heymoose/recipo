import React from 'react';
import { shallow } from 'enzyme';
import Layout from './Layout';

describe('Layout', () => {
    let wrapper;
    beforeEach(() => (wrapper = shallow(<Layout />)));

    it('should render a <main />', () => {
        expect(wrapper.find('main').length).toEqual(1);
    });
});
