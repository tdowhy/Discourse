import React, { useState } from 'react';
import { FaSlackHash } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import FontAwesome from 'react-fontawesome';
import './Channels.css';

const Channels = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="unselectable">
            <div className="channel">
                <div className="channel-title">
                <FaSlackHash size={20} />
                <span onClick={() => setIsOpen(!isOpen)}>Channels</span>
                {isOpen ? 
                <FontAwesome name="angle-up" onClick={() => setIsOpen(!isOpen)} />
                : <FontAwesome name="angle-down" onClick={() => setIsOpen(!isOpen)} />}
                <FiPlus size={15} className="add-icon" />
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

export default Channels;
