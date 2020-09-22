import React from 'react'
import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import {Link} from "react-router-dom";
import './LoginStyle.css';
import { ReactTitle } from 'react-meta-tags';

export default (props) => (
    <div>
            <ReactTitle title="Login" />
            <p className="welcomePara">Welcome back! Please log in to your account</p>
            <Container>
                <Form>

                    <Form.Group controlId="formLoginUserName">
                        <Form.Control type="text" placeholder="Username" className="loginFormControl" />
                    </Form.Group>
                    <Form.Group controlId="formLoginPassword">
                        <Form.Control type="password" placeholder="Password" className="loginFormControl" />
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
                            <Button type="submit" variant="primary" className="loginBtn">Login</Button>
                        </Col>
                    </Row>

                </Form>
                
                
                <Row>
                    <Col className="registerLink">
                    <Link to="/register" className="linkText"><p>Apply for your smart card here</p></Link>
                    </Col>
                </Row>
            </Container>
            
    </div>
)