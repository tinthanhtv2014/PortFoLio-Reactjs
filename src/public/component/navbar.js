import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AOS from "aos";
import "../css/navbar.css";
import logo from "../image/carousel.jpg";
import "aos/dist/aos.css"; // You can also use <link> for styles
import TextTyping from "./text/TextTyping";
AOS.init();
function MyComponent() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="navbar-container">
        <Container className=" mt-3 mb-3">
          <Navbar.Brand href="#home" className="ms-auto pr-3 pl-3">
            Navbar
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className=" navbar-item">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="navbar-item ">
              About
            </Nav.Link>
            <Nav.Link href="#education" className="navbar-item ">
              Education
            </Nav.Link>
            <Nav.Link href="#skills" className="navbar-item ">
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" className="navbar-item ">
              Projects
            </Nav.Link>
            <Nav.Link href="#experience" className="navbar-item ">
              Work Experience
            </Nav.Link>
            <Nav.Link href="#contact" className="navbar-item ">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="image-content">
        <img src={logo} alt="banner" />
        <div className="content">
          <div data-aos="zoom-out-down" className="content-animation">
            <h4>HELLO </h4>
            <TextTyping />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyComponent;
