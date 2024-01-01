// Import necessary libraries
import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

// Functional component for the navigation bar
const CustomNavbar = ({ isLoggedIn }) => {
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand tag={Link} to="/">Your App Name</NavbarBrand>
            <Nav className="ml-auto" navbar>
                {isLoggedIn ? (
                    <>
                        <NavItem>
                            <NavLink tag={Link} to="/onboarding">Onboarding</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => { /* Handle Logout */ }} tag={Link} to="/">Logout</NavLink>
                        </NavItem>
                    </>
                ) : (
                    <>
                        <NavItem>
                            <NavLink tag={Link} to="/login">Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/registration">Register</NavLink>
                        </NavItem>
                    </>
                )}
            </Nav>
        </Navbar>
    );
};

export default CustomNavbar;
