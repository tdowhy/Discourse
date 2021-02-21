import React, { useState } from 'react';
import Login from '../components/Login';
import SignUp from '../components/SignUp'
import Logo from '../elements/Logo';
import './Login.css';
import ReactCardFlip from 'react-card-flip';
import { Container } from 'react-bootstrap';

const LoginPage = () => {
    const [flipped, setFlipped] = useState(false);

    const handleClick = (e) => {
        // e.preventDefault();
        setFlipped(!flipped);
    }

    return (
        <div className="login-container">
        <ReactCardFlip isFlipped={flipped} flipDirection="horizontal" style={{ perspective: "1000px" }}>
            <Login buttonClick={handleClick} />
            <SignUp buttonClick={handleClick} />
        </ReactCardFlip>
        </div>
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