import React from "react";
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

export default function LoginModal(props) {
    return (
        <Modal show={props.showRegistration} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='text-center'>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1"><EmailIcon /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Email"
                            aria-label="Email"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>


                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1"><LockIcon /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Password"
                            aria-label="Password"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>

                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="success" onClick={() => {
                    props.setLoggedIn(true)
                    props.handleClose()}}
                >
                    Login
                </Button>
            </Modal.Footer>
        </Modal>
    )
}