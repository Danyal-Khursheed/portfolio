import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Danyal Khursheed </span>
            from <span className="purple"> Islamabad, Pakistan</span>
            <br />
            I am currently employed as a software developer at Juspay.
            <br />
            I have completed Integrated Batchlor (University of Engineering and Technology Peshawar) in Computer Systems Engineering.
            
          
            <br />
            Explore my portfolio showcasing my expertise as a MERN Stack developer. From dynamic web applications to responsive user interfaces, discover how I leverage MongoDB, MySql, Express.js, React.js, and Node.js to create seamless and innovative digital solutions. Take a closer look at my projects and see how I can bring your ideas to life.
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "Want to craft something new !"{" "}
          </p>
          <footer className="blockquote-footer">Danyal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
