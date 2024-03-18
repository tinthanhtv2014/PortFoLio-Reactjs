import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AOS from "aos";
import "../css/navbar.css";
import logo from "../image/carousel.jpg";
import icon1 from "../image/icon1.png";
import icon2 from "../image/icon2.png";
import icon3 from "../image/icon3.png";
import icon4 from "../image/icon4.png";
import icon5 from "../image/icon5.png";
import icon6 from "../image/icon6.png";
import "aos/dist/aos.css"; // You can also use <link> for styles
import TextTyping from "./text/TextTyping";
AOS.init();
function MyComponent() {
  return (
    <>
      <Navbar
        bg="rgb(10, 16, 30)"
        data-bs-theme="dark"
        className="navbar-container"
      >
        <Container className=" mt-3 mb-3 ">
          <Navbar.Brand href="#home" className=" pr-3 pl-3">
            Navbar
          </Navbar.Brand>
          <Nav className="me-auto mx-auto">
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
      <div className="image-content" id="home">
        <img src={logo} alt="banner" />
        <div className="content">
          <div data-aos="zoom-out-down" className="content-animation">
            <h4>HELLO </h4>
            <TextTyping />
          </div>
        </div>
      </div>

      <div id="about" className="my-4"></div>
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 abount">
        <h1 className="h1-content my-3">About Me</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="image-container col-6 " data-aos="fade-up">
            <div className="image-content-about mt-3">
              <img src={logo} alt="banner" />
            </div>
          </div>

          <div className="content-container col-6 " data-aos="fade-up">
            <div className="name-content my-3">
              <h2>Hi There! I'm Nguyen Tin Thanh</h2>
            </div>
            <div className="job-content my-3">
              <h4>FullStack Developer</h4>
            </div>
            <div className="description-content my-3">
              I am a Visual Designer with a strong focus on digital branding.
              Visul design seeks to attract, inspire, create desires and otivate
              people to respond to messages, with a view to making a favorable
              impact.
            </div>
            <div className="info-content my-3">
              <div className="info-container row my-2">
                {" "}
                <span className="col-2">Birthday </span>
                <span className=" col-4">: May 24, 2003</span>
              </div>

              <div className="info-container row my-2">
                {" "}
                <span className="col-2">Phone: </span>
                <span className="col-4">: +840395890398</span>
              </div>

              <div className="info-container row my-2">
                <span className="col-2">Email</span>
                <span className="col-5">: tinthanhtv2014@gmail.com</span>
              </div>

              <div className="info-container row my-2">
                <span className="col-2">From </span>
                <span className="col-4">: 313 Tra Vinh, Viet Nam</span>
              </div>

              <div className="info-container  row my-2">
                {" "}
                <span className="col-2">Language </span>
                <span className="col-4">: EngLish, Vietnamese</span>
              </div>

              <div className="info-container  row my-2">
                {" "}
                <span className="col-2">FreeLance</span>
                <span className="col-4">: Available</span>
              </div>
            </div>
            <div className="download-cv">
              <button className="btn-download">Download CV</button>
            </div>
          </div>
        </div>
      </div>
      <div id="about" className="my-4"></div>
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 abount">
        <h1 className="h1-content my-3">SERVICE</h1>
      </div>

      <div className="container">
        <div className="row block-container">
          <div className="col-3 block-content mx-2 my-2 p-3">
            <div className="block-image-content mx-auto my-3">
              <img src={icon1} alt="" className="my-4" />
            </div>
            <div className="block-info-content my-1">
              <h3>content</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                eos nesciunt temporibus vero, quam ducimus ipsum minima animi a
              </p>
            </div>
          </div>
          <div className="col-3 block-content mx-2 my-2 p-3">
            <div className="block-image-content mx-auto my-3">
              <img src={icon2} alt="" className="my-4" />
            </div>
            <div className="block-info-content my-1">
              <h3>content</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                eos nesciunt temporibus vero, quam ducimus ipsum minima animi a
              </p>
            </div>
          </div>
          <div className="col-3 block-content mx-2 my-2 p-3">
            <div className="block-image-content mx-auto my-3">
              <img src={icon3} alt="" className="my-4" />
            </div>
            <div className="block-info-content my-1">
              <h3>content</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                eos nesciunt temporibus vero, quam ducimus ipsum minima animi a
              </p>
            </div>
          </div>
          <div className="col-3 block-content mx-2 my-2 p-3">
            <div className="block-image-content mx-auto my-3">
              <img src={icon4} alt="" className="my-4" />
            </div>
            <div className="block-info-content my-1">
              <h3>content</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                eos nesciunt temporibus vero, quam ducimus ipsum minima animi a
              </p>
            </div>
          </div>
          <div className="col-3 block-content mx-2 my-2 p-3">
            <div className="block-image-content mx-auto my-3">
              <img src={icon5} alt="" className="my-4" />
            </div>
            <div className="block-info-content my-1">
              <h3>content</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                eos nesciunt temporibus vero, quam ducimus ipsum minima animi a
              </p>
            </div>
          </div>
          <div className="col-3 block-content mx-2 my-2 p-3">
            <div className="block-image-content mx-auto my-3">
              <img src={icon6} alt="" className="my-4" />
            </div>
            <div className="block-info-content my-1">
              <h3>content</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                eos nesciunt temporibus vero, quam ducimus ipsum minima animi a
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyComponent;
