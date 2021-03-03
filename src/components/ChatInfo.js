import React, { useState, useEffect } from 'react';
import './ChatInfo.css';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useChannels } from '../contexts/ChannelContext';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';
import { useFavourites } from '../contexts/FavouriteContext';
import Modal from 'react-bootstrap/Modal';
import SidebarName from '../elements/SidebarName';
import Channels from '../elements/Channels';
import Favourites from '../elements/Favourites';
import { VscThreeBars } from "react-icons/vsc";
import { BsFillPeopleFill } from "react-icons/bs";
import ChannelCard from './ChannelCard';

const ChatInfo = (props) => {
    // const [favourite, setFavourite] = useState(false);
    const [numMembers, setNumMembers] = useState(1);
    const { selectedChannel } = useChannels();
    const { currentUser } = useAuth();
    // const db = firebase.database();
    // const usersRef = db.ref('Users').child(currentUser.displayName);
    // const channelsRef = db.ref('Chats').child(selectedChannel);
    const db = firebase.firestore();
    const usersRef = db.collection('Users').doc(currentUser.displayName);
    const channelsRef = db.collection('Chat').doc(selectedChannel).collection('userList').doc('usersPresent');
    const { favourites, setFavourites } = useFavourites();
    const [drop, setDrop] = useState(false);
    const [viewMembers, setViewMembers] = useState(false);
    // const [favourite, setFavourite] = useState(favourites && selectedChannel in favourites);

    useEffect (() => {
        if (typeof favourites !== 'undefined' && favourites.includes(selectedChannel)) {
            props.setFavourite(true)
        } else {
            props.setFavourite(false)
        }
        channelsRef.get()
        .then(cref => setNumMembers(cref.data().users.length))
    }, [selectedChannel])

        // const fetchData = async () => {
        //     usersRef.on('value', snapshot => {
        //             setFavourites(snapshot.val().favourites)
        //         })
        // }
        // fetchData();
        // return () => {
        //     usersRef.off('value', setFavourites([]))
        // }
            // setFavourites(snapshot.val().favourites)
        // })
        // channelsRef.on('value', snapshot => {
        //     setNumMembers(snapshot.val().usersPresent.length)
        // })
        // usersRef.get()
        // .then(uref => setFavourites(uref.val().favourites))
        // channelsRef.get()
        // .then(cref => setNumMembers(cref.val().usersPresent.length))
        // if (typeof favourites !== 'undefined' && favourites.includes(selectedChannel)) {
        //     setFavourite(true)
        // } else {
        //     setFavourite(false)
        // }
        // usersRef.get().then(cref => setFavourites(cref.data().favourites))
    // }, [favourite, favourites])
    // }, [favourite])

    // useEffect (() => {
    //     channelsRef.doc(selectedChannel).collection('userList').doc('usersPresent').get()
    //     .then(cref => setNumMembers(cref.data().users.length))
    // }, [])

    const handleClick = async (e) => {
        e.preventDefault();
        props.setFavourite(!props.favourite);
        if (!props.favourite) {
            if (favourites) {
                usersRef.update({favourites: [...favourites, selectedChannel]})
            } else {
                usersRef.update({favourites: [selectedChannel]})
            }
        } else {
            usersRef.update({favourites: favourites.filter(item => item !== selectedChannel)})
        }
    }

    return (
            <div className="chat-info unselectable">
                <Modal
                show={drop}
                onHide={() => setDrop(false)}
                dialogClassName="modal-90w"
                className="sb-card"
                >
                    <Modal.Body className="sb-body">
                        <SidebarName/>
                        <Favourites favourite={props.favourite} />
                        <Channels />
                    </Modal.Body>
                </Modal>
                <ChannelCard viewMembers={viewMembers} setViewMembers={setViewMembers} />
                <div className="chat-info-content">
                        <p className="channel-name">#{selectedChannel}</p>
                        {props.favourite ? <AiFillStar onClick={handleClick} className="star-icon" size={50}/>
                        : <AiOutlineStar onClick={handleClick} className="star-icon" size={50}/>}
                        {/* <input className="rounded border-0 search-bar" type="text" placeholder="Search messages..." /> */}
                </div>
                <div className="d-flex w-100 flex-row bot-box">
                    <VscThreeBars onClick={() => setDrop(true)} className="justify-content-left ml-1 bars" size={20}/>  
                    {numMembers === 1 ? (
                        <p className="num-members">1 member</p>
                    ) : (
                        <p className="num-members"> {numMembers} members</p>
                    )}
                    <BsFillPeopleFill onClick={() => setViewMembers(true)} className="justify-content-right mr-1 ppl" size={20}/> 
                </div>
            </div>
    )
}

export default ChatInfo;
