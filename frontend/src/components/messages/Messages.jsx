import React from 'react'
import Message from './Message'

//  This component will be used to display all the messages (each message will be a seperate Message component)
const Messages = () => {
  return (
    // overflow-auto will make the container/messages scrollable whenver there is a lot of messages(more than screen can fit)
    <div className='px-4 flex-1 overflow-auto'>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>)
}

export default Messages