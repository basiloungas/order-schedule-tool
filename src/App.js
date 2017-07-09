import React from 'react';
import {Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import buildStore from './store';
import Api from './lib/api';
import Layout from './components/layout';
import Schedule from './components/schedule';

import './App.css'

const ApiClient = new Api();
const store = buildStore(ApiClient);

export default () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Route path="/" component={Schedule}/>
      </Layout>
    </Router>
  </Provider>
);
