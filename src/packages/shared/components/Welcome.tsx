import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Jumbotron>
      <Row>
        <Col sm={2} lg={1}>
          <FontAwesomeIcon icon='chalkboard-teacher' size='2x' />
        </Col>
        <Col sm={10} lg={11}>
          <h3>Remote Education Collab</h3>
        </Col>
      </Row>
      <Row>
        <p className='lead'>
          Remote Education Collab is a portal used by Students and Teachers to collaborate remotely, features like video
          conferencing and desktop sharing will be part of it. This app is being developed.
        </p>
      </Row>
    </Jumbotron>
  );
};
export default Welcome;
