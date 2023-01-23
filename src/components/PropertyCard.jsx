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
    <motion.div
      variants={{
        exit: {
          opacity: 0,
        },
        enter: {
          opacity: 1,
          transition: {
            type: 'just'
          }
        }
      }}
      onClick={open} layout layoutId={title} style={styles} className="bg-no-repeat bg-cover h-[500px] bg-center py-3 px-4 flex flex-col md:rounded-lg z-10 w-full md:w-[350px] lg:w-[370px]">
      <p className='bg-neutral-600 text-right block ml-auto px-6 py-2 rounded-full text-white'>{discount}</p>
      <div className="bg-white mt-auto border-solid border-[1px] border-neutral-200 translate-y-12 rounded-md py-2 px-3">
        <div className="flex mt-2">
          <h2 className="w-[85%] text-lg font-semibold font-secondary text-ellipsis overflow-hidden whitespace-nowrap">{title}</h2>
          <p className="w-[15%] text-blue-custom text-xl mr-3 font-medium px-[2px]">{formatter.format(price)}</p>
        </div>

        <div className="flex gap-2 text-neutral-700 mb-3 mt-3">
          <span className="material-symbols-outlined">
            map
          </span>
          <p>{location}</p>
        </div>
        <hr />
        <div className="flex gap-6 pt-2 pb-1 px-2 items-center">
          <div className="flex gap-2 whitespace-nowrap">
            <span className="material-symbols-outlined text-neutral-400">
              {capacity === 1 ? 'Person' : capacity === 2 ? 'Group' : 'Groups'}
            </span>
            <span className="text-neutral-500 font-medium font-secondary">{capacity}</span>
          </div>
          <div className="flex gap-2 whitespace-nowrap">
            <span className="material-symbols-outlined text-neutral-400">
              bed
            </span>
            <span className="text-neutral-500 font-medium font-secondary">{rooms}</span>
          </div>
          <div className="flex gap-2 whitespace-nowrap">
            <span className="material-symbols-outlined text-neutral-400">
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
      <motion.div onClick={(e) => e.stopPropagation()} layout layoutId={title} className="opened_cardlayout w-[90%] overflow-y-auto overflow-x-hidden md:w-[600px] lg:w-[800px] h-[90vh] bg-white z-[55] rounded-md">
        <img className="h-[25%] md:h-[30%] lg:h-[35%] w-full object-cover rounded-b-lg" src={image} alt={title} />
        <div className="px-6">
          <h1 className='text-2xl font-semibold mt-6'>{title}</h1>
          <p className="flex items-center gap-1 text-[15px] text-neutral-700">
            <span className="material-symbols-outlined text-xl">
              map
            </span>
            <span>{location}</span>
          </p>
          <div className="mt-7">
            <h3 className='mt-4 text-lg font-secondary font-medium text-blue-custom'>Apartment information</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 mt-3">
              <div className="flex gap-2 text-[17px] border-solid border-y-[1px] py-2 border-neutral-200">
                <span className="material-symbols-outlined">
                  {capacity === 1 ? 'Person' : capacity === 2 ? 'Group' : 'Groups'}
                </span>
                <span>{capacity} {capacity === 1 ? 'Person' : "People"}</span>
              </div>
              <div className="flex gap-2 text-[17px] border-solid border-y-[1px] py-2 border-neutral-200">
                <span className="material-symbols-outlined">
                  dashboard
                </span>
                <span>{squareMeters} m²</span>
              </div>
              <div className="flex gap-2 text-[17px] border-solid border-y-[1px] py-2 border-neutral-200">
                <span className="material-symbols-outlined">
                  bed
                </span>
                <span>{rooms} {rooms > 1 ? "rooms" : "room"}</span>
              </div>
              <div className="flex gap-2 text-[17px] border-solid border-y-[1px] py-2 border-neutral-200">
                <span className="material-symbols-outlined">
                  credit_card
                </span>
                <span>${formatter.format(price)}</span>
              </div>
            </div>
          </div>
          <div className="mt-7 ">
            <h3 className='text-lg font-secondary font-medium text-blue-custom'>Apartment description</h3>
            <p className="text-neutral-600 my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quod officiis architecto? Pariatur, ipsum impedit. Neque molestiae excepturi cumque ut consectetur id quibusdam hic reiciendis facilis quos architecto, veritatis inventore.</p>
            <p className="text-neutral-600 my-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit quis reiciendis asperiores hic culpa quod nobis expedita dignissimos ipsam itaque eos totam animi ipsum commodi vero, recusandae voluptates, repudiandae id!</p>
          </div>
          <div className="mt-7 mb-3 flex justify-between flex-wrap md:flex-nowrap gap-3 items-center">
            <div className='flex w-full md:w-auto gap-3 items-center'>
              <img className='w-14 h-14 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWZvdQfmuQAdPFIgXjTpYlSwI4YEVI1XvsVg&usqp=CAU" alt="Apartment Owner" />
              <div>
                <p className='font-semibold font-secondary text-[17px]'>Rachel Schmidt <span className='text-neutral-500 text-sm'>Owner</span></p>
                <a className='text-neutral-400' >rachelschimdt404@gmail.com</a>
              </div>
            </div>
            <button onClick={close} className="flex gap-1 w-full md:w-auto bg-blue-custom px-4 py-2 text-white rounded-md hover:bg-blue-500">
              <span className='material-symbols-outlined'>
                credit_card
              </span>
              <span>Continue checkout</span>
            </button>
          </div>

        </div>
      </motion.div>
    </Backdrop>
  )
}

PropertyCard.Normal = Normal
PropertyCard.Opened = Opened

export default PropertyCard