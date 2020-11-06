import React from "react";
import {Container, Row, Col, Button, Table, Card, ListGroup, ListGroupItem} from "react-bootstrap";
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
                                    <div className='nav-menu-item p-3 ml-3'>
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
                            <Col>

                            </Col>
                            <Col xs={9}>
                                <input type='text' className='nav-menu'>
                                </input>
                            </Col>
                            <Col>

                            </Col>
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
            <Row>
                <Col>
                    <Card className='mt-3'>
                        <Card.Header className='text-center'><b>Sort by</b></Card.Header>
                        <ListGroup.Item className='text-center'>
                            <input className='m-auto' type='radio' value='name' name="sort-by"/>
                            <label className='ml-1'>Name</label>
                            <input type='radio' value='price' name="sort-by" className='ml-5'/>
                            <label className='ml-1'>Price</label>
                        </ListGroup.Item>
                        <Card.Header className='text-center'><b>Price</b> </Card.Header>
                        <ListGroup.Item className='text-center'>
                            <input type='text' className='price-range-input mr-2' placeholder='min'/> – <input type='text' placeholder='max' className='ml-2 price-range-input'/>
                        </ListGroup.Item>
                        <Card.Header className='text-center'><b>Manufacturer</b> </Card.Header>
                        <ListGroup.Item className='text-center'>
                            <div>
                                <input type='checkbox' /> <label> HP </label>
                                <input type='checkbox' className='ml-2' /> <label> Intel </label>
                                <input type='checkbox' className='ml-2' /> <label> AMD </label> <br/>
                                <input type='checkbox' className='ml-2' /> <label> Lenovo </label>
                                <input type='checkbox' className='ml-2' /> <label> Samsung </label>
                            </div>
                        </ListGroup.Item>
                    </Card>
                </Col>
                <Col xs={9} className='text-center mt-3'>
                    <Container>
                        <Row>
                            <Col>
                                <Card >
                                    <Card.Img variant="top" className='p-2' src={Laptop}  style={{ width: '15rem' }} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" className='p-2' src={Laptop} style={{ width: '15rem' }} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" className='p-2' src={Laptop} style={{ width: '15rem' }} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
        </div>
    )
}