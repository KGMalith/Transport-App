import React from 'react'
import { Button, Col, Container, Row, Form, Card, Image } from 'react-bootstrap';
import {Link} from "react-router-dom";
import './LoginStyle.css';
import { ReactTitle } from 'react-meta-tags';

export default (props) => (
    <div>
            <ReactTitle title="Login" />
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
                                                <Image src="./images/Logo.jpg" className="companyLogo"/>
                                            <p className="imageTopic">Citizen's Portal</p>
                                        </Col>
                                    </Row>
                                    <Container>
                                        <p className="welcomePara">Welcome back! Please log in to your account</p>
                                        <Form.Group controlId="formLoginEmailName">
                                            <Form.Control type="email" placeholder="Email" className="loginRegisterFormControl" />
                                        </Form.Group>
                                        <Form.Group controlId="formLoginPassword">
                                            <Form.Control type="password" placeholder="Password" className="loginRegisterFormControl" />
                                        </Form.Group>
                                        <Row>
                                            <Col className="contentCheckBox">
                                                <Form.Group controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Remember me" />
                                                </Form.Group>
                                            </Col>
                                            <Col className="contentForgotPassword">
                                                <Link to="#" className="linkText"><p>Forgot Password</p></Link>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Button type="submit" variant="primary" className="loginRegisterBtn">Login</Button>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col className="loginRegisterLink">
                                                <Link to="/register" className="linkText"><p>Apply for your smart card here</p></Link>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Form>
                            </Col>
                        </Card>
                    </Container>
                </Col>
            </Row>
        </Container>      
            
    </div>
)