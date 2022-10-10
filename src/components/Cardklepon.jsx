import React from 'react'
import { keju,coklat,original,wavebawah } from '../assets'


function Cardklepon() {
  return (
    <div className='flex bg-wave-bawah bg-cover'>
    <div className='  py-[60px]  w-full  mx-auto  ' >
        <div className='font-poppins text-[#f5e980] flex flex-col text-center text-2xl py- md:text-5xl'>
            <h1> Variasi Rasa RAINPON</h1>
        </div>
        
        <ul className='mx-auto flex flex-col items-center md:justify-around md:flex-row b '>
        <li className='text-center font-poppins text-2xl border-[#cc9d10] shadow-xl rounded-lg hover:scale-105 duration-300 px-8 my-[4rem] pb-4 md:my[1rem] md:mx-8'> <img src={keju} alt="keju" className='mx-auto items-center' /> 
        <p className='py-8 border-b border-yellow-200 mx-auto font-bold'>Klepon Coklat</p>
        <p className='py-8 border-b border-yellow-200 mx-auto'>Berisikan coklat yang manis</p>
        <p className='py-8 border-b border-yellow-200 mx-auto'>Ditaburi remukan Oreo</p>
        </li>
        <li className='text-center font-poppins text-2xl border-[#cc9d10] shadow-xl rounded-lg hover:scale-105 duration-300 px-8 my-[4rem] pb-4 md:my[1rem] md:mx-8'> <img src={coklat} alt="keju" className='mx-auto' /> 
        <p className='py-8 border-b border-yellow-200 mx-auto font-bold'>Klepon Strawberry</p>
        <p className='py-8 border-b border-yellow-200 mx-auto'>Berisikan selai strawberry yang manis</p>
        <p className='py-8 border-b border-yellow-200 mx-auto'>Ditaburi dengan gula halus</p>
        </li>
        <li className='text-center font-poppins text-2xl border-[#cc9d10] shadow-xl rounded-lg hover:scale-105 duration-300 px-8 my-[4rem] pb-4 md:my[1rem] md:mx-8'> <img src={original} alt="keju" className='mx-auto'/>
        <p className='py-8 border-b border-yellow-200 mx-auto font-bold'>Klepon Original</p>
        <p className='py-8 border-b border-yellow-200 mx-auto'>Berisikan Gula merah yang cair</p>
        <p className='py-8 border-b border-yellow-200 mx-auto'>Ditaburi parutan kelapa</p>
         </li>
        </ul>

    </div>
    </div>
  )
}

export default Cardklepon