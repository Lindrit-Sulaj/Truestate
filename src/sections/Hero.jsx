import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../ThemeContext';

const Hero = () => {
  const { currentSection, setCurrentSection } = useTheme();
  const heroRef = useRef();
  const isInView = useInView(heroRef);

  useEffect(() => {
    if (isInView) {
      setCurrentSection('Home')
    }
  }, [isInView]);

  return (
    <section ref={heroRef} id="Home" className='container mx-auto  mt-[80px] rounded-xl flex flex-col lg:flex-row items-center'>
      <div className="py-4 px-6 w-full lg:w-1/2 xl:mx-12">
        <h1 className='flex flex-col tracking-wider lg:tracking-wide items-center gap-0 text-[36px] font-semibold uppercase lg:items-start lg:font-bold lg:text-5xl lg:gap-4'>
          <span className='block'>Find your</span>
          <span className='flex justify-start gap-4 items-center text-blue-custom tracking-wider'>
            <div className='w-[40px] h-[4px] rounded-md bg-blue-custom'></div>
            Favorites
          </span>
          <span className='block'>Real estate</span>
        </h1>
        <p className='mt-6 lg:mt-9 text-[17px] text-neutral-600 text-center lg:text-left lg:max-w-lg'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et nemo voluptatibus dolorum placeat laudantium ad modi animi impedit at nulla, perferendis sapiente quae dolore eaque, mollitia ratione ab quos illo.
        </p>
        <div className='flex justify-center gap-5 my-7 lg:justify-start'>
          <div className='flex gap-1 text-green-500 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
            <span className='text-green-600'>Urban</span>
          </div>
          <div className='flex gap-1 text-green-500 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
            <span className='text-green-600'>Rural</span>
          </div>
          <div className='flex gap-1 text-green-500 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
            <span className='text-green-600'>Apartments</span>
          </div>
        </div>
        <div className='flex justify-center lg:justify-start my-6 lg:my-10 gap-4'>
          <button className='flex items-center gap-2 px-3 py-2 border-solid border-2 border-cyan-300 rounded-md text-blue-custom hover:border-blue-300'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
            </svg>

            <span>Get a video</span>
          </button>
          <motion.button className='px-6 py-2 bg-blue-custom rounded-md text-white hover:bg-blue-500'>
            Get Started
          </motion.button>
        </div>
      </div>

      <img className='w-full lg:w-1/2 lg:mt-[40px] xl:mt-0' src="https://ik.imagekit.io/0s9lwb2yr/Truestate/tr:w-700/hero-image_TbPcn5c1U.png" alt="" />

    </section>
  )
}

export default Hero