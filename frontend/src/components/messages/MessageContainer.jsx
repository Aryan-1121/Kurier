import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'

//  this component will also have 3 other components -> 1. Header (to whom you are messaging) , 2. Messages (each message) , 3. MessageInput

const MessageContainer = () => {
  return (
    <div className='md:min-w-[550px] flex flex-col '>
        {/* 1st ->  Header component */}

      <div className=' px-3 mb-2 bg-zinc-800 flex '>
        <div className='avatar'>
          <div className='w-12 rounded-full'>
            <img
              src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
              alt='user avatar'
            />
          </div>
        </div>
        <div className='px-3  py-5 text-black font-bold'>John doe</div>
        </div>

        {/* 2nd -> Messages component */}
        <Messages />
        {/* 3rd -> MessageInput component */}
      <MessageInput />
    </div>)
}

export default MessageContainer