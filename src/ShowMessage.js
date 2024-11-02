import React from 'react'

const ShowMessage = ({onClose}) => {
  return (
    <div className='flex backdrop-blur-3xl gap-5 absolute p-2 flex-col justify-center items-center rounded-lg shadow-xl h-72 w-72 ml-auto mr-auto '>
      <p>Message submitted successfully!</p>
      <button className='bg-green-400 text-white px-8 py-3 ' onClick={onClose}>OK</button>
    </div>
  )
}

export default ShowMessage