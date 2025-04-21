import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


function OddCard({title, img}) {
  return (
    <div className='flex flex-row border-b w-full'>
      <div className='flex-1 h-[200px] sm:h-[360px]'>
        <img src={img} alt={title} className='w-full h-[200px] sm:h-full object-cover' />
      </div>
      <div className='flex-1 py-6 h-[200px] sm:h-[360px] flex flex-col justify-center items-center border-l'>
        <h1 className='font-[Gilroy] text-[28px] md:text-[38px] leading-[120%] text-center px-6'>{title}</h1>
        <div className='py-4 w-full text-center'>
          <Link to="/category">
            <p className='inline-block px-4 text-[14px] sm:text[16px] font-[Gilroy] font-semibold leading-[120%] tracking-[2.5%]'><FaArrowLeftLong className='inline-block' /> Shop now</p>
          </Link>
        </div>
      </div>
    </div>


  )
}

export default OddCard
