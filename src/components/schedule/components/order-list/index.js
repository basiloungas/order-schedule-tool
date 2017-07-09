import React from 'react';

import Order from './components/order';

import './style.css';

export default ({timeslotId, deliveryGroupId, list}) => {
  const content = list.map(item => <Order key={item.id} timeslotId={timeslotId} deliveryGroupId={deliveryGroupId} data={item} />)

  return (
    <ul className="order-list">
      { list.length ? content : 'No orders yet' }
    </ul>
  );
}
