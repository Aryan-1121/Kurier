import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";

//  this component will also have 3 other components -> 1. Header (to whom you are messaging) , 2. Messages (each message) , 3. MessageInput

const MessageContainer = () => {
  const noChatSelected = false;

  return (
    <div className='md:w-[550px] lg:w-[750px] xl:w[850px] flex flex-col '>
      {/* 1st ->  Header component */}

      {noChatSelected ? <NoChatSelected /> : (<div className=' px-3 mb-2 bg-zinc-800 flex '>
        {/* avatar/profile picture */}
        <div className='avatar'>
          <div className='w-12 rounded-full'>
            <img
              src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
              alt='user avatar'
            />
          </div>
        </div>

        {/* name */}
        <div className='px-3  py-5 text-black font-bold'>John doe</div>

      </div>)
      }

      {/* 2nd -> Messages component */}
      <Messages />
      {/* 3rd -> MessageInput component */}
      <MessageInput />
      
    </div>)
}

export default MessageContainer



const NoChatSelected = () => {
  // const { authUser } = useAuthContext();
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>Welcome 👋 Heroo ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  );
};





