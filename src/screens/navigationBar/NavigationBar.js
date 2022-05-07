import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link } from "react-router-dom";
import { navigationLinks } from "../../helpers/navigationLinks";
import "./navigation.css";

function NavigationBar() {
  return (
    <div id="home" className="navigation">
      <Navbar
        className="navigation_container"
        expand="sm"
        style={{ zIndex: "2", position: "fixed", top: 0, width: "100%" }}
        collapseOnSelect
      >
        <Navbar.Brand href="">adagun</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="links">{createLinks()}</Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

function createLinks() {
  return navigationLinks.map((element, index) => (
    
      <Link className="links" id={index} to={element.ref}>{element.name}</Link>
      
    
  ));
}

export default NavigationBar;
