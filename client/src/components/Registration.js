import React from "react";
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

export default function RegistrationModal(props) {
    return (
        <Modal show={props.showRegistration} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Registration</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='text-center'>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1"><AccountCircleIcon /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>

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


                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1"><LockIcon /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Confirm Password"
                            aria-label="Confirm Password"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>


                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="success" onClick={props.handleClose}>
                    Register
                </Button>
            </Modal.Footer>
        </Modal>
    )
}