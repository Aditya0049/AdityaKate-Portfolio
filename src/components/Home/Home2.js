import React from "react";
import { Container, Row, Col, CardImg } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaImage, FaLinkedinIn } from "react-icons/fa";
import scan_me from "../../Assets/scan_me.png";
import Image from "react-bootstrap/Image";
import Github from "../About/Github";

let Profile_Pic = 'https://media-exp1.licdn.com/dms/image/C5603AQG0CTdL4zsAGw/profile-displayphoto-shrink_400_400/0/1635059075189?e=1667433600&v=beta&t=WFxsU_d4wktbDBSmFT3n1Lks49uDiMxrqbq0bpq-UtQ';

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container class="content-center text-center">
        <Row md={8} className="home-about-description" >
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I am a self-taught programmer and I am currently working as freelance web developer.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Java, Javascript, C++. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Artificial Intalligence.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <Github />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Aditya0049"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/adityababankate"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/adityakate/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
        <div style={{ display: "inline-block", width: 1200}}>
          <Image
            src={scan_me} width="200" height="200"
          />
        </div>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
