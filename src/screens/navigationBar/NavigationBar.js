import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {navigationLinks} from '../../helpers/navigationLinks'



function NavigationBar() {
  return (
    <div id="home">
        <Navbar expand="md">
            <Navbar.Brand href="#home">adagun</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                {createLinks()}
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    </div>
  )
}


function createLinks()
{
    return navigationLinks.map((element, index) => (
        <Nav.Link key={index} href={element.ref}>{element.name}</Nav.Link>
    ))
}


export default NavigationBar