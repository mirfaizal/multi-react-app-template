import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contentData from "../utils/contentData";
import { Card, Button, Row, Col } from "react-bootstrap";
import { } from '@fortawesome/fontawesome-free-solid';

class Content extends Component {
  render() {
    return (
      <div className="next-steps my-5">
        <h2 className="my-5 text-center">What can I do next?</h2>
        <Row className="d-flex justify-content-between">
          {contentData.map((data, i) => (
            <Col key={i} md={4} className="mb-4">
              <Card border="dark" style={{ width: '22rem', height: '12rem' }}>
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
}

export default Content;
