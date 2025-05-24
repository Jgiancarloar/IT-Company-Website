import React from 'react'
import portfolioImg1 from '../../assets/portfolio1.png'
import portfolioImg2 from '../../assets/portfolio2.png'
import portfolioImg3 from '../../assets/portfolio3.png'
import portfolioImg4 from '../../assets/portfolio4.png'
import portfolioImg5 from '../../assets/portfolio5.png'

const GridPortfolio = () => {
    return (
        <div className='flex flex-col items-center max-w-6xl mx-auto px-5 md:px-10 lg:px-0 py-10 md:py-20'>
            <h3 className='font-semibold mb-3 text-peachred text-2xl'>
                \ Portfolio \
            </h3>
            <h2 className='font-bold mb-12 text-darkblue text-4xl'>
                Our Work
            </h2>
            <ul
                className='gap-1 grid grid-cols-3 md:grid-cols-6 font-semibold mb-12 overflow-hidden rounded-lg text-blackshade uppercase'
            >
                <li className='bg-peachred px-5 py-3 text-center text-white'>all</li>
                <li className='bg-offwhite px-4 py-3 text-center'>life</li>
                <li className='bg-offwhite px-4 py-3 text-center'>moments</li>
                <li className='bg-offwhite px-4 py-3 text-center'>nature</li>
                <li className='bg-offwhite px-4 py-3 text-center'>stories</li>
                <li className='bg-offwhite px-4 py-3 text-center'>travel</li>
            </ul>
            <div className='gap-7 grid grid-cols-1 md:grid-cols-9 w-full'>
                <div className='bg-neutral-500 md:col-span-6 lg:col-span-6 h-60 md:h-60 lg:h-96 overflow-hidden rounded-md w-full'>
                    <img src={portfolioImg1} alt="" className='h-full object-cover w-full' />
                </div>
                <div className='bg-neutral-500 md:col-span-3 lg:col-span-3 h-60 md:h-60 lg:h-96 overflow-hidden rounded-md w-full'>
                    <img src={portfolioImg2} alt="" className='h-full object-cover w-full' />
                </div>
                <div className='bg-neutral-500 md:col-span-3 lg:col-span-2 h-60 md:h-60 lg:h-96 overflow-hidden rounded-md w-full'>
                    <img src={portfolioImg3} alt="" className='h-full object-cover w-full' />
                </div>
                <div className='bg-neutral-500 md:col-span-3 lg:col-span-3 h-60 md:h-60 lg:h-96 overflow-hidden rounded-md w-full'>
                    <img src={portfolioImg4} alt="" className='h-full object-cover w-full' />
                </div>
                <div className='bg-neutral-500 md:col-span-3 lg:col-span-4 h-60 md:h-60 lg:h-96 overflow-hidden rounded-md w-full'>
                    <img src={portfolioImg5} alt="" className='h-full object-cover w-full' />
                </div>
            </div>
        </div>
    )
}

export default GridPortfolio