import React from "react";
import { Card } from "react-bootstrap"; // Import Card from react-bootstrap

export default function BookCard({ book }) {
  const { title, img, price, category } = book; // Use 'book' instead of 'props' and destructure correctly
  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{category}</Card.Text>
        <Card.Text>{`Price: $${price}`}</Card.Text> {/* Format the price */}
      </Card.Body>
    </Card>
  );
}