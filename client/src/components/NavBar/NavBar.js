import React, { Component } from 'react';
import { Image, Nav, NavItem } from 'react-bootstrap';
import './NavBar.css'

class NavBar extends Component {
  constructor(props) {
    super(props);
  };

//Note: See 'https://react-bootstrap.github.io/components/navs/' for direction on how to link helpers for functionality to Nav
  render() {
    return(
      <div>
        <Nav className="Nav" bsStyle="tabs" >
          <NavItem className="NavItem" href="/">
            <Image src="./favicon-16x16.png"/>
          </NavItem>
          <NavItem className="NavItem" href="/PlantSearch">
            Plant List
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default NavBar;
