import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/1dollar.png";
import emotion from "../../Assets/Projects/Bagh.png";
import editor from "../../Assets/Projects/isa.png";
import chatify from "../../Assets/Projects/DAS.png";
import suicide from "../../Assets/Projects/csv.png";


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
              imgPath={chatify}
              isBlog={false}
              title="Driving Alertness System"
              description="A MERN (MongoDB, Express.js, React.js, Node.js) project designed to enhance driving safety by detecting and alerting driver drowsiness. Using machine learning algorithms, it analyzes facial expressions and driver behavior in real-time. Stay safe on the road with this innovative driving alertness system."
              ghLink="https://github.com/Danyal-Khursheed/driving-alertness-system"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ISA Consulting"
              description="An online job management system that streamlines task allocation, progress tracking, and team collaboration. Easily assign, monitor, and complete tasks with this intuitive platform. Increase efficiency and productivity in your organization with our user-friendly interface"
              ghLink=""
              demoLink="https://isaconsulting.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="One Dollar"
              description="
              Create your own eCommerce website for just one dollar using WordPress. Our affordable solution provides everything you need to start selling online, including customizable themes, secure payment gateways, and easy product management. Get your business online and start selling today for only $1 with our WordPress eCommerce platform."
              ghLink=""
              demoLink="https://mydollarstore.pk/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="CSv file reader"
              description="A CSV file reader project built using the FERN stack (Firebase, Express.js, React.js, Node.js). Easily upload and view CSV files, with data stored securely on Firebase. Streamline your data management with this efficient and user-friendly solution."
              ghLink="https://github.com/Danyal-Khursheed/csv_file_reader_using_mernsatck"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Bagh Homeo Clinic"
              description="A clinical website developed using the EMRN stack (Express.js, MySql, React.js, Node.js), featuring a comprehensive patient management system. Seamlessly manage patient records, appointments, prescriptions, and medical history with this efficient and secure solution. Streamline your clinic's operations and provide better patient care with our EMRN-based clinical website"
              
              demoLink="https://baghclinic.com/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
