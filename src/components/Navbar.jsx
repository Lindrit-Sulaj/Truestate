import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';
import useMediaQuery from '../assets/useMediaQuery';

const Navbar = () => {
  return (
    <div className='bg-white fixed top-0 w-full'>
      <nav className='container h-[75px] flex justify-between items-center mx-auto px-2'>
        <h1 className='font-bold font-secondary flex flex-row-reverse gap-2 text-xl'>
          truestate
          <svg style={{ color: 'rgb(58 92 225)' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
            <path fillRule="evenodd" d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z" clipRule="evenodd" />
          </svg>


        </h1>
        <ul className='flex gap-4'>
          <Link label="Home" />
          <Link label="Blog" />
          <Link label="Services" />
          <Link label="Reviews" />
        </ul>

        <div className='flex gap-2'>
          <motion.button className='px-2 text-neutral-900'>Log in</motion.button>
          <motion.button className='bg-blue-custom rounded-sm px-3 py-2 text-white'>Sign Up</motion.button>
        </div>
      </nav>
    </div>
  )
}

const Link = ({ label }) => {
  const { currentSection, setCurrentSection } = useTheme();

  return (
    <motion.li
      onClick={() => setCurrentSection(label)}
      className={`text-[17px]`}>
      <a href={`#${label}`}>{label}</a>
      {currentSection === label &&
        <motion.div layoutId="currentSectionUnderline" className="h-[2px] bg-blue-custom w-full"></motion.div>
      }
    </motion.li>
  )
}


export default Navbar