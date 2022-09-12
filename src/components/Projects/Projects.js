import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import music from "../../Assets/Projects/music.png";
import HSAM from "../../Assets/Projects/HSAM.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import Quize from "../../Assets/Projects/Quize.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HSAM}
              isBlog={false}
              title="High-School-Admission-Managment"
              description="All the colleges cannot spare their prize for their own website and online admission are really 
convenient. So this website can let multiple collages access our service and also let 
candidates/students to take admissions to respective collages from place of their comfort without 
actually physically visiting the collage."
              ghLink="https://github.com/HighSchool-Admission-WebApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Portfolio"
              description="My personal portfolio website build using Reactjs and Material UI and it provides professional information about an individual and his/her work experience."
              ghLink="https://github.com/Aditya0049/Portfolio"
              demoLink="https://aditya0049.github.io/Portfolio/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Quize}
              isBlog={false}
              title="Quize"
              description="In our project we provide multiple choice questions for users. User can choice any one answer 
among available options. We set one mark for each question. If user select correct answer then 
he score one mark for one question. At the end we show user his score"
              ghLink="https://github.com/Aditya0049/Quize-Project/"
              demoLink="https://aditya0049.github.io/Quize-Project/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Music4Aditya"
              description="This is a music player application build using simple HTML, CSS and JavaScript with one of my friend"
              ghLink="https://github.com/Aditya0049/music4aditya"
              demoLink="https://aroma-musicplayer.netlify.app/"              
            />
          </Col>
        </Row>
        {/* <p style={{ color: "white" }}>
          You can also visit <a href={Git_Profile_Link} rel="noreferrer"> Aditya0049@Github </a> for more...
        </p> */}
        <p style={{ color: "white",  }}>
          I have done some private projects to know more about them you can contact me on my social media handles.
          <br />
          <p style={{ color: "white", fontSize: "40px" }}>
          <b> Freelance projects are also welcomed.</b>
          </p>

        </p>
      </Container>
    </Container>
  );
}

export default Projects;
