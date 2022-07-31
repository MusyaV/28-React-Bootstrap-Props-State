import React, { Component } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import CarouselBox from '../Components/CarouselBox'

export default class Home extends Component {
  render() {
    const arrCart = [
      'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
    const blogPost = arrCart.map((item) => {
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
}
