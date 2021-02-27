import React, { useState, useRef } from 'react';
import './ChatBox.css';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import { HiEmojiHappy } from "react-icons/hi";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from '../elements/ChatMessage';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useChannels } from '../contexts/ChannelContext';

const ChatBox = () => {
    const [emojiOpen, setEmojiOpen] = useState(false)
    const dummy = useRef();
    const [formValue, setFormValue] = useState('');
    const { selectedChannel } = useChannels();
    const db = firebase.database()

    // const messagesRef = db.ref(selectedChannel)
    // const query = messagesRef.orderBy('createdAt').limit(25);
    // const [messages] = useCollectionData(query, {idField: 'id'});

    const handleSubmit = async (e) => {
        e.preventDefault();
        // await messagesRef.add({
        //     text: formValue,
        //     createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        //     // uid,
        //     // photoURL
        //   })
          setFormValue('');
        //   dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className='chat-box'>
            <p>Hi</p>
        </div>
    )
}

export default ChatBox;
