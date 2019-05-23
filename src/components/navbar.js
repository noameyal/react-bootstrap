import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { LinkContainer } from 'react-router-bootstrap';

import style from './navbar.css'

class Navigation extends React.Component {
    render() {
        return (
            <>
            <Navbar bg="light" expand="md" className={style.navbar}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav>
                    <NavDropdown className={ style.dropdownParent } title="Dropdown" id="basic-nav-dropdown">
                        <LinkContainer to="/">
                            <NavDropdown.Item>
                                Example Route
                            </NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Divider />
                        <LinkContainer to="/"> 
                            <NavDropdown.Item>
                                Example Route 2
                            </NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            </>
        )
    }
}

export default Navigation;