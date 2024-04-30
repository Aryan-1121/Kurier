import React from 'react'
import { BiLogOut } from "react-icons/bi";const LogoutButton = () => {
  return (
    // mt-auto will push down the div to the bottom
    <div className='mt-auto btn btn-circle'>
      <BiLogOut  className='w-6 h-6 text-white cursor-pointer' autoReverse={true} />
    </div>)
}

export default LogoutButton