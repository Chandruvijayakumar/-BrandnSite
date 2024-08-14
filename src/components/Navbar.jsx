import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

const AppNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand className="brand-title" href="/">
          Brand ID
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/tools" className="nav-link">
              Tools
            </Link>
            <Link to="/support" className="nav-link">
              Support
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
