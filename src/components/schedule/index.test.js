
import React from 'react';
import {shallow} from 'enzyme';
import configureStore from 'redux-mock-store';

import EnhancedComponent from './index';

describe('components > Schedule > Container', () => {
  let store;
  let wrapper;

  const initialState = {
    schedule: {
      isLoading: false,
      data: [],
      error: null,
    },
  };
  const mockStore = configureStore();
  const setup = (data = initialState) => {
    store = mockStore(data)
    wrapper = shallow(<EnhancedComponent store={store} /> )
  }

  beforeEach(()=>{
    setup();
  })

  test('provides props', () => {
    expect(wrapper.prop('isLoading')).toEqual(initialState.schedule.isLoading);
    expect(wrapper.prop('data')).toEqual(initialState.schedule.data);
    expect(wrapper.prop('error')).toEqual(initialState.schedule.error);
    expect(typeof wrapper.prop('fetchSchedule')).toBe('function');
  });

  test('renders the loader when "isLoading"', () => {
    setup({
      schedule: {
        isLoading: false,
        data: [],
        error: null,
      },
    });

    expect(wrapper).toMatchSnapshot();
  });

  test('renders the loader when "data" is null', () => {
    setup({
      schedule: {
        isLoading: false,
        data: null,
        error: null,
      },
    });

    expect(wrapper).toMatchSnapshot();
  });

  test('renders the loader when "data" is null', () => {
    setup({
      schedule: {
        isLoading: false,
        data: null,
        error: null,
      },
    });

    expect(wrapper).toMatchSnapshot();
  });
});
