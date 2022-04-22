import React from 'react'
import { Navbar, Nav,Container, Button } from 'react-bootstrap'
import icon from './bookIcon2.png'
import {LinkContainer} from 'react-router-bootstrap'
import './NavBar.css'

function NavBar() {

  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href='/'>
        <img alt='' src={icon} width='80' height='70' /> Book List App
      </Navbar.Brand>
      <Nav className="me-auto">
        <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/newBook">
          <Nav.Link>New Book</Nav.Link>
        </LinkContainer>
        
      </Nav>
      
    </Container>
  </Navbar>
</>
  )
}
export default NavBar