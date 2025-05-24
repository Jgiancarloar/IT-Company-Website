import React from 'react'
import Banner from '../components/portfolioPage/Banner'
import GridPortfolio from '../components/portfolioPage/GridPortfolio'

const Portfolio = () => {
  return (
    <div className='flex flex-col w-full'>
      <section className='bg-darkblue flex flex-col h-72 items-center justify-center w-full'>
        <h1 className='font-bold mb-2 text-peachred text-5xl'>
          Portfolio
        </h1>
        <h2 className='font-medium text-white text-2xl'>
          Home / Portfolio
        </h2>
      </section>
      <section className='w-full'>
        <GridPortfolio />
      </section>
      <section className='w-full'>
        <Banner />
      </section>
    </div>
  )
}

export default Portfolio