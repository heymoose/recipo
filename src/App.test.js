import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Layout from './hoc/Layout/Layout';

describe('App', () => {
    let wrapper;
    beforeEach(() => (wrapper = shallow(<App />)));

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should render a <Layout /> higher order component', () => {
        expect(wrapper.containsMatchingElement(<Layout />)).toEqual(true);
    });
});
