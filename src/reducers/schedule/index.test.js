import reducer from './index'
import * as TopLevelActions from '../actions';
import * as Actions from './actions';

describe('reducers > schedule', () => {
  const ids = {
    timeslotId: 'timeslotId',
    deliveryGroupId: 'deliveryGroupId',
    orderId: 'orderId1',
  };

  const initialData = {
    data: [
      {
        id: ids.timeslotId,
        delivery_runs: [
          {
            id: ids.deliveryGroupId,
            orders:[
              {
                id: ids.orderId,
                isLoading: true,
                error: null,
              },
              {
                id: `${ids.orderId}2`,
              }
            ],
          },
        ]
      }
    ]
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isLoading: false,
      data: null,
      error: null,
    })
  })

  it('should handle FETCH_SCHEDULE_START', () => {
    const action = TopLevelActions.fetchScheduleStart();

    expect(reducer(undefined, action))
      .toEqual({
        isLoading: true,
        data: null,
        error: null,
      })
  });

  it('should handle FETCH_SCHEDULE_SUCCESS', () => {
    const payload = {
      hours: {}
    };
    const action = TopLevelActions.fetchScheduleSuccess(payload);

    expect(reducer(undefined, action))
      .toEqual({
        isLoading: false,
        data: payload.hours,
        error: null,
      })
  });

  it('should handle FETCH_SCHEDULE_FAIL', () => {
    const payload = {};
    const action = TopLevelActions.fetchScheduleFail(payload);

    expect(reducer(undefined, action))
      .toEqual({
        isLoading: false,
        data: null,
        error: payload,
      })
  });

  it('should handle MARK_AS_DELIVERED_START', () => {
    const action = Actions.markAsDeliveredStart(ids);
    const newState = reducer(initialData, action);

    expect(newState.data[0].delivery_runs[0].orders[0])
      .toEqual({
         id: 'orderId1',
         isLoading: true,
         error: null,
      });
  });

  it('should handle MARK_AS_DELIVERED_SUCCESS', () => {
    const action = Actions.markAsDeliveredSuccess(true, ids);
    const newState = reducer(initialData, action);

    expect(newState.data[0].delivery_runs[0].orders[0])
      .toEqual({
         id: 'orderId1',
         isLoading: false,
         delivered: true,
         error: null,
      });
  });

  it('should handle MARK_AS_DELIVERED_FAIL', () => {
    const action = Actions.markAsDeliveredFail({}, ids);
    const newState = reducer(initialData, action);

    expect(newState.data[0].delivery_runs[0].orders[0])
      .toEqual({
         id: 'orderId1',
         isLoading: false,
         error: {},
      });
  });
})
