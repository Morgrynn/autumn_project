import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import './Main.css'
import Laptop from '../images/laptop.png'

export default function Main() {
    return(
        <div>
        <div className='main-header'>
            <Container>
                <Row >
                    <Container>
                        <Row>
                            <Col>
                                <div className='mt-2'>
                                    <h1>LOGO</h1>
                                </div>
                            </Col>
                            <Col>
                                <div className='float-right mt-2'>
                                <Button style={{width: "100px"}} size="sm" variant="outline-secondary">Login</Button>
                                <Button style={{width: "100px"}} className='ml-3' size="sm" variant="secondary">Register</Button>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={2}>

                            </Col>
                            <Col className='mt-5'>
                                <h2>UPGRADE!</h2>
                                <div className='shop-text'>
                                    Get yourself a brand new PC <br /> at a great price</div>
                                <Button className='mt-2' style={{width: '155px'}} size="md" variant="secondary">Shop now</Button>
                            </Col>
                            <Col  className='p-1'>
                                <div className=' main-picture'>
                                    <img className='laptop-pic' src={Laptop} alt="Logo" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>

                            </Col>
                            <Col xs={9}>
                                <div className='nav-category'>
                                    <div className='nav-menu-item p-3 ml-3 nav-chosen-category'>
                                        Trending
                                    </div>
                                    <div className='nav-menu-item p-3 ml-2'>
                                        CPU
                                    </div>
                                    <div className='nav-menu-item p-3 ml-2'>
                                        Motherboards
                                    </div>
                                    <div className='nav-menu-item p-3 ml-2'>
                                        GPU
                                    </div>
                                    <div className='nav-menu-item p-3 ml-2'>
                                        Memory
                                    </div>
                                    <div className='nav-menu-item p-3 ml-2'>
                                        Storage
                                    </div>
                                    <div className='nav-menu-item p-3 ml-2'>
                                        Power supplies
                                    </div>
                                </div>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                        <Row className='mt-3 mb-3'>
                            <Col></Col>
                            <Col xs={9}>
                                <div className='nav-menu'>
                                </div>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </div>
        <Container className='mt-5'>
            <Row>
                <Col>

                </Col>
                <Col xs={9}>
                    <div className='main-title text-center'>Trending</div>
                </Col>
                <Col>

                </Col>
            </Row>
        </Container>
        </div>
    )
}