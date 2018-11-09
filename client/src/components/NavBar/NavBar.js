import React, { Component } from 'react';
import { Image, Nav, NavItem, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
  };

//Note: See 'https://react-bootstrap.github.io/components/navs/' for direction on how to link helpers for functionality to Nav
  render() {
    return(
      <div>
      <Navbar default collapseOnSelect>
      <Navbar.Collapse>
        <Nav className="Nav" bsStyle="tabs" >
        <NavItem eventKey = {1} componentClass={Link} href="/" to="/">
          <Image src="./favicon-16x16.png"/>
        </NavItem>
          <NavItem eventKey = {2} componentClass={Link} href="/PlantList" to="/PlantList">
            Plant List
          </NavItem>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}

export default NavBar;
