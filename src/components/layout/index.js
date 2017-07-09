import React from 'react';
import Header from './components/header';
import Content from './components/content';

export default (props) => (
  <main>
    <Header />
    <Content>{props.children}</Content>
  </main>
);
