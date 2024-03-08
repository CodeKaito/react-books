import React from "react";
import Col from 'react-bootstrap/Col';
import { Card } from "react-bootstrap";

export default function BookCard({ book }) {
  const { title, img, price, category } = book;
  return (
    <Col>
      <Card
        style={{
          width: "100%", // Use 100% width of the column
        }}
      >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{category}</Card.Text>
          <Card.Text>{`Price: $${price}`}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}