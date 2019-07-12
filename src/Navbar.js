import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";

import {BrowserRouter, Route, Link, Switch } from "react-router-dom";

import { BrowserRouter as Router } from "react-router-dom"
import Acceuil from './Acceuil';
import FormPage from './Page2';
import FormPage2 from './Page1';




class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (<Router>
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Easy Transportation</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem >
            
              <MDBNavLink active to="/" >Home</MDBNavLink>
              
            </MDBNavItem>
            <MDBNavItem>
            
              <MDBNavLink active to="/FormPage"  >Sign up
              
              </MDBNavLink>
              
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink active to="/FormPage3">Sign in
              
              </MDBNavLink>
              
            </MDBNavItem>
            
            <MDBNavItem>
              
            </MDBNavItem>
          </MDBNavbarNav>
         
        </MDBCollapse>
      </MDBNavbar>
     
            
          
      </Router>
    );
  }
}

export default NavbarPage;