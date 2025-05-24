import React from 'react'
import heroImage from '../../assets/hero1.png'

const Hero = () => {
    const handleClick = () => alert('probando')
    return (
        <div className='flex flex-col md:flex-row gap-10 max-w-6xl mx-auto px-5 md:px-10 lg:px-0 py-10 md:py-20'>
            <div className='flex flex-col justify-center w-full'>
                <h2 className='font-bold mb-3 text-peachred text-2xl'>
                    \ We Are Here \
                </h2>
                <h1 className='font-bold mb-5 text-darkblue text-5xl'>
                    Better Insights For Business Growth
                </h1>
                <button 
                onClick={handleClick}
                className='bg-peachred font-medium px-8 py-4 rounded-md text-xl text-white w-fit'>
                    View More
                </button>
            </div>
            <div className='flex items-center justify-center w-full'>
                <img src={heroImage} alt="" />
            </div>
        </div>
    )
}

export default Hero