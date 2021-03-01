import React from 'react';
import './ChatMessage.css';
import { useAuth } from '../contexts/AuthContext';

const ChatMessage = (props) => {
    const { text, uid, name, imgURL } = props.message;
    const { currentUser } = useAuth();

    const messageClass = uid === currentUser.uid ? 'flex-row-reverse' : 'flex-row';
    const messageBodyClass = uid === currentUser.uid ? 'sent-message-bg text-right' : 'received-message-bg';
    const imageClass = uid === currentUser.uid ? 'ml-2' : 'mr-2';
    return (
        // <>
        // <div className="d-flex">
        //     <div className="w-40 d-flex prof-name"><img className="prof-pic" alt='Avatar' src={imgURL} />{name} </div>
        // </div>
        // <span className="msg-text">{text}</span>
        // </>
        <div className={`px-3 py-2 d-flex text-nowrap items-start ${messageClass}`}>
        <div>
          <img className={`d-block object-cover ${imageClass} prof-pic`} src={imgURL} alt="{name}'s pfp" />
        </div>
        <div className={`d-block break-words pl-2 pr-2 rounded ${messageBodyClass} message-body`}>
          <p className="text-box">{name}</p>
          <p>{text}</p>
        </div>
      </div>
    )
}

export default ChatMessage;
