import React from 'react';
import {
  Col,
  Panel,
  Button,
  Label,
} from 'react-bootstrap';

import {SmallLoader} from '../../../../../loader';

import './style.css';

// TODO: add proper i18n currency formatting
export const moneyFormatter = (string) => `£${parseFloat(string).toFixed(2)}`;

export default (props) => {
  const {
    data,
    shopper,
    markAsDelivered
  } = props;

  const isLoading = data.isLoading;
  const isDelivered = !!data.delivered;
  const itemsCount = data.line_items.length
  const totalItemsCount = data.line_items.reduce((acc, item) => acc+= item.quantity, 0)
  const buttonText = isLoading ? 'Saving...' : 'Deliver';

  return (
    <li className="order-item">
      <Col xs={12} sm={6} md={4}>
        <Panel header={`Order: ${data.id}`} bsStyle={isDelivered ? 'success' : 'warning'}>
          <p><b>Shopper</b>: {shopper.name}</p>
          <p><b>Customer</b>: {data.customer.name}</p>
          <p><b>Address</b>: {data.address.postcode}</p>
          <p><b>Items</b>: {itemsCount} unique / {totalItemsCount} total</p>
          <p><b>Cost</b>: {moneyFormatter(data.predicted_cost)}</p>
          <p><b>Status</b>:
            {isDelivered
              ? <Label bsStyle="success">Delivered</Label>
              : <Label bsStyle="warning">NOT delivered</Label>
            }
          </p>
          <Button
            className="center-block order-item__button"
            bsSize="lg"
            bsStyle={isDelivered ? 'default' : 'success'}
            onClick={() => markAsDelivered(data.id)}
            disabled={isDelivered || isLoading}
          >
            {buttonText}
            { isLoading ? <SmallLoader className="asds" /> : null }
          </Button>
        </Panel>
      </Col>
    </li>
  );
}
