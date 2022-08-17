import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import {motion} from 'framer-motion'
const Header = () => {
    const imgVariants={
        open:{
            y:0,
            transition:{
                delay:0.4,
                duration:0.5,
                ease: "linear" ,
                type:'spring',
                stiffness:120
            }
        },
        close:{
            y:-112,
            transition:{
                delay:0.4,
                duration:0.5,
                ease: "linear" ,
                type:'spring',
                stiffness:120
            }
        }
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <motion.div
                        variants={imgVariants}
                        animate='open'
                        initial='close'
                        >
                            <img src={logo} alt="logo" />
                        </motion.div>
                    </Navbar.Brand>
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