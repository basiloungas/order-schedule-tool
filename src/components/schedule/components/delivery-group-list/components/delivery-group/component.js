import React from 'react';
import {
  Row,
  Panel,
} from 'react-bootstrap';

import OrderList from '../../../order-list';

import './style.css';

// TODO: Specify class per supermarkers
export default ({data, store, timeslotId}) => (
  <li className="delivery-group">
    <Panel header={`${store.supplier} @ ${store.name}`}>
      <Row>
        <OrderList timeslotId={timeslotId} deliveryGroupId={data.id} list={data.orders} />
      </Row>
    </Panel>
  </li>
);
