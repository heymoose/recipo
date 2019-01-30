import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('Input', () => {
    let wrapper;
    beforeEach(() => (wrapper = shallow(<Input elementType='' />)));

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should render a <label />', () => {
        expect(wrapper.find('label').length).toEqual(1);
    });

    it('should render the label text based on the props', () => {
        wrapper.setProps({ label: 'test' });
        expect(wrapper.find('label').text()).toEqual('test');
    });

    it('should render the default input element if elementType does not equal a valid element name', () => {
        wrapper.setProps({ elementType: 'heyheyhey' });
        expect(wrapper.find('input').length).toEqual(1);
    });

    it('should render an input element if elementType equals "input"', () => {
        wrapper.setProps({ elementType: 'input' });
        expect(wrapper.find('input').length).toEqual(1);
    });

    it('should render a textarea element if elementType equals "textarea"', () => {
        wrapper.setProps({ elementType: 'textarea' });
        expect(wrapper.find('textarea').length).toEqual(1);
    });

    it('should render a select element if elementType equals "select"', () => {
        wrapper.setProps({
            elementType: 'select',
            elementConfig: {
                options: [{
                    value: 'firstOption',
                    displayValue: 'First'
                },
                {
                    value: 'secondOption',
                    displayValue: 'Second'
                },]
            },
        });
        expect(wrapper.find('select').length).toEqual(1);
    });
});
