import React, { useState, useRef } from 'react'
import './Login.css';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

const SignIn = (props) => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            setLoading(false);
            history.push('/')
        } catch {
            setError('Sign in failed.')
        }
    }

    return (
        <Card>
        <Card.Body className="login-ctnr">
          <h2 className="text-center mb-4">Sign In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form className="form-floating" onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <div className="text-center">
            <Button disabled={loading} id="login-btn" className="w-50" type="submit">
              Sign In
            </Button>
            <p className="unselectable" onClick={props.buttonClick}>Don't have an account? Sign Up</p>
            </div>
          </Form>
        </Card.Body>
      </Card>
    )
}

export default SignIn;
