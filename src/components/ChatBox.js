import React, { useState } from 'react';
import './ChatBox.css';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import { HiEmojiHappy } from "react-icons/hi";

const ChatBox = () => {
    const [emojiOpen, setEmojiOpen] = useState(false)

    return (
        <div className='chat-box'>
            {emojiOpen ? <Picker theme='dark' set='apple' perLine={16} sheetSize={24} style={{ position: 'absolute', bottom: '55px', left: '215px', zIndex: 1, width: '400px'}} /> : null}
            <div className="input-group mb-3">
                <div className="input-group-prepend inp-bar">
                    <button className="btn emoji-btn" type="button" onClick={() => setEmojiOpen(!emojiOpen)}><HiEmojiHappy size={20} /></button>
                    {/* {emojiOpen ? <Picker className="emoji-panel" /> : null} */}
                </div>
                <input type="text" className="form-control message-bar" placeholder="" aria-label="" aria-describedby="basic-addon1" />
            </div>
        </div>
    )
}

export default ChatBox;
