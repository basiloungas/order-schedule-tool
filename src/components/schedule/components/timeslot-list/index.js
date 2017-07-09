import React from 'react';

import Timeslot from './components/timeslot';

import './style.css';

export default ({list, data}) => {
  return (
    <ul className="timeslot-list">
      { list.map((data) => <Timeslot key={data.id} data={data} />) }
    </ul>
  );
}
