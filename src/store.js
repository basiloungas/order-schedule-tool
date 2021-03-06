import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function buildStore(apiClient) {
  return createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(thunk.withExtraArgument({apiClient}))
    ),
  );
}
