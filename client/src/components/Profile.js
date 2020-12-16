import React from "react";
import {Modal, Button, Container, Col, Row, Form} from "react-bootstrap";
import './Profile.css'
import {useFormik} from "formik";
import * as Yup from "yup";
import ReportIcon from "@material-ui/icons/Report";
import Axios from "axios";
const baseUrl = process.env.REACT_APP_BASEURL;

export default function ProfileModal(props) {

    const {handleSubmit, handleChange, values, touched, errors, handleBlur, resetForm} = useFormik({
        initialValues: {
            oldPassword: '',
            newPassword: ''
        },
        validationSchema: Yup.object({
            oldPassword: Yup.string().max(250, 'Password is too long!').min(6, 'Password is too short!').required('Password is required!'),
            newPassword: Yup.string().max(250, 'Password is too long!').min(6, 'New password must be at least 6 characters!').required('Password is required!')
        }),

        onSubmit: (values) => {
            console.log('submitted')
            Axios.post(`${baseUrl}user/change_password`, {
                username: props.currentUser.username,
                oldPassword: values.oldPassword,
                newPassword: values.newPassword
            }).then((response) => {
                console.log(response)
                if (response.data === false) {
                    props.handleNotificationsDanger('Wrong password')
                    resetForm()
                } else {
                    props.handleNotificationsSuccess('Your password was updated!')
                    resetForm();
                }
            })
        }
    })


    return (
        <Modal show={props.showProfile} onHide={props.handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>User profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row className='text-center'>
                        <Col>
                                <h5>Account information</h5>
                                <div className='accountInfo text-left'>
                                    <p>Username: {props.currentUser.username}</p>
                                    <p>Email: {props.currentUser.email}</p>
                                    <p>Balance: {props.currentUser.balance}€</p>
                                </div>
                        </Col>
                        <Col>
                            <div >
                                <h5 >Change password</h5>
                                    <form onSubmit={handleSubmit}>
                                    <br/>
                                    <Form.Control size="sm"
                                                  type="password"
                                                  id='oldPassword'
                                                  name='oldPassword'
                                                  placeholder='Old Password'
                                                  value={values.oldPassword}
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}/>
                                    <br/>
                                    {touched.oldPassword && errors.oldPassword ? (
                                        <div className='inputErrors'><ReportIcon className='sidebarIcons'/>{errors.oldPassword}</div>
                                    ) : null }

                                    <Form.Control size="sm"
                                                  type="password"
                                                  id='newPassword'
                                                  name='newPassword'
                                                  placeholder='New Password'
                                                  value={values.newPassword}
                                                  onChange={handleChange}
                                                  onBlur={handleBlur} />
                                    <br/>
                                    {touched.newPassword && errors.newPassword ? (
                                        <div className='inputErrors'><ReportIcon className='sidebarIcons'/>{errors.newPassword}</div>
                                    ) : null }
                                    <Button variant='outline-secondary' type='submit' className='float-right'>Save</Button>
                                    </form>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </Modal.Body>
        </Modal>
    )
}