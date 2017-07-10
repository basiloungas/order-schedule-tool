import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as Actions from './actions';

describe('reducers > schedule > actions', () => {
  let markAsDeliveredMock;
  let apiClient;
  let middlewares;
  let mockStore;
  let store;

  beforeEach(() => {
    markAsDeliveredMock = jest.fn();
    apiClient = {markAsDelivered: markAsDeliveredMock};
    middlewares = [thunk.withExtraArgument({apiClient})];
    mockStore = configureMockStore(middlewares);
    store = mockStore({})
  });

  test('markAsDelivered Action', () => {
    const ids = {};
    const apiResult = {koko: 'lala'};

    const mockResult = new Promise((resolve, reject) => {
      resolve(apiResult);
    });

    markAsDeliveredMock.mockReturnValueOnce(mockResult);

    const expectedActions = [
      Actions.markAsDeliveredStart(ids),
      Actions.markAsDeliveredSuccess(apiResult, ids),
    ]

    return store
      .dispatch(Actions.markAsDelivered(ids))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      });
  });
});
