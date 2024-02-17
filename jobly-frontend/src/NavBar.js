import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "./UserContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = ({ logout }) => {
  const { currentUser } = useContext(UserContext);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand style={{ left: 0 }}>
          <NavLink to="/">Jobbly </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ right: 0 }}>
          <Nav className="me-auto">
            {currentUser ? (
              <>
                <Nav.Link>
                  <NavLink to="/companies">Companies </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/jobs">Jobs </Link>
                </Nav.Link>
                <Nav.Link></Nav.Link>
                <Nav.Link></Nav.Link>
              </>
            ) : (
              ""
            )}
            {currentUser ? (
              <NavDropdown title="Profile" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <NavLink to="/profile"> Profile</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  <NavLink to="/" onClick={logout}>
                    Logout {currentUser.username}
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            ) : (
              ""
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
