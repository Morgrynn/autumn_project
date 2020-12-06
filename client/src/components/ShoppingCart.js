import React from "react";
import {Modal, Button, Container, Col, Row, Form, Image} from "react-bootstrap";

export default function ShoppingCartModal(props) {
    let total = 0;
    return (
        <Modal show={props.showShoppingCart} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Shopping cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.shoppingCart.map((item) => {
                    total += parseFloat(item.price)
                    return(
                        <div>
                            <Container>
                                <Row>
                                    <Col xs={3}>
                                        <Image
                                            src={`${'http://localhost:5000/'}${item.image}`}
                                            thumbnail
                                            style={{ maxWidth: '100%' }}

                                        />
                                    </Col>
                                    <Col className='text-left'>
                                        <h6 className='d-inline'>{item.name}</h6>
                                    </Col>
                                </Row>
                            </Container>
                            <div className='p-3'>

                            </div>


                        </div>
                        )
                })}
                <p>total: {total.toFixed(2)}</p>
            </Modal.Body>
        </Modal>
    )
}
