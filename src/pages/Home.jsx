import React from "react";
import AppNavbar from "../components/Navbar"; // Import the Navbar component
import { Carousel, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <>
      <AppNavbar /> {/* Reuse the Navbar component */}
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1920x600.png?text=First+Slide"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First Slide Label</h3>
            <p>Captivating subtitle for the first slide.</p>
            <Button variant="primary">Learn More</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1920x600.png?text=Second+Slide"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second Slide Label</h3>
            <p>Engaging subtitle for the second slide.</p>
            <Button variant="primary">Explore Now</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1920x600.png?text=Third+Slide"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third Slide Label</h3>
            <p>Interesting subtitle for the third slide.</p>
            <Button variant="primary">Get Started</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <footer className="bg-dark text-center mt-5 py-3">
        <Container>
          <Link to="/create-logo">Create Your Logo</Link> |
          <Link to="/support"> Support</Link> |<Link to="/tools"> Tools</Link> |
          <Link to="/terms"> Terms and Conditions</Link> |
          <Link to="/privacy"> Privacy Policy</Link>
        </Container>
      </footer>
    </>
  );
};

export default Home;
