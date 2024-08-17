// src/pages/Pricing.jsx
import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import AppNavbar from "../components/Navbar";
import { auth } from "../firebaseConfig";

const Pricing = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      <AppNavbar />
      <Container className="pricing-container">
        <div>
          <h2 className="pricing-title">Choose Your Plan</h2>
          <p className="pricing-subtitle">
            Select the best plan that fits your needs.
          </p>

          <Row>
            <Col md={4}>
              <Card className="pricing-card">
                <Card.Body>
                  <Card.Title className="card-title">Basic Plan</Card.Title>
                  <Card.Text>
                    <h3>$5</h3>
                    <ul>
                      <li>Feature 1: Simple Logo Design</li>
                      <li>Feature 2: Basic Customization</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="pricing-card">
                <Card.Body>
                  <Card.Title className="card-title">Advance Plan</Card.Title>
                  <Card.Text>
                    <h3>$22</h3>
                    <ul>
                      <li>Feature 1: Simple Logo Design</li>
                      <li>Feature 2: Basic Customization</li>
                      <li>Feature 3: Multiple Logo Variations</li>
                      <li>Feature 4: High-Resolution Export</li>
                      <li>Feature 5: Logo Usage Guidelines</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="pricing-card">
                <Card.Body>
                  <Card.Title className="card-title">Premium Plan</Card.Title>
                  <Card.Text>
                    <h3>$50</h3>
                    <ul>
                      <li>Feature 1: Simple Logo Design</li>
                      <li>Feature 2: Basic Customization</li>
                      <li>Feature 3: Multiple Logo Variations</li>
                      <li>Feature 4: High-Resolution Export</li>
                      <li>Feature 5: Logo Usage Guidelines</li>
                      <li>Feature 6: Priority Support</li>
                      <li>Feature 7: Extended Commercial License</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Pricing;
