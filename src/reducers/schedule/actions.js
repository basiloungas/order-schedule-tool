export const MARK_AS_DELIVERED_START = 'MARK_AS_DELIVERED_START';
export const MARK_AS_DELIVERED_SUCCESS = 'MARK_AS_DELIVERED_SUCCESS';
export const MARK_AS_DELIVERED_FAIL = 'MARK_AS_DELIVERED_FAIL';

export const ActionTypes = {
  MARK_AS_DELIVERED_START,
  MARK_AS_DELIVERED_SUCCESS,
  MARK_AS_DELIVERED_FAIL,
};

export const markAsDelivered = (ids) => {
  return (dispatch, getState, {apiClient}) => {
    dispatch(markAsDeliveredStart(ids));

    return apiClient
      .markAsDelivered(ids)
      .then(data => dispatch(markAsDeliveredSuccess(data, ids)))
      .catch(error => dispatch(markAsDeliveredFail(error, ids)));
  }
};

export const markAsDeliveredStart = (ids) => ({
  type: MARK_AS_DELIVERED_START,
  payload: ids,
});

export const markAsDeliveredSuccess = (result, ids) => ({
  type: MARK_AS_DELIVERED_SUCCESS,
  payload: {
    result,
    ids,
  }
});

export const markAsDeliveredFail = (error, ids) => ({
  type: MARK_AS_DELIVERED_FAIL,
  payload: {
    error,
    ids,
  },
  error: true,
});
