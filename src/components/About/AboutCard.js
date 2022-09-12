import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aditya Kate </span>
            from <span className="purple"> Maharashtra, India.</span>
            <br />Currently... Web-Dev Intern 
@qu_analytics
 ~love development (as i've CS major) and exploring in psychology ~
Life..403
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Doing Research
            </li>
            <li className="about-activity">
              <ImPointRight /> Play a musical instrument
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Truth can be told at the end of the day...
Equality is just fantasy
and most of us go through life denying the fact
that we live in a meritocracy. 
----------------------  
btw, have a good day!"{" "}
          </p>
          <footer className="blockquote-footer">Aditya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
