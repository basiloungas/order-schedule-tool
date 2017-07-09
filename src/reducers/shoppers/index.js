import {
  ActionTypes as TopLevelActionTypes
} from '../actions';

export const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case TopLevelActionTypes.FETCH_SCHEDULE_SUCCESS:
      return [
        ...action.payload.shoppers
      ];
    case TopLevelActionTypes.FETCH_SCHEDULE_FAIL:
      return [
        ...defaultState
      ];
    default:
      return state;
  }
};
