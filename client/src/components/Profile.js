import React from "react";
import {Modal, Button, Container, Col, Row, Form} from "react-bootstrap";

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
                                <h5>Change password</h5>
                            <Form.Group>
                                <br/>
                                <Form.Control size="sm" type="text" placeholder="Old password" />
                                <br/>
                                <Form.Control size="sm" type="text" placeholder="New password" />
                                <br/>
                                <Button className='float-right'>Save</Button>

                            </Form.Group>
                        </Col>
                        <Col>
                                <h5>Change email</h5>
                                <Form.Group>
                                    <br/>
                                    <Form.Control size="sm" type="text" placeholder={props.currentUser.email} />
                                    <br/>
                                    <Button className='float-right'>Save</Button>

                                </Form.Group>
                        </Col>
                    </Row>
                    <Row className='text-center'>
                        <Col>

                        </Col>
                        <Col>
                            <h5>Add balance</h5>
                            <Form.Group>
                                <br/>
                                <Form.Control size="sm" type="text" placeholder='Amount' />
                                <br/>
                                <Button className='float-right'>Pay</Button>

                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    )
}