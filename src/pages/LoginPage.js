import React, { useState } from 'react';
import Login from '../components/Login';
import SignUp from '../components/SignUp'
import Logo from '../elements/Logo';
import './Login.css';
import ReactCardFlip from 'react-card-flip';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext';

const LoginPage = () => {
    const [flipped, setFlipped] = useState(false);

    const handleClick = (e) => {
        // e.preventDefault();
        setFlipped(!flipped);
    }

    return (
        // <AuthProvider>
            <Container className="justify-content-center align-items-center">
                <div className="login-form-container">
                    <ReactCardFlip isFlipped={flipped} flipDirection="horizontal" style={{ minWidth: "400px", perspective: "2000px" }}>
                        <Login buttonClick={handleClick} />
                        <SignUp className="flip-card" buttonClick={handleClick} />
                    </ReactCardFlip>
                </div>
            </Container>
        // </AuthProvider>
    )
}

export default LoginPage;


{/* <div className="login-container"> */}
{/* <SignIn /> */}
{/* <SignUp /> */}
{/* </div> */}

{/* <Container>
<Logo />
<div className="login-container">
    <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
        <Login buttonClick={handleClick} />
        <SignUp buttonClick={handleClick} />
    </ReactCardFlip>
</div>
</Container> */}