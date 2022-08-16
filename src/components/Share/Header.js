import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo.png'
const Header = () => {
    return (
        <div>
            <Navbar bg="light" variant="light py-3">
                <Container>
                    <Navbar.Brand href=""><img src={logo} alt="logoImage" /></Navbar.Brand>
                    <Nav className="fw-bold text-dark">
                        <Nav.Link href="" className='text-dark fs-5'>Home</Nav.Link>
                        <Nav.Link href="" className='text-dark fs-5'>All Movie</Nav.Link>
                        <Nav.Link href="" className='text-dark fs-5'>Top Rated</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;