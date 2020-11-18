import React from "react";
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import Axios from "axios";
import {useFormik} from "formik";

export default function LoginModal(props) {

    const {handleSubmit, handleChange, values, isSubmitting, resetForm} = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: (username,password) => {
            Axios.post("http://localhost:5000/login", {
                username: values.username,
                password: values.password
            }).then((response) => {
                if(response.data !== false) {
                    props.setLoggedIn(true)
                    props.setCurrentUser(response.data[0])
                    props.handleClose()
                    resetForm()
                } else {
                    props.handleNotificationsDanger('Wrong username or password')
                    resetForm()
                }
            })
        }
    })

    return (
        <Modal show={props.showRegistration} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <form onSubmit={handleSubmit}>
            <Modal.Body>
                <div className='text-center'>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1"><EmailIcon /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            onChange={handleChange}
                            value={values.username}
                            placeholder="Username"
                            id='username'
                            name='username'
                        />
                    </InputGroup>


                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1"><LockIcon /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            value={values.password}
                            onChange={handleChange}
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Your password'
                        />
                    </InputGroup>

                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" type="submit" disabled={isSubmitting}>
                    Login
                </Button>
            </Modal.Footer>
            </form>
        </Modal>
    )
}