import React, { useEffect, useState } from 'react';
import ChatOnline from '../ChatOnline/ChatOnline';
import Conversation from '../Conversation/Conversation';
import Message from '../message/Message';
import './Messenger.css';
import axios from "axios";

function Messenger() {

  const [conversations, setConversations] = useState([]);

  const userId = "629dfed01d86636b7f351edb";

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("/conversations/" + userId);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getConversations();
  }, [userId]);
  console.log(conversations);
  return (
    <>
        <div className='messenger'>

          <div className='chatMenu'>
            <div className='chatMenuWrapper'>
              <input placeholder='Search for friends' className='chatMenuInput' />
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
            </div>
          </div>

          <div className='chatBox'>
            <div className='chatBoxWrapper'>
              <div className='chatBoxTop'>
                <Message own = {true}/>
                <Message own = {true}/>
                <Message />
                <Message />
                <Message own = {true}/>
                <Message />
                <Message />
                <Message own = {true}/>
                <Message />
                <Message />
                <Message own = {true}/>
                <Message />
                <Message />
                <Message own = {true}/>
                <Message />
                <Message />
                <Message own = {true}/>
                <Message />
                <Message />
                <Message own = {true}/>
                <Message />
                <Message />
                <Message own = {true}/>
              </div>
              <div className='chatBoxBottom'>
                <textarea className='chatMessageInput' placeholder='write something...'></textarea>
                <button className='chatSubmitButton'>Send</button>
              </div>
            </div>
          </div>

          <div className='chatOnline'>
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
          </div>
          
      </div>
    </>
    
  )
}

export default Messenger;