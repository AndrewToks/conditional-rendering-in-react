import React, { useState } from 'react'
import ShowMessage from './ShowMessage'


const MessageDisplay = () => {
  const [showMessage,setShowMessage] = useState(false)

  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
    {showMessage ? <ShowMessage onClose={()=>{
      setShowMessage(false)
    }} />  : <button onClick={()=>{
      setShowMessage(true)
    }} className='border border-black rounded-md py-3 px-5'>Submit</button>
    }
    </div>
  )
}

export default MessageDisplay