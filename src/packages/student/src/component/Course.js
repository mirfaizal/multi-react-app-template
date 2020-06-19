import React from 'react';
import courseData from '../../../shared/utils/courseData';
import { Card, Button, Row, Col } from "react-bootstrap";
import './Cource.scss';
import { } from "@fortawesome/react-fontawesome";
import { } from '@fortawesome/fontawesome-free-solid';

const Course = () => {
  return (
    <div style={{paddingBottom : '50px'}}>
      <Row  >
        {courseData.map((data, i) => (
          
          <Col key={i} md={12} style={{paddingTop: '20px'}}>
            <Card >
              {/* <Card.Header>{data.title}</Card.Header> */}
              <Card.Body>
                <Card.Title> {data.courseName}</Card.Title>
                <Card.Text>{data.courseDesc}</Card.Text>
                <Card.Link href={data.courseLink}>Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
         
        ))}
       </Row>
    </div >
  );
};

export default Course;