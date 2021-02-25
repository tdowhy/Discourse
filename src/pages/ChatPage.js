import React, { useState, useMemo } from 'react';
import Sidebar from '../components/Sidebar';
import ChatInfo from '../components/ChatInfo';
import ChatBox from '../components/ChatBox';
import { ChannelContext } from '../contexts/ChannelContext';
import { FavouriteContext } from '../contexts/FavouriteContext';

const ChatPage = () => {
    const [selectedChannel, setSelectedChannel] = useState('General');
    const [favourites, setFavourites] = useState([]);
    // const [favourite, setFavourite] = useState(false);
    const channelProvider = useMemo(() => ({ selectedChannel, setSelectedChannel }), [selectedChannel, setSelectedChannel]);
    const favouriteProvider = useMemo(() => ({ favourites, setFavourites }), [favourites, setFavourites]);

    return (
        <div className="w-100">
            <ChannelContext.Provider value={channelProvider}>
                <FavouriteContext.Provider value={favouriteProvider}>
                    <Sidebar />
                    <ChatInfo />
                    <ChatBox />
                </FavouriteContext.Provider>
            </ChannelContext.Provider>
        </div>
    )
}

export default ChatPage;
