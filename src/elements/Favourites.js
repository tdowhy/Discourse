import React, { useState } from 'react';
import { AiFillStar } from "react-icons/ai";
import FontAwesome from 'react-fontawesome';
import './Favourites.css';

const Favourites = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="unselectable">
            <div className="favourites">
                <div className="favourites-title">
                <AiFillStar size={20} />
                <span onClick={() => setIsOpen(!isOpen)}>Favourites</span>
                {isOpen ? 
                <FontAwesome name="angle-up" onClick={() => setIsOpen(!isOpen)} />
                : <FontAwesome name="angle-down" onClick={() => setIsOpen(!isOpen)} />}
                </div>
                {isOpen && 
                <ul>
                    <li># Channel 1</li>
                    <li># Channel 2</li>
                </ul>}
            </div>
        </div>
    )
}

export default Favourites;
