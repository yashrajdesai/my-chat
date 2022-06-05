import React from 'react';
import './ChatOnline.css'

function ChatOnline() {
  return (
    <div>
        <div className="chatOnlineFriend">
            <div className='chatOnlineImgContainer'>
                <img className="chatOnlineImg" src='https://i.picsum.photos/id/76/200/200.jpg?hmac=psXm-BMm4NaZlO_dAn3FH6ahWyqXeDxPEkz5hU8XVqM' />
                <div className="chatOnlineBadge"></div>
            </div>
            <span className="chatOnlineName">Yashraj Desai</span>
        </div>
    </div>
  )
}

export default ChatOnline