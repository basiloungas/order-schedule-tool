import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export default function buildStore() {
export default function buildStore(apiClient) {
  return createStore(
    reducers,
    applyMiddleware(thunk.withExtraArgument({apiClient}))
  );
}
