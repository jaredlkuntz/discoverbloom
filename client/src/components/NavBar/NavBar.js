import React, { Component } from 'react';

import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

import './NavBar.css'

import logo from '../../assets/bloom-logo-1.png';

export default class NavigationBar extends Component {
    render() {
        return (
            <Navbar fixedTop fluid >
                <Navbar.Header>
                    <Navbar.Brand>
                        <img src={logo} alt="logo" className="Bloom-logo"/>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavDropdown title="Menu" id="menu-dropdown"> 
                            <MenuItem>Profile</MenuItem>
                            <MenuItem>Support Bloom</MenuItem>
                            <MenuItem divider />
                            <MenuItem>Report A Bug</MenuItem>
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
};