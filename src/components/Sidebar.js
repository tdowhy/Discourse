import React from 'react';
import './Sidebar.css';
import Logo from '../elements/Logo';
import SidebarName from '../elements/SidebarName';
import Channels from '../elements/Channels';
import DirectMessages from '../elements/DirectMessages';
import Favourites from '../elements/Favourites';

const Sidebar = (props) => {
    return (
        <div className="sidebar undelectable">
            <Logo size={50} className="logo" />
            <SidebarName />
            <div className="message-container">
                <Favourites favourite={props.favourite} />
                <Channels />
                {/* <DirectMessages /> */}
            </div>
        </div>
    )
}

export default Sidebar;
