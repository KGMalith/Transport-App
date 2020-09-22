import React from 'react'
import {Col, Container, Row, Image, Card, Form } from 'react-bootstrap';
import './MainStyle.css'

export default ({ children }) => {

    console.log('render Main')

    return (
        <div>
            <Container>
                <Row>
                    <Col sm={5}>
                        <Image src="./images/Bus.png" className="busImage" />
                    </Col>
                    <Col sm={{ span: 6, offset: 1 }}>
                        <Container className="formContainer">
                            <Card>
                                <Col sm={{ span: 10, offset: 1 }}>
                                    <Form className="LoginForm">
                                        <Row>
                                            <Col className="imageColumn">
                                                <Image src="./images/Logo.jpg" className="companyLogo" />
                                                <p className="imageTopic">Citizen's Portal</p>
                                            </Col>
                                        </Row>
                                        {children}
                                    </Form>
                                </Col>
                            </Card>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}