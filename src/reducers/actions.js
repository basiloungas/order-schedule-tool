export const FETCH_SCHEDULE_START = 'FETCH_SCHEDULE_START'
export const FETCH_SCHEDULE_SUCCESS = 'FETCH_SCHEDULE_SUCCESS'
export const FETCH_SCHEDULE_FAIL = 'FETCH_SCHEDULE_FAIL'

export const ActionTypes = {
  FETCH_SCHEDULE_START,
  FETCH_SCHEDULE_SUCCESS,
  FETCH_SCHEDULE_FAIL,
};

export const fetchSchedule = () => {
  return (dispatch, getState, {apiClient}) => {
    dispatch(fetchScheduleStart());

    apiClient
      .fetchSchedule()
      .then(data => dispatch(new fetchScheduleSuccess(data)))
      .catch(err => dispatch(new fetchScheduleFail(err)));
  }
};

export const fetchScheduleStart = () => ({
  type: FETCH_SCHEDULE_START,
  payload: null,
});

export const fetchScheduleSuccess = (data) => ({
  type: FETCH_SCHEDULE_SUCCESS,
  payload: data,
});

export const fetchScheduleFail = (error) => ({
  type: FETCH_SCHEDULE_FAIL,
  payload: error,
  error: true,
});
