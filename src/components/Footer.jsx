import React from 'react'

const Footer = () => {

  // Please start over

  return (
    <footer className='bg-background text-white md:px-3 border-solid border-[1px] border-slate-800 py-8'>
      <div className=' max-w-[1200px] mx-auto'>
        <div className="flex justify-between items-center flex-wrap px-3">
          <div className='gap-2 w-full md:w-[20%] flex items-start justify-center md:justify-start mb-2 md:mb-0'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
            </svg>

            <h1 className='text-lg font-semibold'>truestate</h1>
          </div>
          <div className='w-full md:w-[60%]'>
            <ul className='flex flex-col gap-y-3 py-3 text-neutral-300 md:flex-row md:justify-center text-center md:text-left gap-x-4 font-secondary font-medium text-[17px]'>
              <li><a href="#Home">Home</a></li>
              <li><a href="#About">About</a></li>
              <li><a href="#Featured">Featured</a></li>
              <li><a href="#Reviews">Reviews</a></li>
            </ul>
          </div>

          <a className='w-full md:w-[20%] mt-3 md:mt-0 text-center md:text-end text-neutral-400 uppercase font-medium' href="https://github.com/Lindrit-Sulaj/truestate">Source code</a>
        </div>
        <div className='flex justify-center my-10 md:my-6 w-full max-w-md mx-auto'>
          <input type="email" className='rounded-l-md bg-transparent border-solid border-[1px] border-neutral-800 focus:outline-none px-4' />
          <button className='bg-blue-custom rounded-r-md px-2 md:px-4 py-3'>
            Subscribe
          </button>
        </div>
        <p className='w-full text-center py-3 md:pb-6 flex justify-center items-center gap-2'>2023 Copyright <span className="material-symbols-outlined">copyright</span>  </p>
      </div>
    </footer>
  )
}

export default Footer