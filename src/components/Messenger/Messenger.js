import React from 'react';
import Conversation from '../Conversation/Conversation';
import './Messenger.css';

function Messenger() {
  return (
    <>
      <div className='container-fluid'>
        {/* <div className='messenger'> */}
          <div className='row no-gutters'>
            <div className="col-4 nopadding">
              <div className='chatMenu'>
                <input placeholder='Search for friends' className='chatMenuInput' />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
              </div>
            </div>
            <div className="col-4 nopadding">
              <div className='chatBox'>chatMenu</div>
            </div>
            <div className="col-4 nopadding">
              <div className='chatOnline'>chatMenu</div>
            </div>
        </div>
      {/* </div> */}
      </div>
    </>
    
  )
}

export default Messenger;