import {
  ActionTypes as TopLevelActionTypes
} from '../actions';
import {ActionTypes} from './actions';

export const defaultState = {
  isLoading: false,
  data: null,
  error: null,
};

const updateOrder = (state, ids, updater) => {
  const {
    timeslotId,
    deliveryGroupId,
    orderId,
  } = ids;

  // TODO: refactor with splices;
  // TODO: refactor with normalized data;
  return state.map(timeslot => {
    if (timeslot.id === timeslotId) {
      return {
        ...timeslot,
        delivery_runs: timeslot.delivery_runs.map(deliveryGroup => {
          if (deliveryGroup.id === deliveryGroupId) {
            return {
              ...deliveryGroup,
              orders: deliveryGroup.orders.map(order => {
                if (order.id === orderId) {
                  return updater(order);
                }

                return order;
              })
            }
          }

          return deliveryGroup;
        })
      }
    }

    return timeslot;
  });
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.MARK_AS_DELIVERED_START:
      return {
        ...state,
        data: updateOrder(state.data, action.payload, order => {
          return {
            ...order,
            isLoading: true,
            error: null,
          }
        })
      };
    case ActionTypes.MARK_AS_DELIVERED_SUCCESS:
      return {
        ...state,
        data: updateOrder(state.data, action.payload.ids, order => {
          return {
            ...order,
            delivered: true, //TODO: we should get that from the server normally
            isLoading: false,
            error: null,
          }
        })
      };
    case ActionTypes.MARK_AS_DELIVERED_FAIL:
      return {
        ...state,
        data: updateOrder(state.data, action.payload.ids, order => {
          return {
            ...order,
            isLoading: false,
            error: action.payload.error,
          }
        })
      };
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
