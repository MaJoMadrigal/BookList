import React from 'react'
import { Navbar } from 'react-bootstrap'
import icon from './NavBarImg.png'

function NavBar() {
  return (
    <Navbar bg='primary' variant='dark'>
      <Navbar.Brand href='#home'>
        <img alt='' src={icon} width='80' height='70' /> Book List App
      </Navbar.Brand>
      <Button className=""></Button>
    </Navbar>
  )
}
export default NavBar


/* .addBookBtn{
    background-color: transparent;
    border-color: transparent;
    color: rgba(255,255,255,.55);
}
.addBookBtn:hover{
    color: white;
    border-color: #00CED1;
    background-color: transparent;
} */