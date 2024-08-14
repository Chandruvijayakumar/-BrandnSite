import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import AppNavbar from '../components/Navbar';  // Import the Navbar component
import { Link } from "react-router-dom";

const Tools = () => {
    return (
      <>
        <AppNavbar />
        <Container className="mt-5">
          <h2>Our Tools</h2>
          <Row>
            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Feature 1</Card.Title>
                  <Card.Text>Details about feature 1.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Feature 2</Card.Title>
                  <Card.Text>Details about feature 2.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Feature 3</Card.Title>
                  <Card.Text>Details about feature 3.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Body>
                  <Card.Title>Feature 4</Card.Title>
                  <Card.Text>Details about feature 4.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <footer className="bg-light text-center mt-5 py-3">
            <Container>
              <Link to="/create-logo">Create Your Logo</Link> |
              <Link to="/support"> Support</Link> |
              <Link to="/tools"> Tools</Link>
            </Container>
          </footer>
        </Container>
      </>
    );
};

export default Tools;
