import React from 'react';
import { klepon } from '../assets';
import Typed from 'react-typed';
import {motion} from 'framer-motion';
import {useState} from 'react';
import Modal from './Modal';



function Hero() {
  const [modalNongol, setModalNongol]= useState(false);
  

  const modalDipencet = () => {
    setModalNongol(true);
  }
  
 
  return (
   <div>
    <div className='max-w[800px] pt-[96px] bg-cover mx-auto text-center bg-[#cc9d10] flex flex-col'>
       <h1 className=' text-[#f1d600] font-poppins text-[3rem] py-auto px-auto handphonekecil:text-[4rem]  md:text-[120px] '>
        RAINPON</h1>
       <h1 className='tracking-widest uppercase mt-[-15px] text-[#f2e045]/90 font-poppins text-[1.2rem] handphonekecil:text-[1.5rem] handphonekecil:mt-[-20px] md:text-[40px] md:mt-[-45px]'>
        Rainbow Klepon</h1>
        <div className='flex justify-center'>
         <p className='text-[#f2e045]/95 font-poppins text-[10px] handphonekecil:text-[15px] md:text-[22px]'> Klepon warna-warni dengan isian </p>
          <Typed 
          className=' text-[#f2e045]/90 ml-1 text-[10px] font-poppins handphonekecil:text-[15px] md:text-[22px]  '
          strings={['Keju','Coklat', 'Gula Merah']} 
          typeSpeed={140}
          backSpeed={180}
          loop
          />


        </div>
            <motion.button 
            whileHover={{scale: 1.1}}
            whileTap = {{scale: 0.8}}
            className='bg-[#f2e045] font-bold w-[200px] font-poppins uppercase rounded-md my-6 py-3 mx-auto'
            onClick={modalDipencet}
            > 
            Pesan Disini! 
            </motion.button>
        </div>
        {modalNongol && <Modal setModalNongol={setModalNongol} />}
</div>
    
  );
}

export default Hero