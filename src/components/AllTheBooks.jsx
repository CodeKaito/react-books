import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from './Card';

import fantasy from '../books/fantasy.json';

function AllTheBooks() {
  return (
    <Container>
      <Row>
        {fantasy.map((book) => (
          <Col key={book.asin} xs={12} sm={6} md={4} lg={3}>
            <Card book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AllTheBooks;