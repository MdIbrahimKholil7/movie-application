import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/logo.png'
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                       
                        <Nav className='ms-auto '>
                            <Nav.Link className='text-dark fs-5 fw-bold'>Home</Nav.Link>
                            <Nav.Link className='text-dark fs-5 fw-bold'>All Movie </Nav.Link>
                            <Nav.Link className='text-dark fs-5 fw-bold'>Top Rated </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;