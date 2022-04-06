import React from 'react'
import { Navbar, Nav,Container, Button } from 'react-bootstrap'
import icon from './NavBarImg.png'
import Form from '../Form/Form'
import './NavBar.css'

function NavBar() {
  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href='#home'>
      <img alt='' src={icon} width='80' height='70' /> Book List App
    </Navbar.Brand>
    <Nav className="me-auto">
      <Button className='addBookBtn' onClick=''>New Book</Button>
    </Nav>
    </Container>
  </Navbar>
</>
  )
}
export default NavBar