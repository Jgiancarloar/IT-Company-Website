import React from 'react'
import whatWeDoImage from '../../assets/what-we-do.png'
import { Eye, Target } from 'lucide-react'

const WhatWeDo = () => {
  return (
    <div className='flex flex-col md:flex-row gap-10 max-w-6xl mx-auto px-5 md:px-10 lg:px-0 py-10 md:py-20'>
      <div className='flex flex-col justify-center md:order-1 w-full'>
        <h3 className='font-semibold mb-3 text-peachred text-2xl'>
          \ What We Do \
        </h3>
        <h2 className='font-bold mb-10 text-darkblue text-4xl'>
          We Develope Product That
          People Love to Use.
        </h2>
        <p className='font-medium mb-10'>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution
          of letters, as opposed
        </p>
        <div className='flex flex-col lg:flex-row gap-10 mb-10 rounded-xl w-full'>
          <div className='bg-white flex gap-4 items-center p-4 rounded-xl w-full'>
            <div className='bg-peachred/10 h-17 p-4 rounded-xl text-peachred w-17'>
              <Eye className='h-full w-full' strokeWidth={1.5} />
            </div>
            <div className='flex flex-col flex-1 '>
              <h4 className='font-bold text-peachred'>
                Our Vision
              </h4>
              <p className='font-medium text-darkblue'>
                It is a long esta
                -blished fact that
              </p>
            </div>
          </div>
          <div className='bg-white flex gap-4 items-center p-4 rounded-xl w-full'>
            <div className='bg-peachred/10 h-17 p-4 rounded-xl text-peachred w-17'>
              <Target className='h-full w-full' strokeWidth={1.5} />
            </div>
            <div className='flex flex-col flex-1 '>
              <h4 className='font-bold text-peachred'>
                Our Goal
              </h4>
              <p className='font-medium text-darkblue'>
                It is a long esta
                -blished fact that
              </p>
            </div>
          </div>
        </div>
        <button className='bg-peachred px-6 py-3 rounded-md text-xl text-white w-fit'>
          View More
        </button>
      </div>
      <div className='flex items-center justify-center w-full'>
        <img src={whatWeDoImage} alt="" className='h-full object-center object-cover rounded-lg w-full' />
      </div>
    </div>
  )
}

export default WhatWeDo