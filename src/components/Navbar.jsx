import React, { useState } from 'react';
import {logo}from "../assets";
import {MdOutlineMenu, MdOutlineMenuOpen} from 'react-icons/md';
import {motion} from 'framer-motion';
import Modal from './Modal';



const Navbar = () => {
  const [nav, setNav] = useState(true)

  const [modalNongol, setModalNongol]= useState(false);

  const modalDipencet = () => {
    setModalNongol(true);
  }

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className=' flex justify-between items-center mx-auto h-22 px-4 bg-wave-atas bg-cover'>
         <img className='ml-1 handphone:ml-16 ' src={logo}/>
        <ul className=" hidden md:flex items-center ">
        <motion.button 
            whileHover={{scale: 1.1}}
            whileTap = {{scale: 0.8}}
            className='bg-[#b48b10] font-bold w-[200px] font-poppins uppercase rounded-md  my-6 py-3 mr-6'
            onClick={modalDipencet}
            > 
            Order Here!
            </motion.button>
        </ul>

        <div onClick={handleNav} className='display-block md:hidden'>
          {!nav ? <MdOutlineMenuOpen size={32} style={{ color: "black" }}/> : <MdOutlineMenu size={32} style={{ color: "black" }} /> }
        </div>
       
        <div className={!nav ? ' z-[2] lg:hidden fixed left-0 top-0 h-[100%] w-[45%] border-r border-r-green-600 bg-[#f5e980] ease-in-out duration-500' : 'fixed ease-in-out duration-100 left-[-100%]'}>
          <ul className='pt-20'>
          <img className='p-6 w-6/6 ' src={logo}/>
          <motion.button 
            whileHover={{scale: 1.1}}
            whileTap = {{scale: 0.8}}
            className='bg-[#f2e045] font-bold w-[200px] font-poppins uppercase rounded-md  my-6 py-3 ml-2'
            onClick={modalDipencet}
            > 
            Pesan Disini! 
            </motion.button>
          </ul>
        </div>
        {modalNongol && <Modal setModalNongol={setModalNongol} />}
    </div>
  );
};

export default Navbar;