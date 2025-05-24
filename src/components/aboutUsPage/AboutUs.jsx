import React from 'react'
import aboutUsImage from '../../assets/about-us.png'
import { HandHelping } from 'lucide-react';

const AboutUs = () => {
    return (
        <div className='flex flex-col md:flex-row gap-10 max-w-6xl mx-auto px-5 md:px-10 lg:px-0 py-10 md:py-20'>
            <div className='flex flex-col justify-center md:order-1 w-full'>
                <h3 className='font-semibold mb-3 text-peachred text-2xl'>
                    \ About us \
                </h3>
                <h2 className='font-bold mb-10 text-darkblue text-4xl'>
                    One of the Fastest Way to
                    Business Growth
                </h2>
                <p className='font-medium mb-10'>
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of
                    using Lorem Ipsum is that it has a more-or-less normal distribution
                    of letters, as opposed
                </p>
                <div className='bg-white flex gap-3 items-center p-3 rounded-xl w-fit'>
                    <div className='bg-offwhite h-16 p-2 rounded-xl text-peachred w-16'>
                        <HandHelping className='h-full w-full' strokeWidth={1.5} />
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-bold text-darkblue lg:text-xl'>Get Instant Professional Advice</p>
                        <p className='font-medium text-darkblue'>Ready to Help : <span className='font-bold text-peachred'>+1 356 678 7897</span></p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center w-full'>
                <img src={aboutUsImage} alt="" className='h-full object-center object-cover rounded-lg w-full' />
            </div>
        </div>
    )
}

export default AboutUs