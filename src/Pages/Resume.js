import React from "react";
import ResumePDF from '../static/Resume-dev.jpg';
import { Container } from "react-bootstrap";
import TopNav  from "../nav2";

const Resume = () => {
    
    return (
        <Container> 
          <TopNav />
        <Container fluid className="banner">
        <img src={ResumePDF} className="resumeImage"></img>
        </Container>
        </Container>
    )
} 

export default Resume;