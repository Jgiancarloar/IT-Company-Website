import React from 'react'
import { Search, PencilRuler, Code, FlaskConical } from 'lucide-react'

const Planning = () => {

  const ourProcess = [
    {
      icon: Search,
      title: 'research',
      description: 'It is a long established fact that a reader will be distra by the readable content of a page.'
    },
    {
      icon: PencilRuler,
      title: 'design',
      description: 'It is a long established fact that a reader will be distra by the readable content of a page.'
    },
    {
      icon: Code,
      title: 'develope',
      description: 'It is a long established fact that a reader will be distra by the readable content of a page.'
    },
    {
      icon: FlaskConical,
      title: 'test',
      description: 'It is a long established fact that a reader will be distra by the readable content of a page.'
    },
  ]

  return (
    <div className='flex flex-col max-w-6xl mx-auto px-5 md:px-10 lg:px-0 py-10 md:py-20'>
      <h3 className='font-semibold mb-3 md:text-center text-peachred text-2xl'>
        \ Planning \
      </h3>
      <h2 className='font-bold mb-10 md:text-center text-darkblue text-4xl'>
        Our Process
      </h2>
      <div className='gap-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {
          ourProcess.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                className='bg-offwhite p-7 relative rounded-xl'
                key={index}
              >
                <div className='bg-white h-20 mb-5 p-4 rounded-xl w-20'>
                  <span className='absolute font-extrabold opacity-10 right-5 text-darkblue text-5xl top-5'>{(index + 1).toString().padStart(2, '0')}</span>
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

export default Planning