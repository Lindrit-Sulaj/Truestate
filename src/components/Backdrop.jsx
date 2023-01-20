import React from 'react'

const Backdrop = ({ children, handleClick }) => {
  document.body.style.overflowY = "hidden"

  return (
    <div onClick={() => { 
      handleClick();
      document.body.style.overflowY = "scroll" 
    }} className='fixed z-[51] top-0 w-full py-10
    min-h-screen flex justify-center items-center overflow-hidden bg-[rgba(0,0,0,0.9)]'>
      {children}
    </div>
  )
}

export default Backdrop