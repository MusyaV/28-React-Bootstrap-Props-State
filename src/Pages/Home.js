import React, { Component } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import CarouselBox from '../Components/CarouselBox'

const Home = (props) => {
  const blogPost = props.arrCart.map((item) => {
    return (
      <Col>
        <Card className='border-2 border-warning'>
          <Card.Img variant="top" src={item} />
          <Card.Body className='text-center'>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="warning">About team</Button>
          </Card.Body>
        </Card>
      </Col>
    )
  })
  return (
    <>
      <CarouselBox />
      <Container>
        <h2 className='text-center m-4'>Our team</h2>
        <Row xs={1} sm={1} md={2} lg={3} className="g-4">
          {blogPost}
        </Row>
      </Container>
    </>
  )

}
export default Home;