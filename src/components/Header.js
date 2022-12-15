import React from 'react'
//import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav } from 'react-bootstrap'


const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant='dark' sticky="top" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Mini Stays</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ms-auto'>
              <LinkContainer to='/home'>
                <Nav.Link><i className='fas fa-home'></i> Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/home'>
                <Nav.Link><i className='fas fa-info'></i> About</Nav.Link>
              </LinkContainer><LinkContainer to='/home'>
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