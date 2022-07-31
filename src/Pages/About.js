import React, { Component } from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import '../App.css';

const About = (props) => {
    const navs = props.arrNav.map((elem) => {
        return (
            <Nav.Item >
                <Nav.Link eventKey={elem.key} className='navlink'>{elem.text}</Nav.Link>
            </Nav.Item>
        )
    })
    const tabs = props.arrNav.map((elem) => {
        return (
            <Tab.Pane eventKey={elem.key}>
                <img width={700} src={elem.img} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores optio error, voluptatum eligendi debitis perspiciatis sequi voluptates eveniet aut, enim modi facilis, numquam labore laudantium eaque. Velit rem veniam quisquam?</p>
            </Tab.Pane>
        )
    })
    return (
        <Container >
            <Tab.Container id='left-tabs-example' defaultActiveKey="first">
                <Row >
                    <Col sm={3}>
                        <Nav variant='tabs' className='flex-column mt-2 nav_link'>
                            {navs}
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content className='mt-3'>
                            {tabs}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    )
}
export default About;

