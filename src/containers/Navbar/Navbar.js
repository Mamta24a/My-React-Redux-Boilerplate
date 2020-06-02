import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

class NavbarMenu extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>
                    <Link to="/">
                        <img src="/assets/logo.svg" />{" "}
                        My App
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="navbar-dark navbar-nav nav-link" to="/user-list">Users</Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#dummyLogout">
                            <i class="fas fa-sign-out-alt"></i>{" "}
                            Logout
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavbarMenu;