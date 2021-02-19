import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import styled from 'styled-components';

const SignUp = (props) => {

    const HoverText = styled.p`
	color: #000;
	:hover {
		color: #ed1212;
		cursor: pointer;
	}
`

    return (
        <MDBContainer className='signin-container'>
            <MDBRow>
                <MDBCol md="6">
                    <form>
                        <p className="h5 text-center mb-4">Sign Up</p>
                        <div className="grey-text">
                            <MDBInput label="Username" icon="user" group type="text" success="right" />
                            <MDBInput label="Email" icon="envelope" group type="email" validate error="wrong" success="right" />
                            <MDBInput label="Password" icon="lock" group type="password" validate />
                            <MDBInput label="Confirm Password" icon="lock" group type="password" validate />
                            <HoverText onClick={props.buttonClick}>Back to sign in</HoverText>
                        </div>
                        <div className="text-center">
                            <MDBBtn>Create Account</MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default SignUp;
