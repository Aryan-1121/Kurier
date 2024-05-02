import React from 'react'
import { useSideBarConversation } from '../../store/useSideBarConversation'

const Conversation = ({conversation}) => {

  const { selectedConversation, setSelectedConversation } = useSideBarConversation();

  



  return <>
    <div className='flex gap-2 items-center hover:bg-yellow-700 rounded p-2 py-1 cursor-pointer'>
      <div className='avatar online'>
        <div className='w-12 rounded-full'>
          <img
            src={conversation.profilePic}
            alt='user avatar'
          />
        </div>
      </div>

      <div className='flex flex-col flex-1'>
        <div className='flex gap-3 justify-between'>
          <p className='font-bold text-gray-200'>{conversation.fullName}</p>
        </div>
      </div>
    </div>

    <div className='divider my-0 py-0 h-1' />

  </>
}

export default Conversation