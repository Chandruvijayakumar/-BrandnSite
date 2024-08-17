import React from "react";
import { Navbar, Nav, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AppNavbar = ({ user, onSignOut }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Brand ID
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/create-logo">
            Create Logo
          </Nav.Link>
          <Nav.Link as={Link} to="/tools">
            Tools
          </Nav.Link>
          <Nav.Link as={Link} to="/pricing">
            Pricing
          </Nav.Link>
          <Nav.Link as={Link} to="/support">
            Support
          </Nav.Link>
          {user ? (
            <>
              <Image
                src={user.photoURL}
                alt="Profile"
                roundedCircle
                style={{ width: "40px", height: "40px", marginRight: "10px" }}
              />
              <Navbar.Text>{user.displayName}</Navbar.Text>
              <Button
                variant="outline-light"
                onClick={onSignOut}
                style={{ marginLeft: "10px" }}
              >
                Sign Out
              </Button>
            </>
          ) : null}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
