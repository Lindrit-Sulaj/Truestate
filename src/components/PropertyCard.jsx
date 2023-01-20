import React, { useState } from 'react';
import Backdrop from './Backdrop';
import { motion } from 'framer-motion';

const PropertyCard = ({
  image,
  discount,
  title,
  price,
  location,
  capacity,
  rooms,
  squareMeters
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const formatter = new Intl.NumberFormat("en", { notation: 'compact' });

  const open = () => setIsOpened(true);
  const close = () => setIsOpened(false);

  return (
    <>
      {!isOpened && <PropertyCard.Normal
        image={image}
        discount={discount}
        title={title}
        price={price}
        location={location}
        capacity={capacity}
        rooms={rooms}
        squareMeters={squareMeters}
        formatter={formatter}
        open={open} />}
      {isOpened && <div className=' w-full md:w-[350px] lg:w-[370px] bg-transparent'></div>}
      {isOpened && <PropertyCard.Opened
        image={image}
        discount={discount}
        title={title}
        price={price}
        location={location}
        capacity={capacity}
        rooms={rooms}
        squareMeters={squareMeters}
        formatter={formatter}
        close={close} />
      }

    </>
  )
}

const Normal = ({ image, discount, title, price, location, capacity, rooms, squareMeters, formatter, open }) => {

  const styles = {
    backgroundImage: `url(${image})`
  }

  return (
    <motion.div onClick={open} layout layoutId={title} style={styles} className="bg-no-repeat bg-cover h-[500px] bg-center py-3 px-4 flex flex-col md:rounded-lg z-10 w-full md:w-[350px] lg:w-[370px]">
      <p className='bg-neutral-600 text-right block ml-auto px-6 py-2 rounded-full text-white'>{discount}</p>
      <div className="bg-white mt-auto border-solid border-[1px] border-neutral-200 translate-y-12 rounded-md py-2 px-3">
        <div className="flex mt-2">
          <h2 className="w-[85%] text-lg font-semibold font-secondary text-ellipsis overflow-hidden whitespace-nowrap">{title}</h2>
          <p className="w-[15%] text-blue-custom text-xl mr-3 font-medium px-[2px]">{formatter.format(price)}</p>
        </div>

        <div className="flex gap-2 text-neutral-700 mb-3 mt-3">
          <span class="material-symbols-outlined">
            map
          </span>
          <p>{location}</p>
        </div>
        <hr />
        <div className="flex gap-6 pt-2 pb-1 px-2 items-center">
          <div className="flex gap-2 whitespace-nowrap">
            <span class="material-symbols-outlined text-neutral-400">
              {capacity === 1 ? 'Person' : capacity === 2 ? 'Group' : 'Groups'}
            </span>
            <span className="text-neutral-500 font-medium font-secondary">{capacity}</span>
          </div>
          <div className="flex gap-2 whitespace-nowrap">
            <span class="material-symbols-outlined text-neutral-400">
              bed
            </span>
            <span className="text-neutral-500 font-medium font-secondary">{rooms}</span>
          </div>
          <div className="flex gap-2 whitespace-nowrap">
            <span class="material-symbols-outlined text-neutral-400">
              dashboard
            </span>
            <span className="text-neutral-500 font-medium font-secondary">{squareMeters}</span> 
          </div>
        </div>

      </div>
    </motion.div>)
}

const Opened = ({ image, discount, title, price, location, capacity, rooms, squareMeters, formatter, close }) => {
  return (
    <Backdrop handleClick={close}>
      <motion.div drag="y" dragConstraints={{ top: 50, bottom: 50 }} layout layoutId={title} className="w-[80%] overflow-y-auto md:w-[600px] lg:w-[800px] h-[90vh] bg-white z-[55]">
        
      </motion.div>
    </Backdrop>
  )
}

PropertyCard.Normal = Normal
PropertyCard.Opened = Opened

export default PropertyCard