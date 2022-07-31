import React, { Component } from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import '../App.css';

export default class About extends Component {
    render() {
        return (
                <Container >
                    <Tab.Container id='left-tabs-example' defaultActiveKey="first">
                        <Row >
                            <Col sm={3}>
                                <Nav variant='tabs' className='flex-column mt-2 nav_link'>
                                    <Nav.Item >
                                        <Nav.Link eventKey="first" className='navlink '>Design</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second" className='navlink'>Team</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third" className='navlink'>Programming</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth" className='navlink'>Frameworks</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth" className='navlink'>Libraries</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content className='mt-3'>
                                    <Tab.Pane eventKey='first'>
                                        <img width={700} src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/302404995.jpg?k=adc472b8fff0ff8ab504cde97ba17c889baf93b80e03d645c5094a8ca489175f&o=&hp=1' />
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores optio error, voluptatum eligendi debitis perspiciatis sequi voluptates eveniet aut, enim modi facilis, numquam labore laudantium eaque. Velit rem veniam quisquam?</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='second'>
                                        <img width={700} src='https://cdn.pixabay.com/photo/2017/06/02/17/47/friendship-2366955__340.jpg' />
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores optio error, voluptatum eligendi debitis perspiciatis sequi voluptates eveniet aut, enim modi facilis, numquam labore laudantium eaque. Velit rem veniam quisquam?</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores optio error, voluptatum eligendi debitis perspiciatis sequi voluptates eveniet aut, enim modi facilis, numquam labore laudantium eaque. Velit rem veniam quisquam?</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='third'>
                                        <img width={700} src='https://insights.dice.com/wp-content/uploads/2017/10/shutterstock_696061426.jpg' />
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores optio error, voluptatum eligendi debitis perspiciatis sequi voluptates eveniet aut, enim modi facilis, numquam labore laudantium eaque. Velit rem veniam quisquam?</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='fourth'>
                                        <img width={700} src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1205210209.jpg?crop=0.800xw:0.575xh;0.171xw,0.182xh&resize=980:*' />
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores optio error, voluptatum eligendi debitis perspiciatis sequi voluptates eveniet aut, enim modi facilis, numquam labore laudantium eaque. Velit rem veniam quisquam?</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='fifth'>
                                        <img width={700} src='https://www.websterlibrary.org/wp-content/uploads/2021/03/Teen-Room.jpg' />
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores optio error, voluptatum eligendi debitis perspiciatis sequi voluptates eveniet aut, enim modi facilis, numquam labore laudantium eaque. Velit rem veniam quisquam?</p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>

        )
    }
}


