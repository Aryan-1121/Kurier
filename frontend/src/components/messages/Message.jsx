import React from 'react'

// everything in this component will be coming from daisyui
const Message = () => {
  return (
    // "chat-end" is used to place the message on the right side (when I send message) and "chat-start" is used to place the message on the left side (when other person sends message) coming from daisyui
    <div className={`chat chat-end`}>
      {/* "chat-image avatar" is used to display the profile picture */}
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img alt='Tailwind CSS chat bubble component'
            src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
          />
        </div>
      </div>

      {/* "chat-bubble" is used to display the message */}
      <div className={`chat-bubble text-white bg-orange-800 `}>Hey there !! How are you ?</div>
      {/* "chat-footer" -> we are using it to display the time below the message */}
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:54</div>
    </div>)
}

export default Message