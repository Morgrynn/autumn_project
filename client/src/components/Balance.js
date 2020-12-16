import React, {useState} from "react";
import {Modal, Button, Container, Col, Row, Form} from "react-bootstrap";
import Axios from "axios";
const baseUrl = process.env.REACT_APP_BASEURL;

export default function BalanceModal(props) {

    const [amount, setAmount] = useState('')

    const addBalance = (sum) => {
        Axios.post(`${baseUrl}user/add_balance`, {
            username: props.currentUser.username,
            amount: sum
        }).then((response) => {
                props.setShowBalance(false)
                props.handleNotificationsSuccess('Balance has been added')
                props.setCurrentUser(response.data[0])
            }
        )
    }

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
                                    <Form.Control size="sm" type="text" placeholder='Amount' value={amount} onChange={e => setAmount(e.target.value)}/>
                                    <br/>
                                    <Button className='float-right' variant='outline-secondary' onClick={() => addBalance(amount)}>Add</Button>
                                </Form.Group>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    )
}