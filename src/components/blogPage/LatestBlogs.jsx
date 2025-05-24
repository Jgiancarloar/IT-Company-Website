import React from 'react'
import post1 from '../../assets/post1.png'
import post2 from '../../assets/post2.png'
import post3 from '../../assets/post3.png'
import avatar from '../../assets/avatar-post.png'

const LatestBlogs = () => {
    return (
        <div className='flex flex-col max-w-6xl mx-auto px-5 md:px-10 lg:px-0 py-10 md:py-20'>
            <h3 className='font-semibold mb-3 md:text-center text-peachred text-2xl'>
                \ Our Blogs \
            </h3>
            <h2 className='font-bold mb-10 md:text-center text-darkblue text-4xl'>
                Latest Blogs
            </h2>
            <div className='flex flex-col lg:flex-row gap-7 w-full'>
                <div className='bg-white drop-shadow-lg flex flex-col gap-5 p-5 rounded-lg w-full'>
                    <div className='bg-neutral-500 h-72 lg:h-full overflow-hidden rounded-lg w-full'>
                        <img src={post1} alt="" className='h-full object-cover w-full' />
                    </div>
                    <div>
                        <p className='font-semibold mb-2 text-blackshade text-sm'>May 4th, 2022</p>
                        <h4 className='font-bold mb-5 text-peachred text-xl'>
                            The most Popular Business Of the Year
                        </h4>
                        <div className='flex items-center justify-between'>
                            <div className='flex gap-2 items-center'>
                                <div className='bg-neutral-400 h-10 overflow-hidden rounded-full w-10'>
                                    <img src={avatar} alt="" className='h-full object-cover w-full' />
                                </div>
                                <p className='font-semibold text-darkblue'>Ranold Jeff.</p>
                            </div>
                            <p className='font-semibold text-blackshade text-sm'>2 Min Read</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row lg:flex-col gap-7 w-full'>
                    <div className='bg-white drop-shadow-lg flex flex-col lg:flex-row gap-5 h-full p-5 w-full'>
                        <div className='aspect-square bg-neutral-500 w-full lg:w-48 overflow-hidden rounded-lg'>
                            <img src={post2} alt="" className='h-full object-cover w-full' />
                        </div>
                        <div className='flex flex-col flex-1 justify-between'>
                            <div>
                                <p className='font-semibold mb-2 text-blackshade text-sm'>Apr 27th, 2022</p>
                                <h4 className='font-bold mb-5 text-peachred text-xl'>
                                    The most Popular Business Of the Year
                                </h4>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='flex gap-2 items-center'>
                                    <div className='bg-neutral-400 h-10 overflow-hidden rounded-full w-10'>
                                        <img src={avatar} alt="" className='h-full object-cover w-full' />
                                    </div>
                                    <p className='font-semibold text-darkblue'>Ranold Jeff.</p>
                                </div>
                                <p className='font-semibold text-blackshade text-sm'>2 Min Read</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white drop-shadow-lg flex flex-col lg:flex-row gap-5 h-full p-5 w-full'>
                        <div className='aspect-square bg-neutral-500 w-full lg:w-48 overflow-hidden rounded-lg'>
                            <img src={post3} alt="" className='h-full object-cover w-full' />
                        </div>
                        <div className='flex flex-col flex-1 justify-between'>
                            <div>
                                <p className='font-semibold mb-2 text-blackshade text-sm'>Apr 27th, 2022</p>
                                <h4 className='font-bold mb-5 text-peachred text-xl'>
                                    The most Popular Business Of the Year
                                </h4>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='flex gap-2 items-center'>
                                    <div className='bg-neutral-400 h-10 overflow-hidden rounded-full w-10'>
                                        <img src={avatar} alt="" className='h-full object-cover w-full' />
                                    </div>
                                    <p className='font-semibold text-darkblue'>Ranold Jeff.</p>
                                </div>
                                <p className='font-semibold text-blackshade text-sm'>2 Min Read</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestBlogs