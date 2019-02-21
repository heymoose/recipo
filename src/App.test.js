import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Layout from './hoc/Layout/Layout';

describe('App', () => {
    let wrapper;
    beforeEach(() => (wrapper = shallow(<App />)));

    it('should render a <Layout /> higher order component', () => {
        expect(wrapper.find('Layout').length).toEqual(1);
    });
});
