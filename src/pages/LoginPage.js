import React, { useState } from 'react';
import Login from '../components/Login';
import SignUp from '../components/SignUp'
import Logo from '../elements/Logo';
import './Login.css';
import ReactCardFlip from 'react-card-flip';

const LoginPage = () => {
    const [flipped, setFlipped] = useState(false);

    const handleClick = (e) => {
        // e.preventDefault();
        setFlipped(!flipped);
    }

    return (
        <div>
            <Logo />
            <div className="login-container">
                <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
                    <Login buttonClick={handleClick} />
                    <SignUp buttonClick={handleClick} />
                </ReactCardFlip>
            </div>
        </div>
    )
}

export default LoginPage;


{/* <div className="login-container"> */}
{/* <SignIn /> */}
{/* <SignUp /> */}
{/* </div> */}