import React from 'react'
//import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav, Image } from 'react-bootstrap'
import logo from '../images/Screenshot 2022-12-25 083343-logo.png'


const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant='dark' sticky="top" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand><Image src={logo} alt='mini-stays' className='logo' /></Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ms-auto'>
              <LinkContainer to='/'>
                <Nav.Link><i className='fas fa-home'></i> Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/about'>
                <Nav.Link><i className='fas fa-info'></i> About</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/contact'>
                <Nav.Link><i className='fas fa-mobile-alt'></i> Contact</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header