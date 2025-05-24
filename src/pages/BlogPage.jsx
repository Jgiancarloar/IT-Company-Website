import React from 'react'
import Banner from '../components/blogPage/Banner'
import LatestBlogs from '../components/blogPage/LatestBlogs'
import OurBlogs from '../components/blogPage/OurBlogs'

const Blog = () => {
  return (
    <div className='flex flex-col w-full'>
      <section className='bg-darkblue flex flex-col h-72 items-center justify-center w-full'>
        <h1 className='font-bold mb-2 text-peachred text-5xl'>
          Blogs
        </h1>
        <h2 className='font-medium text-white text-2xl'>
          Home / Blogs
        </h2>
      </section>
      <section className='w-full'>
        <LatestBlogs />
      </section>
      <section className='bg-offwhite w-full'>
        <OurBlogs />
      </section>
      <section className='w-full'>
        <Banner />
      </section>
    </div>
  )
}

export default Blog