import React from "react";
import {Modal, Button} from "react-bootstrap";

export default function ProfileModal(props) {
    return (
        <Modal show={props.showProfile} onHide={props.handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
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