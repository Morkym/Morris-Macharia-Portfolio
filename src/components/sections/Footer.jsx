import React from 'react'
import { findMe } from '../constants'

const Footer = () => {
  return (
    <div className=' flex flex-col justify-between items-start bg-black mt-4 px-20 '>
      <div className=' footer-container '>
        <div className='flex flex-col justify-center md:items-start items-center  '>
          <h1 className='mt:2 font-semibold text-2xl text-yellow-300 font-air '>Too cool for email?</h1>
          <div className='flex flex-row '>
            {findMe.map((item, ) => (
               <a key={item.name} href={item.link} className='flex flex-row gap-2 items-center bg-transparent hover:bg-gray-700 p-3 rounded-lg transition duration-300 text-white-50 justify-start'>
                    <img src={item.icon} alt="icon"  className='w-6 h-6'/>
                    {item.name}
                </a>
            ))}
          </div>
        </div>
      </div>
      <p className='italic text-white-500  mt-10  flex justify-center items-center w-full font-light'>&copy;2025 Morris Kimondo Macharia</p>

      
      </div>
     
  )
}

export default Footer