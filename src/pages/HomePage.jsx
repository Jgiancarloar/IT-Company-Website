import React from 'react'
import Hero from '../components/homePage/Hero'
import AboutUs from '../components/homePage/AboutUs'
import Planning from '../components/homePage/Planning'
import WhatWeDo from '../components/homePage/WhatWeDo'
import Services from '../components/homePage/Services'
import Teams from '../components/homePage/Teams'
import Testimonials from '../components/homePage/Testimonials'
import Contact from '../components/homePage/Contact'
import Blog from '../components/homePage/OurBlog'
import Banner from '../components/homePage/Banner'

const HomePage = () => {
    return (
        <div className='flex flex-col w-full'>
            <section className='w-full'>
                <Hero />
            </section>
            <section className='bg-offwhite w-full'>
                <AboutUs />
            </section>
            <section className='w-full'>
                <Planning />
            </section>
            <section className='bg-offwhite w-full'>
                <WhatWeDo />
            </section>
            <section className='w-full'>
                <Services />
            </section>
            <section className='bg-offwhite w-full'>
                <Teams />
            </section>
            <section className='w-full'>
                <Testimonials />
            </section>
            <section className='bg-darkblue w-full'>
                <Contact />
            </section>
            <section className='bg-offwhite w-full'>
                <Blog />
            </section>
            <section className='w-full'>
                <Banner />
            </section>
        </div>
    )
}

export default HomePage