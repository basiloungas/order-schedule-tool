import {
  ActionTypes as TopLevelActionTypes
} from '../actions';

export const defaultState = {
  isLoading: false,
  data: null,
  error: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case TopLevelActionTypes.FETCH_SCHEDULE_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case TopLevelActionTypes.FETCH_SCHEDULE_SUCCESS:
      return {
        isLoading: false,
        data: action.payload.hours,
        error: null,
      };
    case TopLevelActionTypes.FETCH_SCHEDULE_FAIL:
      return {
        isLoading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
