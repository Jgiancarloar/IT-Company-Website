import React from 'react'
import { LayoutTemplate, PenTool, Move, Smartphone, Plug, Mail } from 'lucide-react'

const Services = () => {

  const ourProcess = [
    {
      icon: LayoutTemplate,
      title: 'Web Design / Development',
      description: 'It is a long established fact that a reader will be distra by the readable content of a page.'
    },
    {
      icon: PenTool,
      title: 'UI/UX Design',
      description: 'It is a long established fact that a reader will be distra by the readable content of a page.'
    },
    {
      icon: Move,
      title: 'Website Migration',
      description: 'It is a long established fact that a reader will be distra by the readable content of a page.'
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'It is a long established fact that a reader will be distra by the readable content of a page.'
    },
    {
      icon: Plug,
      title: 'HubSpot Integration',
      description: 'It is a long established fact that a reader will be distra by the readable content of a page.'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'It is a long established fact that a reader will be distra by the readable content of a page.'
    },
  ]

  return (
    <div className='flex flex-col max-w-6xl mx-auto px-5 md:px-10 lg:px-0 py-10 md:py-20'>
      <h3 className='font-semibold mb-3 md:text-center text-peachred text-2xl'>
        \ Services \
      </h3>
      <h2 className='font-bold mb-10 md:text-center text-darkblue text-4xl'>
        Our Expertice
      </h2>
      <div className='gap-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          ourProcess.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                className='bg-offwhite p-7 rounded-xl'
                key={index}
              >
                <div className='bg-white h-20 mb-5 p-4 rounded-xl w-20'>
                  <Icon strokeWidth={1.5} className='text-peachred h-full w-full' />
                </div>
                <h4 className='capitalize font-extrabold mb-5 text-darkblue text-xl'>{item.title}</h4>
                <div className='flex gap-2 h-[6px] mb-5'>
                  <div className='bg-peachred h-full rounded-xl w-16'></div>
                  <div className='bg-peachred h-full rounded-xl w-5'></div>
                </div>
                <p className='font-medium'>{item.description}</p>
              </article>
            )
          })
        }
      </div>
    </div>
  )
}

export default Services