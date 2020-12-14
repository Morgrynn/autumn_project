import React from "react";
import {Button, Col, Container, Image, Modal, Row} from "react-bootstrap";
import DeleteIcon from '@material-ui/icons/Delete';

export default function ShoppingCartModal(props) {
    let total = 0;

    const DeleteItem = (itemId) => {
        console.log(props.shoppingCart)
        const updatedShoppingCart = props.shoppingCart.filter((item) => item.id !== itemId);
        props.addToShoppingCart(updatedShoppingCart)
    }
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
                                        <h6 className='d-inline'>{item.name}</h6><br/>
                                        <h5 className='mt-1'><b>€{item.price}</b></h5>
                                    </Col>
                                    <Col>
                                        <Button variant='danger' size='sm' className='mt-3' onClick={() => DeleteItem(item.id)}> <DeleteIcon />Delete</Button>
                                    </Col>
                                </Row>
                            </Container>
                            <div className='p-3'>

                            </div>


                        </div>
                        )
                })}
                {props.shoppingCart.length ?
                    <div>
                    <hr/>
                    <h6>Total: €{total.toFixed(2)}</h6><br/>
                    <Button variant='danger' onClick={() => props.addToShoppingCart([])}>Clear cart</Button>
                    <Button className='float-right' onClick={() => console.log(props.loggedIn)}>Proceed to payment</Button>
                    </div>
                    : <span>Shopping cart is empty</span>
                }
            </Modal.Body>
        </Modal>
    )
}
