import React from 'react'
import { klepon } from '../assets'

function Klepon() {
  return (
    <div className=' md:max-w-full bg-[#b48b10] py-[8rem] px-4'>
        <div className='max-w-[1280px] mx-auto grid md:grid-cols-2'>
            <img src={klepon} alt="gambarklepon" className='mx-auto md:ml-[6rem] md:w-[16rem]' />
            <div className=' handphonekecil:text-center md:text-left md:flex md:flex-col md:justify-center'>
            <p className='font-poppins text-[#f5e980] font-bold '> Pop the rainbow in your mouth 🌈</p>
            <h1 className='font-poppins text-2xl font-bold py-2 md:text-4xl  '>Rasakan tiga variasi rasa yang unik</h1>
            <p className='font-poppins md:text-[1.2rem] '> Kini anda bisa merasakan rasa klepon yang unik dan berbeda dari biasanya berkat adanya RAINPON</p>
            <div className='flex items-center'>
            <button className='bg-gradient-to-r from-[red] via-yellow-500 to-blue-500 
            animate-bounce font-bold w-[200px] font-poppins uppercase rounded-md my-6 py-3 px-[20px] drop-shadow-sm mx-auto z-[1]'
            > <p className='text-black'>HARGA HANYA 5K !</p> </button>
            </div>
            </div>
           
        </div>
    
    </div>
  )
}

export default Klepon