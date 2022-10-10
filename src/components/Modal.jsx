import React from 'react'
import ReactDOM from 'react-dom'
import {motion} from 'framer-motion';
import {instagram, whatsapp} from '../assets'


function Modal({setModalNongol}) {
   const clickTutup= () => {
    setModalNongol(false)
   }

  return (
    <div className="  bg-yellow-800 opacity-95 fixed inset-0 z-50   ">
  
        <div className="flex h-screen w-screen justify-center items-center ">
  
             <div className=" pb-6 py-12 px-12 bg-zinc-400 border-1  md:pb-12 md:py-24 md:px-24 border-sky-500 rounded-xl ">

                    <div className="text-center text-lg mt-8 text-zinc-600  mb-10" >
                     <p className='mt-[-80px] font-poppins font-bold '> You can order through : </p>
                    </div>

                    <div className='flex flex-col text-white w-[250px]'>
                        <div className='flex flex-row items-center my-4'> 
                        <img src={instagram} alt="instagram" className='w-8 mr-16'/>
                           
                        <a href="https://www.instagram.com/rainponklepon/" target="_blank" rel="noreferrer"><motion.button whileHover={{scale: 1.1}}
                         whileTap = {{scale: 0.8}} 
                         className=' bg-[#f2e045] text-black rounded-xl py-auto px-[55px] ml-[-20px] font-poppins font-bold font-size-4 md:ml-auto' ><a> Instagram </a>   </motion.button>
                         </a>
                        </div>
                        <div className='flex flex-row items-center my-4'> 
                        <img src={whatsapp} alt='whatsapp' className='w-8 mr-16'/>
                        <motion.button whileHover={{scale: 1.1}}
                         whileTap = {{scale: 0.8}} className=' bg-[#f2e045] text-black ml-[-20px] rounded-xl py-auto px-[40px] font-poppins font-bold font-size-4 md:ml-auto'>Whatsapp 085947593529</motion.button>
                            
                        </div>

                    <div className='mx-auto my-auto'>
                        <motion.button 
                         whileHover={{scale: 1.1}}
                         whileTap = {{scale: 0.8}}
                         className='bg-[#4e4b29] font-bold  font-poppins uppercase rounded-md mt-[40px] my-2 py-2 px-6 '
                         onClick={clickTutup}
                         > 
                         Tutup
                         </motion.button>
                    </div>
                    </div>
                    </div>
            </div>
            

    </div>
  )
}

export default Modal