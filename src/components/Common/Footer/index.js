import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

export default () => (

    <div className="footerDiv">
        <Row className="footerRow">
            <Col><p> &copy; 2020<span className="companyName"> SLTB. </span>All Rights Reserved</p></Col>
            <Col className="footerLinksColumn">
                <div className="footerLinks">
                    <Link href="#"><p className="aboutTag"><span>ABOUT</span></p></Link>
                    <Link href="#"><p><span>TERMS AND CONDITIONS</span></p></Link>
                </div>
            </Col>
        </Row>
    </div>
)