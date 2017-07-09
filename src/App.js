import React from 'react';
import {Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import buildStore from './store';
import Api from './lib/api';
import Layout from './components/layout';

const ApiClient = new Api();
const store = buildStore(ApiClient);

export const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
);

export default () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Route path="/" component={App}/>
      </Layout>
    </Router>
  </Provider>
);
