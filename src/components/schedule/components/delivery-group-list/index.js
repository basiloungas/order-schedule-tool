import React from 'react';

import DeliveryGroup from './components/delivery-group';
import EmptyView from './components/empty-view';

import './style.css';

export default ({list, timeslotId}) => {
  const content = list.map(item => <DeliveryGroup key={item.id} timeslotId={timeslotId} data={item} />)
  return (
    <ul className="delivery-group-list">
      { list.length ? content : <EmptyView /> }
    </ul>
  );
}
