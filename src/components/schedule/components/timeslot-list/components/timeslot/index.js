import React from 'react';
import {
  Row,
  Col,
  Panel,
} from 'react-bootstrap';
import moment from 'moment';

import DeliveryGroupList from '../../../delivery-group-list';

import './style.css';

export const dateFormater = (dateString) => moment(dateString).format('h:mm a');

export default ({data}) => {
  return (
    <li className="timeslot-item">
      <Panel header={`Timeslot: ${dateFormater(data.start_time)} - ${dateFormater(data.end_time)}`}>
        <Row>
          <Col xs={12}>
            <div className="timeslot-item__content">
              <DeliveryGroupList list={data.delivery_runs} timeslotId={data.id} />
            </div>
          </Col>
        </Row>
      </Panel>
    </li>
  );
}
