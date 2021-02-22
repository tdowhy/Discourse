import React, { useState } from 'react';
import './SidebarName.css';
import FontAwesome from 'react-fontawesome';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

const SidebarName = () => {
    const { currentUser, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState('');
    const history = useHistory();


    const handleLogout = async () => {
        setError('');
        try {
            await logout();
            history.push('/login');
        } catch {
            setError('Failed to log out');
        }
    }

    return (
        <div className="unselectable">
            <div className="sidebar-name-content">
            <img className='profile-image' alt='Avatar' src="https://picsum.photos/200" />
            <span onClick={() => setIsOpen(!isOpen)}>{currentUser.displayName}</span>
            {isOpen ? 
            <FontAwesome name="angle-up" onClick={() => setIsOpen(!isOpen)} />
            : <FontAwesome name="angle-down" onClick={() => setIsOpen(!isOpen)} />}
            {isOpen && 
            <ul>
                <li>Change profile picture</li>
                <li onClick={handleLogout}>Sign out</li>
            </ul>}
            </div>
        </div>
    )
}

export default SidebarName;
