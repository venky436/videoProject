import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';

export const Footer = () => {
  return (
    <div>
      <Container fluid>
        <Row className="d-flex align-items-center justify-content-center p-4 bg-dark mb-2 rounded">
          <Col className="p-5 d-flex justify-content-center">
            <h2 className="text-white">CopyRight &copy; Reserved</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
