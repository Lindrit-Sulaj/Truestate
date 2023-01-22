import React from 'react';
import { Accordion } from '../components'
import { motion } from 'framer-motion';

const Faq = () => {
  return (
    <section className="flex container justify-around mx-auto py-16">
      <motion.img className="hidden w-[40%] rounded-md object-cover md:block h-[500px]" src="https://ik.imagekit.io/0s9lwb2yr/Truestate/faq-image.jpg" alt="FAQ Image" />
      <div className='w-full md:w-1/2 px-3'>
        <h1 className='text-3xl font-semibold text-center mb-4 md:text-left'>Frequently asked questions</h1>
        <p className="text-neutral-500 text-center mb-6 md:text-left">Do you have any uncertainties? We got you covered!</p>
        <Accordion.Group>
          <Accordion icon="home" title="What is truestate?" text="Truestate is a safe website, which contains verified houses and apartments for people to buy."/>
          <Accordion icon="price_change" title="How much commission do you charge?" text="Our commission fees range based on the real estate's value. If it's below 100K its 3%, else it's 1.5%" />
          <Accordion icon="real_estate_agent" title="How does truestate work?" text="Truestate is a real estate website, which allows people to contact each other for real estate deals."/>
          <Accordion icon="sell" title="How to sell my own apartment/house?" text="Selling your apartment is really easy, you take the photos of it, and publish them on our website along with some description and owner information."/>
          <Accordion icon="date_range" title="How long does it take to sell my house?" text="On average for your house to be sold it might take 1 week to 2 months"/>
        </Accordion.Group>
      </div>
    </section>
  )
}

export default Faq