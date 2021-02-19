import React from 'react';
import './Sidebar.css';
import Logo from '../elements/Logo';
import SidebarName from '../elements/SidebarName';
import Channels from '../elements/Channels';
import DirectMessages from '../elements/DirectMessages';
import Favourites from '../elements/Favourites';

const Sidebar = () => {
    return (
        <div className="unselectable">
        <div className="sidebar">
            <Logo size={50} className="logo" />
            <SidebarName />
            <div className="message-container">
                <Favourites />
                <Channels />
                <DirectMessages />
            </div>
        </div>
        </div>
    )
}

export default Sidebar;
