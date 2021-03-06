import React, { useState, useEffect } from 'react';
import { AiFillStar } from "react-icons/ai";
import FontAwesome from 'react-fontawesome';
import './Favourites.css';
import { useAuth } from '../contexts/AuthContext';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useChannels } from '../contexts/ChannelContext';
import { useFavourites } from '../contexts/FavouriteContext';

const Favourites = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const { currentUser } = useAuth();
    const { setSelectedChannel } = useChannels();
    const { favourites, setFavourites } = useFavourites();

    // const db = firebase.database();
    // const favouritesRef = db.ref("Users");
    const db = firebase.firestore();
    const favouritesRef = db.collection('Users').doc(currentUser.displayName);
    
    useEffect (() => {
        // favouritesRef.child(currentUser.displayName).get().then(uref => setFavourites(uref.val().favourites))
        favouritesRef.get().then(uref => setFavourites(uref.data().favourites))
    }, [props.favourite])

    return (
        <div className="unselectable">
            <div className="favourites">
                <div className="favourites-title">
                <AiFillStar size={20} />
                <span onClick={() => setIsOpen(!isOpen)}>Favourites</span>
                {isOpen ? 
                <FontAwesome name="angle-up" onClick={() => setIsOpen(!isOpen)} />
                : <FontAwesome name="angle-down" onClick={() => setIsOpen(!isOpen)} />}
                </div>
                {isOpen && 
                <ul>
                    {favourites && favourites.map(item => 
                        <li key={item} onClick={() => setSelectedChannel(item)}>{item}</li>)}
                </ul>}
            </div>
        </div>
    )
}

export default Favourites;
