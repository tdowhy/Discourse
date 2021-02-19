import React, { useState } from 'react';
import { MdMessage } from "react-icons/md";
import FontAwesome from 'react-fontawesome';
import './DirectMessages.css';

const DirectMessages = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="unselectable">
            <div className="dm">
                <div className="dm-title">
                <MdMessage size={20} />
                <span onClick={() => setIsOpen(!isOpen)}>Direct Messages</span>
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

export default DirectMessages;