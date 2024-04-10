import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function newscard({data}) {
  console.log(data)
  return (
    <Card style={{ width: '17rem' }}>
      <Card.Img variant="top" style={{width:'100%', height:'45%'}} src={data.image ? data.image : "./images/medical.jpeg"} />
      <Card.Body>
        <Card.Title>{data.title.slice(0,20)}...</Card.Title>
        <Card.Text>
          {data.description.slice(0,100)}...
        </Card.Text>
        <Button variant="primary" style={{width:''}}>Read More</Button>
      </Card.Body>
    </Card>
  );
}

export default newscard;