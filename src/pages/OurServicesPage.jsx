import React from 'react'
import WhatWeDo from '../components/ourServicesPage/WhatWeDo'
import Services from '../components/ourServicesPage/Services'
import Banner from '../components/ourServicesPage/Banner'

const OurServicesPage = () => {
  return (
    <div className='flex flex-col w-full'>
      <section className='bg-darkblue flex flex-col h-72 items-center justify-center w-full'>
        <h1 className='font-bold mb-2 text-peachred text-5xl'>
          Our Services
        </h1>
        <h2 className='font-medium text-white text-2xl'>
          Home / Our Services
        </h2>
      </section>
      <section className='bg-offwhite w-full'>
        <WhatWeDo />
      </section>
      <section className='w-full'>
        <Services />
      </section>
      <section className='w-full'>
        <Banner />
      </section>
    </div>
  )
}

export default OurServicesPage