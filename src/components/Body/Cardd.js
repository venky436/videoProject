import React from 'react';
import { Card } from 'react-bootstrap';
import '../Body/Body.css'
import { Rating } from './Rating';
export const Cardd = ({value}) => {
  return (
    <>
      <Card className="car d-block w-100 h-100 p-4">
        <Card.Img src={value.image} className='im'/>
        <Card.Body>
          <Card.Title as="h3">{value.title.slice(0,20)}</Card.Title>
          <hr />
          <Card.Text as="h3">Price : ${value.price}</Card.Text><hr/>
          <Card.Text>
            <Rating rating={value.rating.rate} numRev={value.numReviews}/>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
