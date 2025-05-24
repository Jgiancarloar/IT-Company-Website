import React from 'react'
import AboutUs from '../components/aboutUsPage/AboutUs'
import Teams from '../components/aboutUsPage/Teams'
import Banner from '../components/aboutUsPage/Banner'

const AboutPage = () => {
  return (
    <div className='flex flex-col w-full'>
      <section className='bg-darkblue flex flex-col h-72 items-center justify-center w-full'>
        <h1 className='font-bold mb-2 text-peachred text-5xl'>
          About Us
        </h1>
        <h2 className='font-medium text-white text-2xl'>
          Home / About Us
        </h2>
      </section>
      <section className='bg-offwhite w-full'>
        <AboutUs />
      </section>
      <section className='w-full'>
        <Teams />
      </section>
      <section className='w-full'>
        <Banner />
      </section>
    </div>
  )
}

export default AboutPage