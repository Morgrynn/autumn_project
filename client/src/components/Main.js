import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import './Main.css'
import Laptop from '../images/laptop.png'

export default function Main() {
    return(
        <div className='main-header'>
            <Container>
                <Row >
                    <Container>
                        <Row>
                            <Col>
                                <div className='mt-2'>
                                    <h1>NYX</h1>
                                </div>
                            </Col>
                            <Col>
                                <div className='float-right mt-2'>
                                <Button  size="sm" variant="outline-secondary">Login</Button>
                                <Button className='ml-3' size="sm" variant="secondary">Register</Button>
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

                    </Container>
                </Row>
            </Container>
        </div>
    )
}