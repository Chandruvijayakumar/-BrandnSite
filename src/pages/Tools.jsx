import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import AppNavbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "../App.css"; // Import the App.css file to apply styles

const Tools = () => {
  return (
    <>
      <AppNavbar />
      <Container className="tools-container mt-5">
        <h2 className="tools-title">Our Logo Creation Tools</h2>
        <Row>
          <Col md={4}>
            <Card className="tool-card">
              <Card.Body>
                <Card.Title>Icon Picker</Card.Title>
                <Card.Text>
                  Choose from thousands of icons to represent your brand.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="tool-card">
              <Card.Body>
                <Card.Title>Font Style</Card.Title>
                <Card.Text>
                  Explore a variety of fonts to find the perfect match for your
                  logo.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="tool-card">
              <Card.Body>
                <Card.Title>Color Palette</Card.Title>
                <Card.Text>
                  Customize your logo colors with a versatile palette tool.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="tool-card">
              <Card.Body>
                <Card.Title>Shape Designer</Card.Title>
                <Card.Text>
                  Craft unique shapes and symbols for your logo design.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="tool-card">
              <Card.Body>
                <Card.Title>Background Editor</Card.Title>
                <Card.Text>
                  Choose or create custom backgrounds to enhance your logo.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="tool-card">
              <Card.Body>
                <Card.Title>3D Logo Effect</Card.Title>
                <Card.Text>
                  Add depth and dimension to your logo with 3D effects.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <footer className="tools-footer">
          <Container>
            <Link to="/create-logo">Create Your Logo</Link> |
            <Link to="/support"> Support</Link> |<Link to="/tools"> Tools</Link>
          </Container>
        </footer>
      </Container>
    </>
  );
};

export default Tools;
