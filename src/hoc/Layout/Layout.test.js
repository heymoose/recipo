import React from 'react';
import { shallow } from 'enzyme';
import Layout from './Layout';

describe('Layout', () => {
    let wrapper;
    beforeEach(() => (wrapper = shallow(<Layout />)));

    it('should render a <header />', () => {
        expect(wrapper.find('header').length).toEqual(1);
    });

    it('should render a <main />', () => {
        expect(wrapper.find('main').length).toEqual(1);
    });

    it('should render a <aside />', () => {
        expect(wrapper.find('aside').length).toEqual(1);
    });

    it('should render a <footer />', () => {
        expect(wrapper.find('footer').length).toEqual(1);
    });
});
