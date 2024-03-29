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
import "../css/navbarReponSive.css";
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
            <Nav.Link href="#service" className="navbar-item ">
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
            <TextTyping className="texttyping" />
          </div>
        </div>
      </div>

      <div id="about" className="my-4"></div>

      <div className="my-5 abount">
        <div className="info-nen">ABOUT ME</div>
        <h1 className="h1-content my-3">ABOUT ME</h1>
      </div>
      <div className="container color-container">
        <div className="row">
          <div className="image-container col-12 col-sm-6 " data-aos="fade-up">
            <div className="image-content-about mt-3 col-12">
              <img src={logo} alt="banner" className="col-12" />
            </div>
          </div>

          <div
            className="content-container col-12 col-sm-6 "
            data-aos="fade-up"
          >
            <div className="name-content my-3">
              <h2 className="h2-name-content">
                Hi There! I'm Nguyen Tin Thanh
              </h2>
            </div>
            <div className="job-content my-3">
              <h4 className="h4-job-content">FullStack Developer</h4>
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
                <span className="col-sm-2 col-3">
                  <i class="fa-sharp fa-solid fa-calendar-clock"></i> Birthday{" "}
                </span>
                <span className="col-sm-4 col-5">: May 24, 2003</span>
              </div>

              <div className="info-container row my-2">
                {" "}
                <span className="col-sm-2 col-3">Phone: </span>
                <span className="col-sm-4 col-5">: +840395890398</span>
              </div>

              <div className="info-container row my-2">
                <span className="col-sm-2 col-3">Email</span>
                <span className="col-sm-5 col-8">
                  : tinthanhtv2014@gmail.com
                </span>
              </div>

              <div className="info-container row my-2">
                <span className="col-sm-2 col-3">From </span>
                <span className="col-sm-4 col-8">: 313 Tra Vinh, Viet Nam</span>
              </div>

              <div className="info-container  row my-2">
                {" "}
                <span className="col-sm-2 col-3">Language </span>
                <span className="col-sm-4 col-9">: EngLish, Vietnamese</span>
              </div>

              <div className="info-container  row my-2">
                {" "}
                <span className="col-sm-2 col-3">FreeLance</span>
                <span className="col-sm-4 col-4">: Available</span>
              </div>
            </div>
            <div className="download-cv  col-12">
              <button className="btn-download">Download CV</button>
            </div>
          </div>
        </div>
      </div>
      <div id="service" className="my-4"></div>
      <br />
      <br />

      <div className="my-5 abount">
        <div className="info-nen">SERVICE</div>
        <h1 className="h1-content my-3">SERVICE</h1>
      </div>

      <div className="container">
        <div className="row block-container">
          <div
            className=" col-11 col-sm-3 block-content mx-2 my-2 p-3"
            data-aos="fade-right"
          >
            <div className="block-image-content mx-auto my-3">
              <img src={icon1} alt="" className="my-4" />
            </div>
            <div className="block-info-content my-1">
              <h3 className="h3-block-info-content">Sketches</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                eos nesciunt temporibus vero, quam ducimus ipsum minima animi a
              </p>
            </div>
          </div>
          <div
            className="col-11 col-sm-3 block-content mx-2 my-2 p-3"
            data-aos="fade-down"
          >
            <div className="block-image-content mx-auto my-3">
              <img src={icon2} alt="" className="my-4" />
            </div>
            <div className="block-info-content my-1">
              <h3 className="h3-block-info-content">UI/UX Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                eos nesciunt temporibus vero, quam ducimus ipsum minima animi a
              </p>
            </div>
          </div>
          <div
            className="col-11 col-sm-3 block-content mx-2 my-2 p-3"
            data-aos="fade-left"
          >
            <div className="block-image-content mx-auto my-3">
              <img src={icon3} alt="" className="my-4" />
            </div>
            <div className="block-info-content my-1">
              <h3 className="h3-block-info-content">Product Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                eos nesciunt temporibus vero, quam ducimus ipsum minima animi a
              </p>
            </div>
          </div>
          <div
            className="col-11 col-sm-3 block-content mx-2 my-2 p-3"
            data-aos="fade-right"
          >
            <div className="block-image-content mx-auto my-3">
              <img src={icon4} alt="" className="my-4" />
            </div>
            <div className="block-info-content my-1">
              <h3 className="h3-block-info-content">App Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                eos nesciunt temporibus vero, quam ducimus ipsum minima animi a
              </p>
            </div>
          </div>
          <div
            className="col-11 col-sm-3 block-content mx-2 my-2 p-3"
            data-aos="fade-up"
          >
            <div className="block-image-content mx-auto my-3">
              <img src={icon5} alt="" className="my-4" />
            </div>
            <div className="block-info-content my-1">
              <h3 className="h3-block-info-content">Motion Graphics</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                eos nesciunt temporibus vero, quam ducimus ipsum minima animi a
              </p>
            </div>
          </div>
          <div
            className="col-11 col-sm-3 block-content mx-2 my-2 p-3"
            data-aos="fade-left"
          >
            <div className="block-image-content mx-auto my-3">
              <img src={icon6} alt="" className="my-4" />
            </div>
            <div className="block-info-content my-1">
              <h3 className="h3-block-info-content">Responsive Design</h3>
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
