import {createStore} from 'redux';
import reducers from './reducers';

export default function buildStore() {
  return createStore(reducers);
}
