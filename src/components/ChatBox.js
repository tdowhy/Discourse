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
    const db = firebase.firestore()

    const messagesRef = db.collection(selectedChannel)
    const query = messagesRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, {idField: 'id'});

    const handleSubmit = async (e) => {
        e.preventDefault();
        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            // uid,
            // photoURL
          })
          setFormValue('');
        //   dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className='chat-box'>
            <div className="chat-messages">
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
            </div>
            {emojiOpen ? <Picker theme='dark' set='apple' perLine={16} sheetSize={24} style={{ position: 'absolute', bottom: '55px', left: '215px', zIndex: 1, width: '400px'}} /> : null}
            <div className="input-group mb-3">
                <div className="input-group-prepend inp-bar">
                    <button className="btn emoji-btn" type="button" onClick={() => setEmojiOpen(!emojiOpen)}><HiEmojiHappy size={20} /></button>
                    {/* {emojiOpen ? <Picker className="emoji-panel" /> : null} */}
                </div>
                <form className="form-ctnr" onSubmit={handleSubmit}>
                <input type="text" value={formValue} onChange={(e) => setFormValue(e.target.value)} className="form-control message-bar" placeholder="" aria-label="" aria-describedby="basic-addon1" />
                </form>
            </div>
        </div>
    )
}

export default ChatBox;
