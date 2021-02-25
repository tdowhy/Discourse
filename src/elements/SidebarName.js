import React, { useState } from 'react';
import './SidebarName.css';
import FontAwesome from 'react-fontawesome';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';

const SidebarName = () => {
    const { currentUser, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState('');
    const [upload, setUpload] = useState(false)
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

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <div className="unselectable">
            <Modal
                show={upload}
                onHide={() => setUpload(false)}
                dialogClassName="modal-90w"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Upload a profile picture
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                        <Form.File label="Select your image" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
            <div className="sidebar-name-content">
            <img className='profile-image' alt='Avatar' src="https://picsum.photos/200" />
            <span onClick={() => setIsOpen(!isOpen)}>{currentUser.displayName}</span>
            {isOpen ? 
            <FontAwesome name="angle-up" onClick={() => setIsOpen(!isOpen)} />
            : <FontAwesome name="angle-down" onClick={() => setIsOpen(!isOpen)} />}
            {isOpen && 
            <ul>
                <li oncClick={() => setUpload(true)}>Change profile picture</li>
                <li onClick={handleLogout}>Sign out</li>
            </ul>}
            </div>
        </div>
    )
}

export default SidebarName;
