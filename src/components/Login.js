import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import './Login.css';
import { Card } from 'react-bootstrap';

const SignIn = (props) => {
    return (
        // <Card>
        //     <Card.Body>
        <MDBContainer className='signin-container'>
            <MDBRow>
                <MDBCol md="6">
                    <form>
                        <p className="h5 text-center mb-4">Login</p>
                        <div className="grey-text">
                        <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right" />
                        <MDBInput label="Type your password" icon="lock" group type="password" validate />
                        </div>
                        <div className="text-center">
                            <MDBBtn>Login</MDBBtn>
                            <MDBBtn onClick={props.buttonClick}>Create Account</MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        //     </Card.Body>
        // <Card />
    )
}

export default SignIn;
