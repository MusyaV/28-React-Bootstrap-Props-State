import React, { Component } from 'react';
import { Nav, Navbar, FormControl, Container, Form, Button } from 'react-bootstrap';
import logo from './1.png';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';
import '../App.css';

const Header = (props) => {
    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant='dark'>
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="40"
                            width="40"
                            className='d-inline-block align-top'
                            alt='Logo'
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav activeKey="/" className="me-auto">
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/about'>About</Nav.Link>
                            <Nav.Link href='/contacts'>Contacts</Nav.Link>
                            <Nav.Link href='/blog'>Blog</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="me-2"
                            />
                            <Button variant="outline-warning">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home arrCart={props.arrCart} />} />
                    <Route path='/about' element={<About arrNav={props.arrNav} />} />
                    <Route path='/contacts' element={<Contacts />} />
                    <Route path='/blog' element={<Blog arrCardsBlock={props.arrCardsBlock} />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
export default Header;
