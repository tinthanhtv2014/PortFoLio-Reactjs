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
import icon7 from "../image/resume-icon1.png";
import icon8 from "../image/resume-icon2.png";
import icon9 from "../image/portfolio1.jpg";
import icon10 from "../image/portfolio2.jpg";
import icon11 from "../image/portfolio3_lg.jpg";
import icon12 from "../image/portfolio4_lg.jpg";
import icon13 from "../image/portfolio5_lg.jpg";
import icon14 from "../image/portfolio6_lg.jpg";
import icon15 from "../image/301_docker.jpg";
import icon17 from "../image/microsoft-sql-server4529.jpg";
import icon16 from "../image/js-emblem-orange-shield-and-white-text-vector.jpg";
import icon18 from "../image/mysql.jpg";
import icon19 from "../image/react.jpg";
import icon20 from "../image/portfolio7_lg.jpg";
import "aos/dist/aos.css"; // You can also use <link> for styles
import TextTyping from "./text/TextTyping";
import "../css/navbarReponSive.css";
import Carousel from "react-bootstrap/Carousel";
import TextTyping2 from "./text/TextTyping2";
import TextTyping3 from "./text/TextTyping3";
import { useState } from "react";
AOS.init();
function MyComponent() {
  const [isFocused, setIsFocused] = useState(false); // State to track focus
  const [isValid, setIsValid] = useState(false); // State to track validity
  const [textValue, setTextValue] = useState(""); // State to track textarea value
  const [hoverIndex, setHoverIndex] = useState(null);
  // Handle focus event
  const handleFocus = () => {
    setIsFocused(true);
  };

  // Handle blur event
  const handleBlur = () => {
    setIsFocused(false);
  };

  // Handle input event
  const handleInput = (e) => {
    setTextValue(e.target.value); // Update textarea value
    setIsValid(e.target.value.trim() !== ""); // Check validity
  };
  let leaveTimeout = null;

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
    clearTimeout(leaveTimeout); // Hủy hẹn giờ khi di chuyển đến phần tử mới
  };

  const handleMouseLeave = () => {
    // Đặt hẹn giờ để thực hiện handleMouseLeave sau một khoảng thời gian
    leaveTimeout = setTimeout(() => {
      setHoverIndex(null);
    }, 30000);
  };
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
              Skills
            </Nav.Link>
            <Nav.Link href="#education" className="navbar-item ">
              Education
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
      {/* <div className="image-content" id="home">
        <img src={logo} alt="banner" />
        <div className="content">
          <div data-aos="zoom-out-down" className="content-animation">
            <h4>HELLO </h4>
            <TextTyping className="texttyping" />
          </div>
        </div>
      </div> */}
      <Carousel id="home" fade>
        <Carousel.Item className="image-content" interval={3000}>
          <img className="d-block w-100" src={logo} alt="First slide" />
          <div className="content mx-auto">
            <div data-aos="zoom-out-down" className="content-animation">
              <div className="content1">
                <div className="content1__container">
                  <p className="content1__container__text">Hello</p>

                  <ul className="content1__container__list">
                    <li className="content1__container__list__item">WORLD!</li>
                    <li className="content1__container__list__item">
                      CUSTOMER!
                    </li>
                    <li className="content1__container__list__item">USERS!</li>
                    <li className="content1__container__list__item">
                      EVERYBODY!
                    </li>
                  </ul>
                </div>
              </div>
              <h1 className="h11">I'M NGUYEN TIN THANH </h1>
              <TextTyping className="texttyping" />
            </div>
          </div>
          <Carousel.Caption className="captionn">
            <h3>
              <span>I'm</span>
              <span>not</span>
              <span>a</span>
              <span>great</span>
              <span>programmer;</span>
              <span>I'm</span>
              <span>just</span>
              <span>a</span>
              <span>good</span>
              <span>programmer</span>
              <span>with</span>
              <span>great</span>
              <span>habits.</span>
            </h3>
            <p className="lineUp">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="image-content" interval={3000}>
          <img className="d-block w-100" src={logo} alt="Second slide" />
          <div className="content mx-auto">
            <div data-aos="zoom-out-down" className="content-animation">
              <div className="content1">
                <div className="content1__container">
                  <p className="content1__container__text">Hello</p>

                  <ul className="content1__container__list">
                    <li className="content1__container__list__item">WORLD!</li>
                    <li className="content1__container__list__item">
                      CUSTOMER!
                    </li>
                    <li className="content1__container__list__item">USERS!</li>
                    <li className="content1__container__list__item">
                      EVERYBODY!
                    </li>
                  </ul>
                </div>
              </div>
              <h1 className="h11">I'M NGUYEN TIN THANH </h1>
              <TextTyping2 className="texttyping" />
            </div>
          </div>
          <Carousel.Caption className="captionn">
            <h3>
              <span>First,</span>
              <span>solve</span>
              <span>the</span>
              <span>problem.</span>
              <span>Then,</span>
              <span>write</span>
              <span>the</span>
              <span>code</span>
            </h3>
            <p className="lineUp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="image-content" interval={3000}>
          <img className="d-block w-100" src={logo} alt="Third slide" />
          <div className="content mx-auto">
            <div data-aos="zoom-out-down" className="content-animation">
              <div className="content1">
                <div className="content1__container">
                  <p className="content1__container__text">Hello</p>

                  <ul className="content1__container__list">
                    <li className="content1__container__list__item">WORLD!</li>
                    <li className="content1__container__list__item">
                      CUSTOMER!
                    </li>
                    <li className="content1__container__list__item">USERS!</li>
                    <li className="content1__container__list__item">
                      EVERYBODY!
                    </li>
                  </ul>
                </div>
              </div>

              <h1 className="h11">I'M NGUYEN TIN THANH </h1>
              <TextTyping3 className="texttyping" />
            </div>
          </div>
          <Carousel.Caption className="captionn">
            <h3>
              <span>Never</span>
              <span>dream</span>
              <span>about</span>
              <span>success.</span>
              <span>Work</span>
              <span>for</span>
              <span>it</span>
            </h3>
            <p className="lineUp">
              Praesent commodo cursus magna, vel scelerisque nisl
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* -----------------------------------interval={1000}------------------------------------- */}
      <div id="about" className="my-4"></div>

      <div className="my-5 abount">
        <div className="info-nen">ABOUT ME</div>
        <h1 className="h1-content my-3" data-aos="fade-up">
          ABOUT ME
        </h1>
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
      {/* -----------------------------------interval={1000}------------------------------------- */}
      <div className="my-5 abount">
        <div className="info-nen">SERVICE</div>
        <h1 className="h1-content my-3" data-aos="fade-up">
          SERVICE
        </h1>
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
      {/* -----------------------------------interval={1000}------------------------------------- */}

      <div id="education" className="my-4"></div>

      <div className="my-5 abount">
        <div className="info-nen">EDUCATION</div>
        <h1 className="h1-content my-3" data-aos="fade-up">
          EDUCATION
        </h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 expe-h1">
            <div className="img-h1-content" data-aos="zoom-in-right">
              <div className="img-h1-content-img my-4">
                <img src={icon7} alt="" />
              </div>
              <h1 className="my-4">Education</h1>
            </div>

            <div
              className="experience"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="experience-content">
                <h2>Master of Computer Science</h2>
                <h4>Feb 2023 - Present</h4>
                <h3>Bergnaum, Hills and Howe</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  nihil quis voluptatem impedit, illo facilis aspernatur
                  distinctio repudiandae eius. At explicabo tempore eius non
                  consectetur. Nobis praesentium rem accusantium molestias!
                </p>
              </div>
              <div className="experience-content">
                {" "}
                <h2>Bachelor of Computer Science</h2>
                <h4>Jan 2024 - Present</h4>
                <h3>Bergnaum, Hills and Howe</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  nihil quis voluptatem impedit, illo facilis aspernatur
                  distinctio repudiandae eius. At explicabo tempore eius non
                  consectetur. Nobis praesentium rem accusantium molestias!
                </p>
              </div>
              <div className="experience-content">
                {" "}
                <h2>Diploma in Computer Science</h2>
                <h4>Jan 2020 - Present</h4>
                <h3>Bergnaum, Hills and Howe</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  nihil quis voluptatem impedit, illo facilis aspernatur
                  distinctio repudiandae eius. At explicabo tempore eius non
                  consectetur. Nobis praesentium rem accusantium molestias!
                </p>
              </div>
            </div>
          </div>
          {/* --------------------- */}
          <div className="col-12 col-sm-6 expe-h1">
            <div className="img-h1-content" data-aos="zoom-in-left">
              <div className="img-h1-content-img my-4">
                <img src={icon8} alt="" />
              </div>
              <h1 className="my-4">Experience</h1>
            </div>
            <div
              className="experience"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="experience-content">
                <h2>Senior UX/UI Designer</h2>
                <h4>Jan 2020 - Present</h4>
                <h3>Bergnaum, Hills and Howe</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  nihil quis voluptatem impedit, illo facilis aspernatur
                  distinctio repudiandae eius. At explicabo tempore eius non
                  consectetur. Nobis praesentium rem accusantium molestias!
                </p>
              </div>
              <div className="experience-content">
                {" "}
                <h2>Product Designer</h2>
                <h4>Jan 2020 - Present</h4>
                <h3>Bergnaum, Hills and Howe</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  nihil quis voluptatem impedit, illo facilis aspernatur
                  distinctio repudiandae eius. At explicabo tempore eius non
                  consectetur. Nobis praesentium rem accusantium molestias!
                </p>
              </div>
              <div className="experience-content">
                {" "}
                <h2> UX/UI Designer</h2>
                <h4>Jan 2020 - Present</h4>
                <h3>Bergnaum, Hills and Howe</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  nihil quis voluptatem impedit, illo facilis aspernatur
                  distinctio repudiandae eius. At explicabo tempore eius non
                  consectetur. Nobis praesentium rem accusantium molestias!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}

      <div id="projects" className="my-4"></div>

      <div className="my-5 abount">
        <div className="info-nen">PROJECTS</div>
        <h1 className="h1-content my-3" data-aos="fade-up">
          PROJECTS
        </h1>
      </div>
      <div className="container">
        <div className="row block-container">
          <div
            className=" col-11 col-sm-3 block-content mx-2 my-2 "
            data-aos="fade-right"
          >
            <div className="position-block1 px-0">
              <img src={icon16} alt="" />
            </div>
            <div className="position-block2 ">
              <div className="position-block2-content">
                <h1>
                  <a href="#">
                    <i class="fab fa-node-js"></i>
                  </a>
                </h1>
                <h3>Product Design</h3>
                <h5>JavaScript Design</h5>
              </div>
            </div>
          </div>
          <div
            className="col-11 col-sm-3 block-content mx-2 my-2 "
            data-aos="fade-down"
          >
            <div className="position-block1 px-0">
              <img src={icon20} alt="" />
            </div>
            <div className="position-block2 ">
              <div className="position-block2-content">
                <h1>
                  <a href="#">
                    <i class="fab fa-node"></i>
                  </a>
                </h1>
                <h3>Product Design</h3>
                <h5>NodeJs Server</h5>
              </div>
            </div>
          </div>
          <div
            className="col-11 col-sm-3 block-content mx-2 my-2 "
            data-aos="fade-left"
          >
            <div className="position-block1 px-0">
              <img src={icon19} alt="" />
            </div>
            <div className="position-block2 ">
              <div className="position-block2-content">
                <h1>
                  <a href="#">
                    <i class="fab fa-react"></i>
                  </a>
                </h1>
                <h3>Product Design</h3>
                <h5>ReactJs Client</h5>
              </div>
            </div>
          </div>
          <div
            className="col-11 col-sm-3 block-content mx-2 my-2 "
            data-aos="fade-right"
          >
            <div className="position-block1 px-0">
              <img src={icon18} alt="" />
            </div>
            <div className="position-block2 ">
              <div className="position-block2-content">
                <h1>
                  <a href="#">
                    <i class="fa-solid fa-database"></i>
                  </a>
                </h1>
                <h3>Product Design</h3>
                <h5>MySQL Database</h5>
              </div>
            </div>
          </div>
          <div
            className="col-11 col-sm-3 block-content mx-2 my-2 "
            data-aos="fade-up"
          >
            <div className="position-block1 px-0">
              <img src={icon17} alt="" />
            </div>
            <div className="position-block2 ">
              <div className="position-block2-content">
                <h1>
                  <a href="#">
                    <i class="fa-solid fa-server"></i>
                  </a>
                </h1>
                <h3>Product Design</h3>
                <h5>SQL Server Database</h5>
              </div>
            </div>
          </div>
          <div
            className="col-11 col-sm-3 block-content mx-2 my-2 "
            data-aos="fade-left"
          >
            <div className="position-block1 px-0">
              <img src={icon15} alt="" />
            </div>
            <div className="position-block2 ">
              <div className="position-block2-content">
                <h1>
                  <a href="#">
                    <i class="fab fa-docker"></i>
                  </a>
                </h1>
                <h3>Product Design</h3>
                <h5>Docker Deploy</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------ */}

      <div id="experience" className="my-4"></div>

      <div className="my-5 abount">
        <div className="info-nen">WORK EXPERIENCE</div>
        <h1 className="h1-content my-3" data-aos="fade-up">
          WORK EXPERIENCE
        </h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 expe-h1">
            <div className="img-h1-content" data-aos="zoom-in-right">
              <div className="img-h1-content-img my-4">
                <img src={icon7} alt="" />
              </div>
              <h1 className="my-4">Education</h1>
            </div>

            <div
              className="experience"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="experience-content">
                <h2>Master of Computer Science</h2>
                <h4>Feb 2023 - Present</h4>
                <h3>Bergnaum, Hills and Howe</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  nihil quis voluptatem impedit, illo facilis aspernatur
                  distinctio repudiandae eius. At explicabo tempore eius non
                  consectetur. Nobis praesentium rem accusantium molestias!
                </p>
              </div>
              <div className="experience-content">
                {" "}
                <h2>Bachelor of Computer Science</h2>
                <h4>Jan 2024 - Present</h4>
                <h3>Bergnaum, Hills and Howe</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  nihil quis voluptatem impedit, illo facilis aspernatur
                  distinctio repudiandae eius. At explicabo tempore eius non
                  consectetur. Nobis praesentium rem accusantium molestias!
                </p>
              </div>
              <div className="experience-content">
                {" "}
                <h2>Diploma in Computer Science</h2>
                <h4>Jan 2020 - Present</h4>
                <h3>Bergnaum, Hills and Howe</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  nihil quis voluptatem impedit, illo facilis aspernatur
                  distinctio repudiandae eius. At explicabo tempore eius non
                  consectetur. Nobis praesentium rem accusantium molestias!
                </p>
              </div>
            </div>
          </div>
          {/* --------------------- */}
          <div className="col-12 col-sm-6 expe-h1">
            <div className="img-h1-content" data-aos="zoom-in-left">
              <div className="img-h1-content-img my-4">
                <img src={icon8} alt="" />
              </div>
              <h1 className="my-4">Experience</h1>
            </div>
            <div
              className="experience"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="experience-content">
                <h2>Senior UX/UI Designer</h2>
                <h4>Jan 2020 - Present</h4>
                <h3>Bergnaum, Hills and Howe</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  nihil quis voluptatem impedit, illo facilis aspernatur
                  distinctio repudiandae eius. At explicabo tempore eius non
                  consectetur. Nobis praesentium rem accusantium molestias!
                </p>
              </div>
              <div className="experience-content">
                {" "}
                <h2>Product Designer</h2>
                <h4>Jan 2020 - Present</h4>
                <h3>Bergnaum, Hills and Howe</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  nihil quis voluptatem impedit, illo facilis aspernatur
                  distinctio repudiandae eius. At explicabo tempore eius non
                  consectetur. Nobis praesentium rem accusantium molestias!
                </p>
              </div>
              <div className="experience-content">
                {" "}
                <h2> UX/UI Designer</h2>
                <h4>Jan 2020 - Present</h4>
                <h3>Bergnaum, Hills and Howe</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  nihil quis voluptatem impedit, illo facilis aspernatur
                  distinctio repudiandae eius. At explicabo tempore eius non
                  consectetur. Nobis praesentium rem accusantium molestias!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------ */}

      <div id="contact" className="my-4"></div>

      <div className="my-5 abount">
        <div className="info-nen">CONTACT</div>
        <h1 className="h1-content my-3" data-aos="fade-up">
          CONTACT
        </h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 expe-h1">
            <div className="img-h1-content" data-aos="zoom-in-right">
              <h1 className="my-4">Just say hello</h1>
            </div>

            <div
              className="contact"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="couple-text">
                <input type="text" className="text-input" required />
                <div className="labelline"> Your Name</div>
              </div>
              <div className="couple-text">
                <input type="text" className="text-input" required />
                <div className="labelline"> Your Email</div>
              </div>
              <div className="couple-text">
                <input type="text" required className="text-input" />
                <div className="labelline"> Your Subject</div>
              </div>

              <div className={`couple-text ${isFocused ? "focused" : ""}`}>
                <textarea
                  name="msg"
                  id="msg"
                  cols="20"
                  rows="10"
                  className={`text-input1 ${isValid ? "valid" : ""}`}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onInput={handleInput}
                  value={textValue}
                ></textarea>
                <div className="labelline1">Your Message</div>
              </div>
              <div className="button-name">
                <button className="ntn-button">Send Message</button>
              </div>
            </div>
          </div>
          {/* --------------------- */}
          <div className="col-12 col-sm-6 expe-h1">
            <div className="img-h1-content" data-aos="zoom-in-left">
              <h1 className="my-sm-4">Contact info</h1>
            </div>
            <div
              className="experience px-0"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              incidunt, est non magnam unde sunt veniam ipsum excepturi vero
              quam reiciendis distinctio deleniti accusamus inventore voluptatum
              tempore beatae laudantium quidem.
              <div className="contact-cont my-sm-4 my-3">
                <div className="icon-contact mx-sm-3 me-3">
                  <i class="far fa-envelope"></i>
                </div>
                <div className="span-contact ">
                  <h4>Email</h4>
                  <span className="span1">tinthanhtv2014@gmail.com</span>
                  <br />
                  <span className="span2">info@support.com</span>
                </div>
              </div>
              <div className="contact-cont my-3 my-sm-4">
                <div className="icon-contact mx-sm-3 me-3">
                  <i class="fas fa-phone-square-alt"></i>
                </div>
                <div className="span-contact ">
                  <h4>Phone</h4>
                  <span className="span1">+84 0395890398</span>
                  <br />
                  <span className="span2">+84 0369589333</span>
                </div>
              </div>
              <div className="contact-cont my-3 my-sm-4 ">
                <div className="icon-contact mx-sm-3 me-3">
                  <i class="fas fa-map-marker-alt mx-sm-1"></i>
                </div>
                <div className="span-contact ">
                  <h4>Address</h4>
                  <span className="span1">
                    141 Mau Than street, Tra Vinh City
                  </span>
                  <br />
                  <span className="span2">53 Cau Ngang </span>
                </div>
              </div>
              <div className="h3con">
                <h3>Visit my social profile and get connected</h3>
              </div>
              <div className="link-animationcss my-3">
                <div
                  className={`f1  mx-sm-3 ${hoverIndex === 0 ? "hovered" : ""}`}
                  onMouseEnter={() => handleMouseEnter(0)}
                  onMouseLeave={handleMouseLeave}
                >
                  <i class="fa-brands fa-dribbble mx-sm-3"></i>
                  <span>
                    <a href="https://github.com/tinthanhtv2014">Github</a>
                  </span>
                </div>
                <div
                  className={`f1  mx-1 mx-sm-3 ${
                    hoverIndex === 1 ? "hovered" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={handleMouseLeave}
                >
                  <i class="fa-brands fa-twitter mx-3"></i>
                  <span>Twitter</span>
                </div>
                <div
                  className={`f1  ml-1 mx-sm-3 ${
                    hoverIndex === 2 ? "hovered" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(2)}
                  onMouseLeave={handleMouseLeave}
                >
                  <i class="fa-brands fa-behance mx-sm-3"></i>
                  <span>
                    <a href="https://www.facebook.com/profile.php?id=100034384907284">
                      Facebook
                    </a>
                  </span>
                </div>
                <div
                  className={`f1  mx-1 mx-sm-3 ${
                    hoverIndex === 3 ? "hovered" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(3)}
                  onMouseLeave={handleMouseLeave}
                >
                  <i class="fa-brands fa-linkedin mx-sm-3"></i>
                  <span>LinkedIn</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyComponent;
