import React, { useState } from 'react';
import './ChatInfo.css';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ChatInfo = () => {
    const [favourite, setFavourite] = useState(false);

    return (
        <div className="unselectable">
            <div className="chat-info">
                <div className="chat-info-content">
                    <p className="channel-name">#Channel</p>
                    {favourite ? <AiFillStar onClick={() => setFavourite(!favourite)} className="star-icon" size={50}/>
                    : <AiOutlineStar onClick={() => setFavourite(!favourite)} className="star-icon" size={50}/>}
                    <input className="rounded border-0 search-bar" type="text" placeholder="Search messages..." />
                    </div>
                <p className="num-members">4 members</p>
            </div>
        </div>
    )
}

export default ChatInfo;
