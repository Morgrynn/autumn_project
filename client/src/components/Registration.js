import React from "react";
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import ReportIcon from '@material-ui/icons/Report';
import {useFormik,} from "formik";
import * as Yup from "yup";
import Axios from "axios";
import './Registration.css';
const baseUrl = process.env.REACT_APP_BASEURL;

export default function RegistrationModal(props) {

    const {handleSubmit, handleChange, values, touched, errors, handleBlur, resetForm, isSubmitting} = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirm_password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().max(100, 'Username is too long!').min(2, 'Username is too short!').required('Username is required!'),
            email: Yup.string().email('Invalid email').max(250, 'Email is too long!').min(8, 'Email must be at least 8 characters!').required('Email is required!'),
            password: Yup.string().max(250, 'Password is too long!').min(6, 'Password must be at least 6 characters!').required('Password is required!'),
            confirm_password: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Password confirmation is required!')
        }),
        onSubmit: () =>  {
            Axios.post(`${baseUrl}register`, {
                username: values.username,
                email: values.email,
                password: values.password,
                balance: 0
            }).then((response) => {
                console.log(response.data)
                if (response.data === false) {
                    props.handleNotificationsDanger('Username is already in use')
                    props.handleClose()
                    resetForm();
                } else if (response.data === true) {
                    props.handleNotificationsSuccess('You have successfully been registered!')
                    props.handleClose()
                    resetForm();
                }

            })

        }
    })

    return (
        <Modal show={props.showRegistration} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Registration</Modal.Title>
            </Modal.Header>
            <form onSubmit={handleSubmit}>
            <Modal.Body>
                <div className='text-center'>

                    <InputGroup className="mb-3" >
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1"><AccountCircleIcon /></InputGroup.Text>
                        </InputGroup.Prepend>

                        <FormControl
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.username}
                            placeholder="Username"
                            id='username'
                            name='username'
                        />
                    </InputGroup>
                    {errors.username && touched.username && errors.username ? (
                        <div className='inputErrors'><ReportIcon className='sidebarIcons'/>{errors.username}</div>
                    ) : null }

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1"><EmailIcon /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            placeholder="Email"
                            id='email'
                            name='email'
                        />
                    </InputGroup>
                    {touched.email && errors.email ? (
                        <div className='inputErrors'><ReportIcon className='sidebarIcons'/>{errors.email}</div>
                    ) : null }


                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1"><LockIcon /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            onBlur={handleBlur}
                            value={values.password}
                            onChange={handleChange}
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Your password'
                        />
                    </InputGroup>
                        {touched.password && errors.password && (
                            <div className='inputErrors'><ReportIcon className='sidebarIcons'/>{errors.password}</div>
                        ) }

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1"><LockIcon /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            onBlur={handleBlur}
                            value={values.confirm_password}
                            onChange={handleChange}
                            type='password'
                            id='confirm_password'
                            name='confirm_password'
                            placeholder='Confirm your password'
                        />
                    </InputGroup>
                        {touched.confirm_password && errors.confirm_password && (
                            <div className='inputErrors'><ReportIcon className='sidebarIcons'/>{errors.confirm_password}</div>
                        ) }
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="success" type="submit" disabled={isSubmitting} >
                    Register
                </Button>
            </Modal.Footer>
            </form>

        </Modal>
    )
}