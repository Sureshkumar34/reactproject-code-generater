import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LinkContainer} from 'react-router-bootstrap';
import {Outlet} from 'react-router-dom'

function Header() {
  return (
    <div>
        <Navbar variant="dark" fixed="top" style={{backgroundColor:"rgb(50, 55, 60)"}}>
        <Container>
          <Navbar.Brand href="#home">Quote Generator</Navbar.Brand>
          <Nav>
            <LinkContainer to="/Home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/About">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
    </div>
  )
}

export default Header