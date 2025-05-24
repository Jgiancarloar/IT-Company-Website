import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='flex flex-col max-w-6xl mx-auto px-5 md:px-10 lg:px-0 py-10 md:py-20'>
      <h3 className='font-semibold mb-3 md:text-center text-peachred text-2xl'>
        \ Get In Touch \
      </h3>
      <h2 className='font-bold mb-10 md:text-center text-white text-4xl'>
        Hey! Let's Talk
      </h2>
      <div className='flex flex-col md:flex-row gap-10'>
        <form className='bg-white flex flex-col font-medium p-7 rounded-xl w-full lg:w-2/3'>
          <input
            className='bg-offwhite mb-5 outline-none p-4 placeholder:text-blackshade rounded-xl'
            placeholder='Name'
            type="text"
          />
          <input
            className='bg-offwhite mb-5 outline-none p-4 placeholder:text-blackshade rounded-xl'
            placeholder='Email'
            type="email"
          />
          <input
            className='bg-offwhite mb-5 outline-none p-4 placeholder:text-blackshade rounded-xl'
            placeholder='Phone'
            type="number"
          />
          <textarea
            className='bg-offwhite flex-1 mb-7 outline-none p-4 placeholder:text-blackshade rounded-xl'
            placeholder='Your Message'
          ></textarea>
          <button
          className='bg-peachred font-medium px-6 py-3 rounded-md text-white w-fit'
          >
            Send Now
          </button>
        </form>
        <div className='bg-white flex flex-col gap-12 p-7 rounded-xl w-full lg:w-1/3'>
          <div className='flex flex-col gap-7'>
            <div className='flex gap-4'>
              <div className='bg-offwhite h-17 p-4 rounded-xl text-peachred w-17'>
                <FaPhoneAlt className='h-full w-full' strokeWidth={1.5} />
              </div>
              <div className='flex-1'>
                <h3 className='font-bold text-peachred text-xl'>
                  Call Anytime
                </h3>
                <div>
                  <p>+91 23678 27867</p>
                  <p>+91 67678 92878</p>
                </div>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='bg-offwhite h-17 p-4 rounded-xl text-peachred w-17'>
                <FaEnvelope className='h-full w-full' strokeWidth={1.5} />
              </div>
              <div className='flex-1'>
                <h3 className='font-bold text-peachred text-xl'>
                  Send Email
                </h3>
                <div>
                  <p>connect@itfirms.com</p>
                  <p>hello@itfirms.com</p>
                </div>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='bg-offwhite h-17 p-4 rounded-xl text-peachred w-17'>
                <FaMapMarkerAlt className='h-full w-full' strokeWidth={1.5} />
              </div>
              <div className='flex-1'>
                <h3 className='font-bold text-peachred text-xl'>
                  Visit Us
                </h3>
                <p>
                  20 Island Park Road,
                  New Jearsy, New York, USA
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-7'>
            <h3 className='font-bold text-center text-darkblue text-2xl'>
              Follow us
            </h3>
            <div className='flex gap-5 text-offwhite'>
              <div className='bg-peachred p-4 rounded-xl w-full'>
                <FaLinkedin className='h-full w-full' strokeWith={1.5} />
              </div>
              <div className='bg-peachred p-4 rounded-xl w-full'>
                <FaInstagram className='h-full w-full' strokeWith={1.5} />
              </div>
              <div className='bg-peachred p-4 rounded-xl w-full'>
                <FaFacebook className='h-full w-full' strokeWith={1.5} />
              </div>
              <div className='bg-peachred p-4 rounded-xl w-full'>
                <FaTwitter className='h-full w-full' strokeWith={1.5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact