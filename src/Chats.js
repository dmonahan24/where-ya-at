import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import './Chats.css';
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import { auth, db } from "./firebase";
import Chat from "./Chat"
import { useSelector } from 'react-redux';
import { selectUser } from './features/appSlice';
import { RadioButtonUncheckedIcon } from '@material-ui/icons/RadioButtonUnchecked';

function Chats() {
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection('posts')
    .orderBy('timestamp', 'desc')
    .onSnapshot((snapshot) => 
      setPosts(
        snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }))));
  }, []);

  const takeSnap = () => {};

  return (
    <div className="chats">
      <div className="chats__header">
        <Avatar src={user.profilePic} onClick={() => auth.signOut()} className="chats__avatar" />
        <div className="chats__search">
          <SearchIcon />
          <input placeholder='Friends' type='text' />
        </div>
        <ChatBubbleIcon className='chats__chatIcon' />
      </div>
      <div className="chats__posts">
        {posts.map(({id, data: { profilePic, username, timestamp, imageUrl, read }}) => (
          <Chat 
          key={id}
          id={id}
          username={username}
          timestamp={timestamp}
          read={read}
          profilePic={profilePic}
          />
        )
        )}
      </div>
      <RadioButtonUncheckedIcon className="chats__takePicIcon" onClick={takeSnap} fontSize="large" />
    </div>
  );
}

export default Chats;