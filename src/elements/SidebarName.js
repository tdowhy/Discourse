import React, { useState } from 'react';
import './SidebarName.css';
import FontAwesome from 'react-fontawesome';

const SidebarName = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="unselectable">
            <div className="sidebar-name-content">
            <img className='profile-image' alt='Avatar' src="https://picsum.photos/200" />
            <span onClick={() => setIsOpen(!isOpen)}>Tanner</span>
            {isOpen ? 
            <FontAwesome name="angle-up" onClick={() => setIsOpen(!isOpen)} />
            : <FontAwesome name="angle-down" onClick={() => setIsOpen(!isOpen)} />}
            {isOpen && 
            <ul>
                <li>Change profile picture</li>
                <li>Sign out</li>
            </ul>}
            </div>
        </div>
    )
}

export default SidebarName;
