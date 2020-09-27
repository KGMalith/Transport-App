import React from 'react'
import { Button, Col, Container, Row, Form, Card, Image } from 'react-bootstrap';
import './DashboardBody.css';

export default () => (
    <div>
        <div className="backgroundStripe"></div>
        <div className="backgroundStripeBottom">
            <div>
                <Row className="bodyRow">
                    <Col sm={{ span: 3, offset: 1 }} className="leftsideCardsColumn">
                        <Card className="userDetailsCard">
                            <Row>
                                <Col className="cardDetailsColumn">
                                    <Image src="./images/profile.png" className="profileImage" roundedCircle />
                                </Col> 
                            </Row> 
                            <Row>
                                <Col className="cardDetailsColumn">
                                    <Card.Title className="customerName">Emily Watson</Card.Title>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="cardEmailColumn">
                                    <Card.Text className="customerEmail">emily.w@gmail.com</Card.Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="cardNumberColumn">
                                    <Card.Text className="customerNumber">+94 0776358579</Card.Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="cardBtnColumn">
                                    <Button variant="primary" className="logoutBtn">LOG OUT</Button>
                                </Col>
                            </Row>
                        </Card> 
                        <Card className="statisticsCard">
                            <Row>
                                <Col className="graphColumn">
                                    <Image src="./images/lineChart.png" className="graphImage" />
                                </Col>
                            </Row>
                                <div className="tripsDiv">
                                    <Card.Text className="tripAmount">124</Card.Text>
                                    <Card.Text className="trips">TRIPS</Card.Text>
                                </div>
                            
                        </Card>
                    </Col>
                    <Col sm={{ span: 7, offset: 1 }}>
                        <Card className="userRecentTripsCard">
                            <Card.Header className="recentTripCardHeader">RECENT TRIPS</Card.Header>
                            <Card.Body>
                                <Row className="twoTripDetailsRow">
                                    <Col className="oneTripDetailsColumn">
                                        <Row className="oneTripDetailRow">
                                            <Col sm={2} className="colPaddingRmv">
                                                <Card.Text className="tripTime">08:34AM</Card.Text>
                                                <Card.Text className="tripDate">02 AUG 2020</Card.Text>
                                            </Col>
                                            <Col className="driverDetailsColumn colPaddingRmv">
                                                <Image src="./images/profile.png" className="recentTripsDriverImage" roundedCircle />
                                                <div>
                                                    <Card.Text className="driverDetails">P.G. Herath <span>(SP HA-2355)</span></Card.Text>
                                                    <Card.Text className="busRoute">HAMBANTHOTA - GALLE</Card.Text>
                                                </div>
                                            </Col>
                                            <Col sm={2} className="colPaddingRmv">
                                                <Card.Text className="tripCost">LKR<span>58.00</span></Card.Text>
                                                <Card.Text className="tripCode">SL2020Yhh502</Card.Text>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col className="oneTripDetailsColumn">
                                        <Row className="oneTripDetailRow">
                                            <Col sm={2} className="colPaddingRmv">
                                                <Card.Text className="tripTime">08:34AM</Card.Text>
                                                <Card.Text className="tripDate">02 AUG 2020</Card.Text>
                                            </Col>
                                            <Col className="driverDetailsColumn colPaddingRmv">
                                                <Image src="./images/profile.png" className="recentTripsDriverImage" roundedCircle />
                                                <div>
                                                    <Card.Text className="driverDetails">P.G. Herath <span>(SP HA-2355)</span></Card.Text>
                                                    <Card.Text className="busRoute">HAMBANTHOTA - GALLE</Card.Text>
                                                </div>
                                            </Col>
                                            <Col sm={2} className="colPaddingRmv">
                                                <Card.Text className="tripCost">LKR<span>58.00</span></Card.Text>
                                                <Card.Text className="tripCode">SL2020Yhh502</Card.Text>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="viewMoreBtnColumn">
                                        <Button variant="primary" className="viewAllBtn">VIEW ALL</Button>
                                    </Col>
                                </Row>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
)