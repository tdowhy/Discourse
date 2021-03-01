import React, { useState, useEffect } from 'react';
import './SidebarName.css';
import FontAwesome from 'react-fontawesome';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { Form, Button } from 'react-bootstrap';
import 'firebase/storage'
import firebase from 'firebase/app'

const SidebarName = () => {
    const { currentUser, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState('');
    const [upload, setUpload] = useState(false);
    const history = useHistory();
    const [imgURL, setImgURL] = useState('https://cdn.pixabay.com/photo/2016/11/05/20/09/grooming-1801287_960_720.png');

    const handleLogout = async () => {
        setError('');
        try {
            await logout();
            history.push('/login');
        } catch {
            setError('Failed to log out');
        }
    }

    // useEffect (() => {
    //     const r = firebase.storage().ref(currentUser.displayName + '/cat.png');
    //     storageRef.getDownloadURL().then(url => {
    //         setImgURL({ url })
    //     })
    // })

    // useEffect(() => {
    //     currentUser.updateProfile({
    //         photoURL: imgURL
    //     })
    //     console.log('hi')
    // }, [imgURL])

    const handleChange = async (e) => {
        // e.preventDefault();
        // console.log(e.target.files)
        // console.log(currentUser.photoURL)
        const image = e.target.files[0];
        const storageRef = firebase.storage().ref();
        const fileName = currentUser.displayName + '/' + image.name
        const fileRef = storageRef.child(fileName);
        fileRef.put(image).then(() => {
            storageRef.child(fileName).getDownloadURL()
            .then(url => {
                setImgURL(url)
                console.log(url)
            })
            currentUser.updateProfile({ photoURL: imgURL })
        })
        console.log(currentUser.photoURL)
        setUpload(false)
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
                    <Form>
                        <Form.Group>
                        <Form.File onChange={handleChange} label="Select your image" />
                        </Form.Group>
                        {/* <Button variant="primary" type="submit">Change Photo</Button> */}
                    </Form>
                </Modal.Body>
            </Modal>
            <div className="sidebar-name-content">
            <img className='profile-image' alt='Avatar' src={currentUser.photoURL}/>
            {/* <img className='profile-image' alt='Avatar' src="https://picsum.photos/200" /> */}
            <span onClick={() => setIsOpen(!isOpen)}>{currentUser.displayName}</span>
            {isOpen ? 
            <FontAwesome name="angle-up" onClick={() => setIsOpen(!isOpen)} />
            : <FontAwesome name="angle-down" onClick={() => setIsOpen(!isOpen)} />}
            {isOpen && 
            <ul>
                <li onClick={() => setUpload(true)}>Change profile picture</li>
                <li onClick={handleLogout}>Sign out</li>
            </ul>}
            </div>
        </div>
    )
}

export default SidebarName;
