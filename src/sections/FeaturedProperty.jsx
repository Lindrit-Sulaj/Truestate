import React, { useRef } from 'react';
import { PropertyCard } from '../components';
import { motion, useInView } from 'framer-motion';


const FeaturedProperty = () => {
  const sectionRef = useRef();
  const isInView = useInView(sectionRef)

  return (
    <section ref={sectionRef} className="featured-property container py-20 mx-auto">
      <h1 className='text-center text-4xl font-bold mb-3'>Featured Properties</h1>
      <p className='text-center text-[17px] text-neutral-600 max-w-xl mx-auto'>Here are some of many properties you can find on our website. Click on a property to see more details.</p>
      <motion.div
       animate={isInView ? 'enter' : 'exit'}
       variants={{
        enter: {
          transition: {
            delayChildren: .2,
            staggerChildren: .2,
          }
        }
       }}
       className='my-8 flex justify-center gap-x-4 gap-y-20 flex-wrap'>
        <PropertyCard
          image="https://images.pexels.com/photos/409842/pexels-photo-409842.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Modern apartment complex"
          price={142000}
          location="Susinos del Paramo, Spain"
          capacity={3}
          rooms={3}
          discount={"12%"}
          squareMeters={220}
        />
        <PropertyCard
          image="https://images.pexels.com/photos/1436190/pexels-photo-1436190.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Deluxe contrast room"
          price={350000}
          location="Spinoso, Italy"
          capacity={5}
          rooms={4}
          discount={"3%"}
          squareMeters={460}
        />
        <PropertyCard
          image="https://images.pexels.com/photos/3735352/pexels-photo-3735352.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Living complex"
          price={112000}
          location="Langenlehsten, Germany"
          capacity={1}
          rooms={1}
          discount={"6.5%"}
          squareMeters={100}
        />
      </motion.div>
    </section>
  )
}

export default FeaturedProperty