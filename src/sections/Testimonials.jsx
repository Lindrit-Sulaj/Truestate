import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <section className="testimonials bg-background py-16 pb-20">
      <p className='text-blue-custom text-center mb-3 uppercase font-semibold'>Testimonials</p>
      <h1 className='text-white text-3xl lg:text-4xl text-center px-3 font-bold'>Words from our customers</h1>
      <p className='text-center text-neutral-300 mt-4 mb-12'>Here's what our clients say about us</p>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 max-w-[1300px] gap-x-3 gap-y-10 px-4'>
        <Testimonial
          image="https://www.mensjournal.com/wp-content/uploads/mf/1280-selfie.jpg?w=900&quality=86&strip=all"
          name="John Doe"
          profession="Programmer" />
        <Testimonial
          image="https://www.mensjournal.com/wp-content/uploads/mf/1280-selfie.jpg?w=900&quality=86&strip=all"
          name="John Doe"
          profession="Programmer"
          selected />
        <Testimonial
          image="https://www.mensjournal.com/wp-content/uploads/mf/1280-selfie.jpg?w=900&quality=86&strip=all"
          name="John Doe"
          profession="Programmer" />
      </div>
    </section>
  )
}

const Testimonial = ({ selected, image, name, profession }) => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className={`border-solid border-[2px] border-slate-800 rounded-2xl relative pt-[50px] ${selected ? 'text-black bg-neutral-100' : 'text-white'} pb-6`}>
      <div className='w-full left-0 right-0 absolute top-[-30px] flex justify-center'>
        <img className='w-[70px] h-[70px] object-cover rounded-full' src={image} alt={name} />
      </div>
      <span className={`material-symbols-outlined text-4xl text-center text-blue-500 mx-auto block mb-2`}>format_quote</span>
      <p className={`${selected ? "text-neutral-600" : "text-neutral-300"} text-center px-3`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quos eaque reprehenderit dolores, ex molestias illum expedita magnam voluptatem.</p>
      <div className={`flex ${ !selected ? "text-yellow-300" : 'text-yellow-600'} justify-center my-2`}>
        <span className="material-symbols-outlined">
          star
        </span>
        <span className="material-symbols-outlined">
          star
        </span>
        <span className="material-symbols-outlined">
          star
        </span>
        <span className="material-symbols-outlined">
          star
        </span>
        <span className="material-symbols-outlined">
          star
        </span>
      </div>
      <p className='text-lg text-center font-semibold font-secondary'>{name}</p>
      <p className={`text-center ${!selected ? "text-neutral-400" : "text-neutral-600"} text-sm`}>{profession}</p>
    </motion.div>
  )
}

export default Testimonials