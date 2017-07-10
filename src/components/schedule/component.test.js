
import React from 'react';
import {shallow} from 'enzyme';
import Component from './component';

describe('components > Schedule > Component', () => {
  test('renders the essentials', () => {
    const wrapper = shallow(<Component data={[]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
