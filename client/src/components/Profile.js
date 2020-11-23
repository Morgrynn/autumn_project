import React from "react";
import {Modal, Button, Container, Col, Row, Form} from "react-bootstrap";
import './Profile.css'
export default function ProfileModal(props) {
    return (
        <Modal show={props.showProfile} onHide={props.handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>User profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row className='text-center'>
                        <Col>
                                <h5>Account information</h5>
                                <div className='accountInfo text-left'>
                                    <p>Name: {props.currentUser.username}</p>
                                    <p>Email: {props.currentUser.email}</p>
                                    <p>Balance: {props.currentUser.balance}€</p>
                                </div>
                        </Col>
                        <Col>
                            <div className='profileCategory clearfix'>
                                <h5>Change email</h5>
                                <Form.Group>
                                    <br/>
                                    <Form.Control size="sm" type="text" placeholder={props.currentUser.email} />
                                    <br/>
                                    <Button className='float-right'>Save</Button>
                                </Form.Group>
                            </div>
                        </Col>
                    </Row>
                    <Row className='text-center'>
                        <Col>
                            <div className='profileCategory clearfix mt-2'>
                            <h5>Change password</h5>
                            <Form.Group>
                                <br/>
                                <Form.Control size="sm" type="text" placeholder="Old password" />
                                <br/>
                                <Form.Control size="sm" type="text" placeholder="New password" />
                                <br/>
                                <Button className='float-right'>Save</Button>

                            </Form.Group>
                            </div>
                        </Col>
                        <Col>
                            <div className='profileCategory clearfix mt-2'>
                                <h5>Add balance</h5>
                                <Form.Group>
                                    <br/>
                                    <Form.Control size="sm" type="text" placeholder='Amount' />
                                    <br/>
                                    <Button className='float-right'>Pay</Button>
                                </Form.Group>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Button className='float-right' variant='secondary' onClick={() => props.handleClose()}>Close</Button>
            </Modal.Body>
        </Modal>
    )
}