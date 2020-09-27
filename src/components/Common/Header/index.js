import React from 'react';
import { Navbar,Nav,Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';


export default () => {

    return (
        <div>
            <Navbar expand="lg" className="navBarTop">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/images/Logo.jpg"
                        width="100"
                        height="60"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" className="navbarsTop">DASHBOARD</Nav.Link>
                        <Nav.Link href="#features" className="navbarsTop">TRIPS</Nav.Link>
                        <Nav.Link href="#pricing" className="navbarsTop">PAYMENTS</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className="amountTag">BALANCE | LKR<span className="amount">1200.00</span></Nav.Link>
                        <Button type="submit" className="topUpBtn">TOPUP YOUR ACCOUNT</Button>
                    </Nav>
                </Navbar.Collapse>
               
            </Navbar>
            <div className="navBarBottom">
                <Row className="navBottomRow">
                    <Col>
                        <p><span className="userName">Hello Saman. </span>Welcome here.</p>
                    </Col>
                    <Col className="columnReport">
                        <p className="reports">REPORTS : <span> 01.04.2019 to 30.04.2019</span></p>
                    </Col>
                </Row>
            </div>
        </div>
    )

}