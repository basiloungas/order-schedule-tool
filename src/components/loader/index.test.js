
import React from 'react';
import {shallow} from 'enzyme';
import Component from './index';

describe('components > Loader', () => {
  test('renders the essentials', () => {
    const wrapper = shallow(<Component />);
    expect(wrapper).toMatchSnapshot();
  });

  test('accepts size prop', () => {
    let wrapper = shallow(<Component size='small' />);
    expect(wrapper).toMatchSnapshot('small size');

    wrapper = shallow(<Component size='medium' />);
    expect(wrapper).toMatchSnapshot('medium size');

    wrapper = shallow(<Component size='big' />);
    expect(wrapper).toMatchSnapshot('big size');

    wrapper = shallow(<Component size='huge' />);
    expect(wrapper).toMatchSnapshot('huge size');
  });

  test('accepts color prop', () => {
    let wrapper = shallow(<Component color='pink' />);
    expect(wrapper).toMatchSnapshot('pink color');

    wrapper = shallow(<Component color='#eee' />);
    expect(wrapper).toMatchSnapshot('custom color');
  });
});
