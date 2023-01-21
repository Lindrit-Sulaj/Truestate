import React from 'react';
import { motion } from 'framer-motion';

const Faq = () => {
  return (
    <section className="flex container justify-around mx-auto py-16">
      <motion.img className="hidden w-[40%] object-cover md:block h-[500px]" src="https://ik.imagekit.io/0s9lwb2yr/Truestate/faq-image.jpg" alt="FAQ Image" />
      <div className='w-full md:w-1/2 px-3'>
        <h1 className='text-3xl font-semibold text-center'>Frequently asked questions</h1>
        <p className="text-neutral-500 mt-3 text-center">Do you have any uncertainties? We got you covered!</p>
        <div className='flex flex-col gap-2'>
          <div className="w-full h-10 bg-neutral-100"></div>
          <div className="w-full h-10 bg-neutral-100"></div>
          <div className="w-full h-10 bg-neutral-100"></div>
        </div>
      </div>
    </section>
  )
}

export default Faq