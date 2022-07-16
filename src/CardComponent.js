import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import image from "";

function CardComponent(props) {
  return (
    <Card style={{ width: '50rem' }}>
      <Card.Img variant="top" style={{ width: '50rem' }} src={props.url} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          <h3>{props.date}</h3>
          {props.explanation}
        </Card.Text>
        <Button variant="danger">Like</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;