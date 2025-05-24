import React from 'react'
import banner from '../../assets/banner.png'

const Banner = () => {
  return (
    <div className='max-w-6xl mx-auto md:px-10 lg:px-0 md:pb-20'>
      <div className='flex flex-col gap-7 items-center max-w-4xl mx-auto overflow-hidden px-5 py-14 relative md:rounded-xl'>
        <div className='absolute bg-darkblue opacity-90 inset-0 z-10'></div>
        <img src={banner} alt="" className='absolute h-full inset-0 object-right md:object-center object-cover z-0 w-full' />
        <h2 className='font-bold relative text-center text-offwhite text-3xl z-20'>
          “Some of the History of Our Company is that we are Catching up through Video”
        </h2>
        <button className='bg-peachred font-medium px-4 py-2 relative rounded-md text-white w-fit z-20'>
          Get In Touch
        </button>
      </div>
    </div>
  )
}

export default Banner