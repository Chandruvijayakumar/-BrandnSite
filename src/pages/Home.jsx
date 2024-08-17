// src/pages/Home.jsx
import React from "react";
import AppNavbar from "../components/Navbar";
import { Carousel, Container, Button } from "react-bootstrap";
import { auth, provider, signInWithPopup, signOut } from "../firebaseConfig.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "../App.css"; // Import the CSS file here

const Home = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div className="home-container">
      <AppNavbar user={user} onSignOut={handleSignOut} />
      <Container className="main-content">
        {!user ? (
          <Button className="sign-in-button" onClick={handleSignIn}>
            Sign in with Google
          </Button>
        ) : (
          <p className="welcome-message">Welcome, {user.displayName}</p>
        )}
      </Container>
      <div className="carousel-container">
        <Carousel className="custom-carousel">
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100"
              src="/public/images/2.png"
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
              src="/public/images/1.png"
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
              src="/public/images/3.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third Slide Label</h3>
              <p>Interesting subtitle for the third slide.</p>
              <Button variant="primary">Get Started</Button>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100"
              src="/public/images/4.png"
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h3>Fourth Slide Label</h3>
              <p>Captivating subtitle for the fourth slide.</p>
              <Button variant="primary">Learn More</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <footer className="bg-dark text-center mt-5 py-3 textdecerotion">
        <Container>
          <Button  onClick={() => navigate("/create-logo")}>
            Create Your Logo
          </Button>{" "}
          |
          <Button  onClick={() => navigate("/support")}>
            {" "}
            Support
          </Button>{" "}
          |
          <Button  onClick={() => navigate("/tools")}>
            {" "}
            Tools
          </Button>{" "}
          |
          <Button  onClick={() => navigate("/pricing")}>
            {" "}
            Pricing
          </Button>{" "}
          |
          <Button  onClick={() => navigate("/privacy")}>
            {" "}
            Privacy Policy
          </Button>{" "}
          |
          <Button  onClick={() => navigate("/terms")}>
            {" "}
            Terms and Conditions
          </Button>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
