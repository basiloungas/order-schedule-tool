
import React from 'react';
import {shallow} from 'enzyme';
import Component from './index';

describe('components > Layout', () => {
  test('renders the essentials', () => {
    const wrapper = shallow(<Component>some content</Component>);
    expect(wrapper).toMatchSnapshot();
  });
});
