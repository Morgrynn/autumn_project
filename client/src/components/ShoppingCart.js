import React from "react";
import {Modal, Button, Container, Col, Row, Form} from "react-bootstrap";
import './Profile.css'

export default function ShoppingCartModal(props) {
    return (
        <Modal show={props.showShoppingCart} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Shopping cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}