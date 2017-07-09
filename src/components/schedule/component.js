import React from 'react';

import TimeslotList from './components/timeslot-list';

import './style.css';

export default (props) => (
  <div className="schedule">
    <TimeslotList list={props.data} />
  </div>
);
