import React from 'react';
import './Message.css'

function Message({own}) {
  return (
    <>
        <div className ={own ? "message own" : "message"}>
            <div className="messageTop">
                <img
                    className='messageImg'
                    src='https://i.picsum.photos/id/76/200/200.jpg?hmac=psXm-BMm4NaZlO_dAn3FH6ahWyqXeDxPEkz5hU8XVqM'
                    alt=""
                />
                <p className='messageText'> Hello, how are you </p>
            </div>
            <div className='messageBottom'>
                1 hour ago
            </div>
        </div>
    </>
  )
}

export default Message;