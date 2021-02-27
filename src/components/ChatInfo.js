import React, { useState, useEffect } from 'react';
import './ChatInfo.css';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useChannels } from '../contexts/ChannelContext';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';
import { useFavourites } from '../contexts/FavouriteContext';

const ChatInfo = () => {
    const [favourite, setFavourite] = useState(false);
    const [numMembers, setNumMembers] = useState(1);
    const { selectedChannel } = useChannels();
    const { currentUser } = useAuth();
    const db = firebase.database();
    const usersRef = db.ref('Users');
    const channelsRef = db.ref('Chats');
    const { favourites, setFavourites } = useFavourites();

    useEffect (() => {
        usersRef.child(currentUser.displayName).get()
        .then(uref => setFavourites(uref.val().favourites))
        channelsRef.child(selectedChannel).get()
        .then(cref => setNumMembers(cref.val().usersPresent.length))
        // users.doc(currentUser.displayName).collection('userList'.doc()))
    })

    // useEffect (() => {
    //     channelsRef.doc(selectedChannel).collection('userList').doc('usersPresent').get()
    //     .then(cref => setNumMembers(cref.data().users.length))
    // }, [])

    const handleClick = async (e) => {
        e.preventDefault();
        setFavourite(!favourite);
        if (!favourite) {
            if (favourites) {
                usersRef.child(currentUser.displayName).update({favourites: [...favourites, selectedChannel]})
            } else {
                usersRef.child(currentUser.displayName).update({favourites: [selectedChannel]})
            }
        } else {
            usersRef.child(currentUser.displayName).update({favourites: favourites.filter(item => item !== selectedChannel)})
        }
        console.log(favourites)
    }

    return (
        <div className="unselectable">
            <div className="chat-info">
                <div className="chat-info-content">
                    <p className="channel-name">#{selectedChannel}</p>
                    {favourite ? <AiFillStar onClick={handleClick} className="star-icon" size={50}/>
                    : <AiOutlineStar onClick={handleClick} className="star-icon" size={50}/>}
                    <input className="rounded border-0 search-bar" type="text" placeholder="Search messages..." />
                    </div>
                    {numMembers === 1 ? (
                        <p className="num-members">1 member</p>
                    ) : (
                        <p className="num-members"> {numMembers} members</p>
                    )}
            </div>
        </div>
    )
}

export default ChatInfo;
