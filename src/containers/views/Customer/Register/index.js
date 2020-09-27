import React from 'react'
import { Button, Col, Container, Row, Form,Image,Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './RegisterStyle.css';
import { ReactTitle } from 'react-meta-tags';

export default (props) => (

    <div>
        <ReactTitle title="Register" />

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

                                    <Container>
                                        <p className="registerPara">Welcome! Please complete following steps to apply smart card.</p>
                                        <Form>
                                            <Form.Group controlId="formRegisterCustomerName">
                                                <Form.Control type="text" placeholder="CustomerName" className="loginRegisterFormControl" />
                                            </Form.Group>
                                            <Form.Group controlId="formRegisterEmail">
                                                <Form.Control type="text" placeholder="Email" className="loginRegisterFormControl" />
                                            </Form.Group>
                                            <Form.Group controlId="formRegisterMobile">
                                                <Form.Control type="number" placeholder="Mobile Number" className="loginRegisterFormControl" />
                                            </Form.Group>
                                            <Form.Group controlId="formRegisterPassword">
                                                <Form.Control type="password" placeholder="Password" className="loginRegisterFormControl" />
                                            </Form.Group>
                                            <Form.Group controlId="formRegisterRePassword">
                                                <Form.Control type="password" placeholder="Re-Type-Password" className="loginRegisterFormControl" />
                                            </Form.Group>
                                            <Row>
                                                <Col>
                                                    <Button type="submit" variant="primary" className="loginRegisterBtn">Register</Button>
                                                </Col>
                                            </Row>

                                        </Form>


                                        <Row>
                                            <Col className="loginRegisterLink">
                                                <Link to="/" className="linkText"><p>Already Have An Account?</p></Link>
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