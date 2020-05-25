import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import logo from './static/logo.png'

class List extends Component{
    render(){
        const experiences = [
            {
                icon: logo,
                title: 'Developer | Coordinator at IMG, IIT Roorkee ',
                about: "Information Management Group (IMG) is the student body\
                that developed, manages and upgrades both the content\
                management system powering the IIT Roorkee website and\
                Channel i, the official intranet portal.",
            },
            {
                icon: logo,
                title: 'Software Developer Summer internship | Radicali Pte. Ltd.',
                about: "Radical i is a Singapore based startup working to make compliance teams ridiculously efficient.\
                Built their website along with coming up with UI aspects, coded a seamless website on react.js and worked on SEO optimization.",
            },
            {
                icon: logo,
                title: 'Full Stack Developer internship at Dataphi Analytics Labs',
                about: "Dataphi Labs builds digital product for clients catering their requirements, and helping them reach idea to revenue faster.",
            },
            {
                icon: logo,
                title: 'Full stack developer intern at Korangle',
                about: "Korangle provides technical solution to educational institutes for easy, hassle free and paper free management of their institutional requirements.",
            }
        ]

        const exp = experiences.map((row,index) => {
            return(
                <Row className="project-item">
                    <Col md={1} >
                        <img src = {row.icon} className= "logo-icon" />
                    </Col>
                    <Col md={3}>
                        <h6> {row.title} </h6>
                    </Col>

                    <Col>
                        <p> {row.about}</p>
                    </Col>
                </Row>
            )
        })

        return (
            <Container fluid className="list-container">
                <Row>
                <h1>
                    Experience
                </h1>
                </Row>
                {exp}
            </Container>
        )
    }
}

export default List;