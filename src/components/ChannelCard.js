import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useChannels } from '../contexts/ChannelContext';
import './ChannelCard.css';
import firebase from 'firebase/app';
import 'firebase/firestore';

const ChannelCard = (props) => {
    const { selectedChannel } = useChannels();
    const [creator, setCreator] = useState('')
    const db = firebase.firestore()
    const channelRef = db.collection('Chat').doc(selectedChannel).collection('userList').doc('creator');

    useEffect(() => {
        channelRef.get().then(cref => setCreator(cref.data().username))
    }, [])

    return (
        <Modal
            show={props.viewMembers}
            onHide={() => props.setViewMembers(false)}
            dialogClassName="modal-90w"
            className="channel-card"
            >
            <Modal.Header className="channel-header" closeButton>
                <Modal.Title>
                    #{selectedChannel}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Created By: {creator}</p>
                <p>Members: </p>
            </Modal.Body>
        </Modal>
    )
}

export default ChannelCard;
