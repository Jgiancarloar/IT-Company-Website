import React from 'react'
import { Zap } from 'lucide-react';
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaReact, FaWordpress, FaWix } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-darkblue px-5 md:px-10 lg:px-0 py-24'>
      <div className='gap-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto w-full'>
        <div>
          <div className='flex gap-2 items-center mb-5'>
            <div className='bg-peachred h-10 text-darkblue p-2 rounded-full w-10'>
              <Zap className='h-full w-full' fill='#0e1f51' />
            </div>
            <span className='font-black text-white text-xl'>IT Company</span>
          </div>
          <p className='mb-7 text-white'>
            It is a long established
            fact that a reader will be distracted by the readable content of a page when looking at
          </p>
          <div className='flex gap-5 text-peachred'>
            <div className='bg-white aspect-square p-2 rounded-lg w-12'>
              <FaLinkedin className='h-full w-full' />
            </div>
            <div className='bg-white aspect-square p-2 rounded-lg w-12'>
              <FaInstagram className='h-full w-full' />
            </div>
            <div className='bg-white aspect-square p-2 rounded-lg w-12'>
              <FaFacebook className='h-full w-full' />
            </div>
            <div className='bg-white aspect-square p-2 rounded-lg w-12'>
              <FaTwitter className='h-full w-full' />
            </div>
          </div>
        </div>
        <div>
          <h2 className='font-bold mb-5 text-offwhite text-2xl'>
            Services
          </h2>
          <div className='bg-peachred h-1 mb-7 w-12'></div>
          <ul className='flex flex-col font-medium gap-5 text-white'>
            <li>Web Design/Development</li>
            <li>App Development</li>
            <li>UI/UX Design</li>
            <li>HubSpot Integration</li>
            <li>Email Marketing</li>
            <li>Website Migration</li>
          </ul>
        </div>
        <div>
          <h2 className='font-bold mb-5 text-offwhite text-2xl'>
            Career
          </h2>
          <div className='bg-peachred h-1 mb-7 w-12'></div>
          <div className='flex flex-col gap-5'>
            <div className='flex gap-5'>
              <div className='bg-white h-17 p-3 rounded-lg text-peachred w-17'>
                <FaReact className='h-full w-full' strokeWidth={1.5} />
              </div>
              <div className='flex flex-col flex-1 justify-center'>
                <h3 className='font-bold mb-2 text-peachred text-xl'>ReactJS Dev.</h3>
                <p className='font-medium text-white'>1-5 Years of Exp.</p>
              </div>
            </div>
            <div className='flex gap-5'>
              <div className='bg-white h-17 p-3 rounded-lg text-peachred w-17'>
                <FaWordpress className='h-full w-full' strokeWidth={1.5} />
              </div>
              <div className='flex flex-col flex-1 justify-center'>
                <h3 className='font-bold mb-2 text-peachred text-xl'>Wordpress Dev.</h3>
                <p className='font-medium text-white'>1-5 Years of Exp.</p>
              </div>
            </div>
            <div className='flex gap-5'>
              <div className='bg-white h-17 p-3 rounded-lg text-peachred w-17'>
                <FaWix className='h-full w-full' strokeWidth={1.5} />
              </div>
              <div className='flex flex-col flex-1 justify-center'>
                <h3 className='font-bold mb-2 text-peachred text-xl'>Python Developer</h3>
                <p className='font-medium text-white'>1-5 Years of Exp.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className='font-bold mb-5 text-offwhite text-2xl'>
            Subscribe Us
          </h2>
          <div className='bg-peachred h-1 mb-7 w-12'></div>
          <p className='font-medium mb-7 text-white text-xl'>
            It is a long established
            fact that a reader will be distracted by the readable
          </p>
          <form className='flex flex-col'>
            <input
              className='bg-white font-medium mb-5 outline-none p-3 placeholder:text-black rounded-lg w-full'
              placeholder='Email'
              type="text"
            />
            <button
              className='bg-peachred font-medium ml-auto px-6 py-3 rounded-lg text-white w-fit'
              type='submit'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer