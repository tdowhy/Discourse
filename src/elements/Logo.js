import React from 'react';
import { GiAstronautHelmet } from "react-icons/gi";
import './Logo.css';

const Logo = (props) => {
    return (
        <div className='logo'>
            <p>
                <GiAstronautHelmet className="astronaut-icon" size={props.size} />
                <span className="title">Discourse</span>
            </p>
        </div>
    )
}

export default Logo;
