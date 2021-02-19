import React from 'react';
import Sidebar from '../components/Sidebar';
import ChatInfo from '../components/ChatInfo';
import ChatBox from '../components/ChatBox';

const ChatPage = () => {
    return (
        <div>
            <Sidebar />
            <ChatInfo />
            <ChatBox />
        </div>
    )
}

export default ChatPage;
