import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import './Login.css';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';

const SignUp = (props) => {

    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const db = firebase.firestore();
    const usersRef = db.collection("Users");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match.');
        }
        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value, usernameRef.current.value);
            await usersRef.doc(usernameRef.current.value).set({favourites: [], channels: ['General'], directMessages: []})
            history.push('/')
        } catch {
            setError('Sign up failed.')
        }
        setLoading(false);
    }

    return (
        <>
        <Card>
          <Card.Body id="signup-ctnr" className="signup-container">
            <h2 className="text-center mb-4">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form className="form-floating" onSubmit={handleSubmit}>
            <Form.Group id="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" ref={usernameRef} required />
              </Form.Group>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" ref={passwordConfirmRef} required />
              </Form.Group>
              <div className="text-center">
                <Button id="sign-btn" disabled={loading} className="w-50" type="submit">
                  Sign Up
                </Button>
                <p className="unselectable" onClick={props.buttonClick}>Already have an account? Log in</p>
              </div>
            </Form>
          </Card.Body>
        </Card>
        </>
    )
}

export default SignUp;
