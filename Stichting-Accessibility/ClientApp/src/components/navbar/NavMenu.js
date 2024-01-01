import React, {useState} from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../services/AuthContext';
import './NavMenu.css';

const NavMenu = () => {
  const { isAuthenticated, logout } = useAuth();
  const [collapsed, setCollapsed] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

    const handleLogout = () => { 
        logout();
    }

  return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
          <img src={require('../images/accessibility-logo.png')} alt="Stichting Accessibility" className="logo" />
          <NavbarBrand tag={Link} to="/">Stichting Accessibility</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              {isAuthenticated ? (
                  <NavItem>
                    <NavLink onClick={toggleDropdown}>
                      {/* ... (other code) */}
                    </NavLink>
                    <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                      <DropdownToggle caret>
                        {/* ... (other code) */}
                      </DropdownToggle>
                      <DropdownMenu end>
                        <DropdownItem tag={Link} to="/dashboard">View Dashboard</DropdownItem>
                        <DropdownItem tag={Link} to="/research">Onderzoeken</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={logout}>Logout</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </NavItem>
              ) : (
                  <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/login">Log In</NavLink>
                  </NavItem>
              )}
              {isAuthenticated && (
                  <NavItem>
                    {/* ... (other code) */}
                  </NavItem>
              )}
            </ul>
          </Collapse>
        </Navbar>
      </header>
  );
};

export default NavMenu;
