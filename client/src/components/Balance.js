import React from "react";
import {Modal, Button, Container, Col, Row, Form} from "react-bootstrap";

export default function BalanceModal(props) {
    return (
        <Modal show={props.showBalance} onHide={() => props.setShowBalance(false)} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Add balance</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row className='text-center'>
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
            </Modal.Body>
        </Modal>
    )
}