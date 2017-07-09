import React from 'react';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

import './style.css';

export default (props) => (
  <Grid className="main-content">
    <Row>
      <Col xs={12}>{props.children}</Col>
    </Row>
  </Grid>
);
