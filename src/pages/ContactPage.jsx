import React from 'react'
import Banner from '../components/contactPage/Banner'
import ContactForm from '../components/contactPage/ContactForm'

const Contact = () => {
  return (
    <div className='flex flex-col w-full'>
      <section className='bg-darkblue flex flex-col h-72 items-center justify-center w-full'>
        <h1 className='font-bold mb-2 text-peachred text-5xl'>
          Contact
        </h1>
        <h2 className='font-medium text-white text-2xl'>
          Home / Contact
        </h2>
      </section>
      <section className='bg-peachred/5 not-odd:w-full'>
        <ContactForm />
      </section>
      <section className='w-full'>
        <Banner />
      </section>
    </div>
  )
}

export default Contact