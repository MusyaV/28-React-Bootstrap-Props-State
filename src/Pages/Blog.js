import React, { Component } from 'react'
import { Card, Col, Container, ListGroup, ListGroupItem, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'

export default class Blog extends Component {
  render() {
    const arrCardsBlock = [
      {
        id: 1,
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAeFBMVEX/twDsAAL4uy//tgD8tQH2sAHxrQL/uQD8oAD/vQD/uwDzTwL6jQLsAAX/vwP+ugL6lQTuIAXvNwX7rQXxVAf1awT1cwX4nQrxWQX3kQfvJwPwQQXyYAX0Zwf+pgP4iwP1ewb2hAX7qgb3mAbwMQb2fgb1dQfySQWCHbgdAAAE6klEQVR4nO2d6XbiOBBGrYGMkJmScNgCBNIsod//Dcc2m8EyyFu6Xfrub5QT3SOrZLlUCv4BzgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoDImVC8IZa3mKjQ/1pl2MWo0nQyfMpmZQltGz2cfz5sPJ9ORMr2f7FRLhIOIxHOIaK0KmuvFUrxqn/yFaBD+aLdawYxedzUm0rbGUuoPl9apr1H3H8WxkysxtMvqr9yap7bGP923pgk/3Xo7ts1Z4ThyVhWz7vqDqJ1c0cIyZUk1IPdxlVA073UEuXHq7oftIdRf5VQJ2jxbgPz9yIFLLyNl6aWelXQlxMADWbSxxDH1UdqVD7LoV36uMf338q58kLXKT1hJGIQsC9TPtVLzCqZ8kGVZeJcOg97IWucewgph0BNZh9yqQU0qqmIvi+5fc6SMw2BlV7xlEW0fVg1q93I/x1tZk4cJS+9rqOIu6+HH6quOKt6yaH6/atDTWuOKt6yZCjK9kzXCIH9Z73eTu4zfBmsOLL6y6H4X2NQKg+xlfWU3gcOKb4N+yKK7zVG9rf0IcpYVZQOhqhsGecuiwU1WA2GQtSw63iKh6VXZFPVI1kpfu2V2DZliKouof+lVr+bboAeyFucJSyZhsDlXDGURfV5XDXrdyJKBryyxvEzu0gybVMVRFu3OXTL9Q7Ou+Mm6bo6qHVX5NuiTLBqeVw161Oh0xVPWedWgv5seVvxk0T7da5Bq3bwqbrJoqpOcYml+t6CKmSw6pJN7HAZbccVL1ilzNHTLBvRcVrI5Gr/hjFpSxUtW+klVf7c1rljJimTcF7VuTRUnWcnmaBwG2xtXnGR96sCMWwqD7GTtTbBr/g2HqayBNNtWVXGSlawbmvqMw10WvetA6ilkFZONhsnZgGb33BnLSk+dqD1kFXG3gk8/2Ye7qLWYyEnWKRmkVj6yP7LiiJhu0aiJaGdw8ZJ1SnuXegZZFh5lHU6fKyqfzvFJlhDT04ew0sefvZRF+1Oegyl3sN5TWeJ8vLCNoMhNlhC/L2kh7sVA/JVF3+c0ZamP+HyfxZpydD1sX/esDn9Z2UzlOChC1hV75t8tB96Ml5B1oSCndHEdW0kdo8ZGF09ZmdO+JSpkeSlLJCfCbv2Kg2JDg4upLJrdju5IvYCshOJTYdlTrE2lirCVdVdVxbw1EhTZyhLDbPkLaVaQ9ezY7zZ74lBqx+KAnsq6JsSnP0xSciGrmPvqdVItcKD8CZ/3BUP0BrKKocV9ZdG6B1RYy8oVra2Z881blnh/LDWm6hyqYy5LzB5syTpBkbssmj9Wglejyu/V7GVFuWKSqnI2JXdZtuLmlY+r8JcltrnK5FINIauAXb6P1fIpfZC1zNdWlpXyKX2QRZ+WcvBVqmP4IEuIheVChbB8+bGOywo2TssA610dpVNHOn/jh9sdFmJlu2sgUJNSY2tpvWGlQ4RHt0Hxy3ppTqmgeM046S7S5UKmGPuocM+nJHHo+OUoMfJt6dJf+41Osa2567vPIV+Ev3tIMxMvU7kv2ZN5THBcvnyzJhEdO/8MpsjQbP57wbi4q1Kp3ehV+42xRoju0ZPx6DLhE8yrK9Hk0+ZhKHmYAgAAAAAAAAAAAAAAAAAAAAAAAAAAf5QecAGmSpC66gMngljXn/4fOkMsq99/A04EvcTVv8CF/wH+K38JOxAibwAAAABJRU5ErkJggg=='
      },
      {
        id: 2,
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABIFBMVEX////3nhzqABv/XwH9///6/////f/+//7/XAD3///qABnoAADoARv8//ztABv///zvAAD5nR75lwDzoB7/YgDtACHqABT3mgD6nB/lAAD/+//3nADuAA/3//flBB33nSP5ZAD5cg37ixj17O/75eT53uD05Ob1//f39ur+8eT1x8L5mJf3aXLoT1bwND/wGyzyanf3mJ7z89v04sP3zZL5umv0rkv3pzj2slf6wnX11qj2wML6fH7sJzn0iIj63bjusEH40tbzyIPuPUv0sLX1pqfwoxT55M7sriby37XuS1Pjamz1qz/yMA/xnJr+hxn+TAv1wWrxLhv52+XtfoL3Rh3+1Zb7V2nyurf1qizs1aD115D92rjyq7j6hxbnqKuBGzaTAAAKL0lEQVR4nO2c+1cTSRbHuztV1elHdSfddHdCupMIogEFhEQRHVZFHgsj+NiZdWZ2x/3//4u9lcgqkA65OVZg59zPD56jnpyTb+67XoZBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEMRfGM64Y4dSMoMxzpnBuS1Dgxs2L/tEaDApZWirTzCbDZGGEAb8i4D/vVtIsShsUGYsLt+/f39l5cGyAMWMCxaGcvxHwtCQxmII+h72er3V1VX4s+Ag0rZlUdw1gYZwHOfB2qPH6xubVprnabK5sf5ka20ZzAL2GEcIMOZs9wdPn+106i3A7Ow8333R76kfRt41ifzlT3up5zXT1E2DwE2B3PO8YONva06pmxavdneiKGuZ36g3osh8PeiDae8IXIacy7UnoCZ1rau4ILXm/fRGgu8VF6YMJYNw5cXJ0yzLzLFkkbm/LZWV5XgHmCO27Sxv7dU8y/Kv6RsS+G7uvT2QkIi+fkSAd/LeoJPFjfH6gLgeRc/6BbfLgnheQJAtbyXNtJ0EZQrbQeBbubd3GF4o7DHWG5jRkdk4KlWoRB5F7170btFZhWPbIXMON2tuYvnKQYMSG7YD37fS2t6B+hQ4KReDOKubHTPuTFJYr5tm9OyVwfgtqWRCMGdlw0vHm+4qvp82P68yRxbO8d+jScou2bGVPd1morgVhXzREVu1vD2dQDCwH+S1Q8kW91uN1kTjfW9HSDrZyS1l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'
      },
      {
        id: 3,
        img: 'data:image/jpeg;base64,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'
      },
      {
        id: 4,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeb1oueBjRLqNZ7YxJauT735RasjJvvM5p5A&usqp=CAU'
      },
    ]
    const block = arrCardsBlock.map((item) => {
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
}

