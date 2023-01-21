import React from 'react';
import { motion } from 'framer-motion';
import imageOne from '../assets/trusted-website-1.jpg';
import imageTwo from '../assets/trusted-website-2.jpg';

const TrustedWebsite = () => {
  return (
    <section className="flex flex-wrap justify-center container mx-auto py-14 overflow-x-hidden gap-y-8">
      <motion.div transition={{ type: 'just', duration: .5 }} initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1}} className='w-full md:w-1/2 flex flex-col px-4 justify-center items-start gap-5'>
        <h1 className="text-4xl lg:text-5xl font-bold max-w-[510px]">The Most Trusted Real Estate Website</h1>
        <hr className="w-full max-w-[120px] border-none h-[4px] bg-blue-custom rounded-md mb-4"/>
        <p className="max-w-xl text-neutral-500 leading-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium eaque commodi unde ullam. Distinctio culpa error illo minus enim temporibus, esse similique, odit incidunt quibusdam rem nulla sit beatae neque.</p>
        <p className="max-w-xl text-neutral-500 leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, consectetur vitae. Consectetur, distinctio! Maiores iure at.</p>
        <button className="px-6 py-[10px] ml-auto md:ml-0 bg-blue-custom rounded-md text-white hover:bg-blue-500">Explore Now</button>
      </motion.div>
      <motion.div transition={{ type: 'just', duration: .3}} initial={{ x: 120, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} className='flex w-full md:w-1/2 max-w-sm justify-around md:max-w-xl items-end md:px-4 lg:px-0'>
        <img className="w-[30%] object-cover h-3/4 rounded-lg" src="https://ik.imagekit.io/0s9lwb2yr/Truestate/trusted-website-2.jpg" alt="Skyscraper" />
        <img className='w-[60%] object-cover rounded-lg' src="https://ik.imagekit.io/0s9lwb2yr/Truestate/trusted-website-1.jpg" alt="Skyscrapers" />
      </motion.div>
    </section>
  )
}

export default TrustedWebsite