import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Flotilla from './../components/Flotilla';
import Scores from "./../components/Scores";

export default (props) => {
  const { flotilla, hits, shots } = props;
  return (
    <Col lg={2} lgOffset={2} md={3} mdOffset={2} sm={12} xs={12}>
      <Row>
        <div className='scoresPanel'>
          <Col md={12} sm={4} xs={12}>
            <Scores hits={hits} shots={shots}/>
          </Col>
          <Col md={12} sm={8} xs={12}>
            <Flotilla flotilla={flotilla}/>
          </Col>
        </div>
      </Row>
    </Col>
  )
}
