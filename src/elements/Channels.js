import React, { useState, useRef, useEffect } from 'react';
import { FaSlackHash } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import FontAwesome from 'react-fontawesome';
import './Channels.css';
import Modal from 'react-bootstrap/Modal';
import { Form, Button, Card, Alert } from "react-bootstrap";
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useChannels } from '../contexts/ChannelContext';
import { useAuth } from '../contexts/AuthContext';

const Channels = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [create, setCreate] = useState(false);
    const [channels, setChannels] = useState([]);
    const { currentUser } = useAuth();
    const createRef = useRef();
    const selectedRef = useRef();
    const db = firebase.database();
    const channelsRef = db.ref('Chats');
    const usersRef = db.ref('Users');
    // const user = useCollectionData(usersRef, {idField: 'id'}) 
    // const user = usersRef.doc('Tanner').get().then(docref => console.log(docref.data().channels))
    // const [channels] = useCollectionData(channelsRef, {idField: 'id'})
    const { setSelectedChannel } = useChannels();

    useEffect (() => {
        usersRef.doc(currentUser.displayName).get().then(uref => setChannels(uref.data().channels))
    })

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        // await channelsRef.add({
        //     title: createRef.current.value
        // })
        await channelsRef.doc(createRef.current.value).collection('userList').doc('creator').set({username: currentUser.displayName});
        await channelsRef.doc(createRef.current.value).collection('userList').doc('usersPresent').set({users: [currentUser.displayName]});
        await usersRef.doc(currentUser.displayName).update({channels: [...channels, createRef.current.value]})
        // setChannels([...channels, createRef.current.value])
        // console.log(channels)
        // await addChannel(createRef.current.value);
        setCreate(false);
    }

    return (
        <div className="unselectable">
            <Modal
                show={create}
                onHide={() => setCreate(false)}
                dialogClassName="modal-90w"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Please enter the name of a new channel
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="new-channel">
                            <Form.Control type="text" ref={createRef} required />
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
            <div className="channel">
                <div className="channel-title">
                <FaSlackHash size={20} />
                <span onClick={() => setIsOpen(!isOpen)}>Channels</span>
                {isOpen ? 
                <FontAwesome name="angle-up" onClick={() => setIsOpen(!isOpen)} />
                : <FontAwesome name="angle-down" onClick={() => setIsOpen(!isOpen)} />}
                <FiPlus onClick={() => setCreate(true)} size={15} className="add-icon" />
                </div>
                {isOpen && 
                <ul>
                    {channels && channels.map(item => 
                        <li key={item} onClick={() => setSelectedChannel(item)}>{item}</li>)}
                </ul>}
            </div>
        </div>
    )
}

export default Channels;
