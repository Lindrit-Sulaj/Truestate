import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from 'postcss';
import { useTheme } from '../ThemeContext'

const AboutUs = () => {
  const { currentSection, setCurrentSection } = useTheme();
  const aboutUsRef = useRef();
  const isInView = useInView(aboutUsRef);

  useEffect(() => {
    if (isInView) {
      setCurrentSection('About')
    }
  }, [isInView]);

  return (
    <section ref={aboutUsRef} id="About" className="about-us py-16 lg:py-[76px] bg-background text-white overflow-hidden">
      <motion.div
        className="container mx-auto flex flex-wrap-reverse justify-center items-center">
        <div className='w-full lg:w-[45%]'>
          <motion.img
            initial={{
              x: -200,
              opacity: 0,
              rotate: 10,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              rotate: 0,
              transition: { duration: .5, delay: .1 }
            }}
            transition={{ type: 'just' }}
            className='object-cover w-[75%] md:w-[60%] mx-auto my-4 rounded-lg' src="https://images.pexels.com/photos/3914752/pexels-photo-3914752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
        <motion.div
          initial={{
            // x: 100,
            opacity: .5,
            y: 75
          }}
          whileInView={{
            // x: 0,
            y: 0,
            opacity: 1,
            transition: { type: 'just', duration: .4 }
          }}
          className='w-full lg:w-[55%] px-6 lg:px-0'>
          <p className='font-semibold uppercase text-blue-200'>About us</p>
          <h1 className='my-5 text-4xl font-bold font-secondary max-w-md overflow-hidden'>What makes us different from others</h1>
          <hr className='w-24 border-none h-[2px] rounded-md bg-blue-200' />
          <p className='text-neutral-400 leading-7 text-[16.5px] mt-5 max-w-[680px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi est dicta eos suscipit quidem? Facere adipisci velit veniam aut iusto dignissimos quia amet, fugit iure consequatur. Optio error quisquam illum!
          </p>
          <p className='text-neutral-400 leading-7 text-[16.5px] mt-4 mb-6 max-w-[680px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias saepe numquam nostrum veritatis ipsum fuga dolores illum repudiandae, ratione inventore magnam id obcaecati atque dolor fugiat illo eligendi delectus!
          </p>

          <motion.div className="flex gap-4 mt-10 mb-5">
            <motion.div className="w-28 md:w-36">
              <h3 className="text-xl font-semibold text-neutral-100">21</h3>
              <p className='text-neutral-400'>Years of experience</p>
            </motion.div>
            <motion.div className="w-28 md:w-36">
              <h3 className="text-xl font-semibold text-neutral-100">950</h3>
              <p className='text-neutral-400'>Projects completed</p>
            </motion.div>
            <motion.div className="w-28 md:w-36">
              <h3 className="text-xl font-semibold text-neutral-100">50+</h3>
              <p className='text-neutral-400'>Awards we won</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AboutUs