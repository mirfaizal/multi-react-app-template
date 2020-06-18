import React, { Component } from "react";
import { } from "@fortawesome/react-fontawesome";
import contentData from "../utils/contentData";
import { Card, Button, Row, Col } from "react-bootstrap";
import { } from '@fortawesome/fontawesome-free-solid';
//import Styles from './Content.scss';

const Content = () => {
  return (
    <div className="next-steps my-5" >
      <Row className="d-flex justify-content-between">
        {contentData.map((data, i) => (
          <Col key={i} md={4}>
            <Card border="dark" style={{ width: '18rem', height: '12rem' }}>
              {/* <Card.Header>{data.title}</Card.Header> */}
              <Card.Body>
                <Card.Title> {data.title}</Card.Title>
                <Card.Text>{data.description}</Card.Text>
                <Card.Link href={data.link}>Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div >
  );

}

export default Content;
