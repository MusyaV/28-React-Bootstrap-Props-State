import React from 'react'
import { Card, Col, Container, ListGroup, ListGroupItem, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'

const Blog = (props) => {
  const block = props.arrCardsBlock.map((item) => {
    return (
      <Card className='mt-4'>
        <Row>
          <Col md='4' >
            <img
              width={150}
              height={150}
              className='m-3'
              src={item.img}
            />
          </Col>
          <Col md='8'>
            <Card.Text className='mt-3 me-2'>
              <h5>Blog post {item.id}</h5>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero recusandae esse praesentium cum quasi unde fugiat in,
                expedita mollitia? Distinctio, dolor.</p>
            </Card.Text>
          </Col>
        </Row>
      </Card>
    )
  })
  return (
    <>
      <Container>
        <Row>
          <Col md='9'>
            {block}
          </Col>
          <Col md='3'>
            <h5 className='mt-4 text-center'>Categories</h5>
            <Card>
              <ListGroup variant='flush'>
                <ListGroupItem>Lorem</ListGroupItem>
                <ListGroupItem>Ipsum</ListGroupItem>
                <ListGroupItem>Dolor</ListGroupItem>
                <ListGroupItem>Consectetur</ListGroupItem>
                <ListGroupItem>Mollitia</ListGroupItem>
                <ListGroupItem>Distinctio</ListGroupItem>
              </ListGroup>
            </Card>
            <Card className='mt-3 bg-light'>
              <Card.Body>
                <Card.Title>Side widget</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, sunt! Nam expedita provident perspiciatis quas hic repellendus repudiandae nulla, fugit sapiente. Quasi libero sequi incidunt laboriosam molestias, esse sapiente doloremque.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Blog;