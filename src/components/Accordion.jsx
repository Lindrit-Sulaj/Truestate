import React, { useState, useContext, createContext } from 'react';
import { motion, LayoutGroup } from 'framer-motion';

const GroupContext = createContext();
const useAccordion = () => useContext(GroupContext)

const Group = ({ children }) => {
  const [selectedAccordion, setSelectedAccordion] = useState('Is truestate safe?');

  return (
    <GroupContext.Provider value={{ selectedAccordion, setSelectedAccordion }}>
      <LayoutGroup>
        {children}
      </LayoutGroup>
    </GroupContext.Provider>
  )
}

const Accordion = ({ icon, title, text }) => {
  const { selectedAccordion, setSelectedAccordion } = useAccordion();
  const isSelected = selectedAccordion === title;

  return (
    <div className={`border-solid border-y-[1px] px-2 py-3 my-2 flex items-start gap-2`}>
      <span className={`material-symbols-outlined text-blue-custom`}>{icon}</span>
      <div>
        <h2 className='text-[17px] font-medium font-secondary cursor-pointer' onClick={() => setSelectedAccordion(title)}>{title}</h2>
        <motion.p
          className={`overflow-hidden max-w-lg ${isSelected ? "mt-2" : "mt-0"} text-neutral-500`}
          layout
          transition={{ type: 'just' }}
          initial={{ height: 0 }}
          animate={isSelected ? { height: "auto" } : {}} >{text}</motion.p>
      </div>
    </div>
  )
}

Accordion.Group = Group;
export default Accordion