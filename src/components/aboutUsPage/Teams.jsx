import React from 'react'
import leader1 from '../../assets/leader1.png'
import leader2 from '../../assets/leader2.png'
import leader3 from '../../assets/leader3.png'
import leader4 from '../../assets/leader4.png'

const Teams = () => {

  const ourProcess = [
    {
      name: 'Larry F. Burnett',
      position: 'CEO',
      image: leader1
    },
    {
      name: 'Meghan J. Webb',
      position: 'CTO',
      image: leader2
    },
    {
      name: 'Yvonne J. Cullum',
      position: 'CFO',
      image: leader3
    },
    {
      name: 'Diana H. Williams',
      position: 'COO',
      image: leader4
    },
    {
      name: 'Larry F. Burnett',
      position: 'CEO',
      image: leader1
    },
    {
      name: 'Meghan J. Webb',
      position: 'CTO',
      image: leader2
    },
    {
      name: 'Yvonne J. Cullum',
      position: 'CFO',
      image: leader3
    },
    {
      name: 'Diana H. Williams',
      position: 'COO',
      image: leader4
    },
  ]

  return (
    <div className='flex flex-col max-w-6xl mx-auto px-5 md:px-10 lg:px-0 py-10 md:py-20'>
      <h3 className='font-semibold mb-3 md:text-center text-peachred text-2xl'>
        \ Teams \
      </h3>
      <h2 className='font-bold mb-10 md:text-center text-darkblue text-4xl'>
        Our Leaders
      </h2>
      <div className='gap-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {
          ourProcess.map((item, index) => (
            <article
              className='w-full'
              key={index}
            >
              <div className='bg-neutral-500 h-80 mb-7 overflow-hidden rounded-xl w-full'>
            <img src={item.image} alt="" className='h-full object-cover w-full' />
              </div>
              <h4 className='font-bold mb-3 text-center text-peachred text-xl'>
                {item.name}
              </h4>
              <span className='block font-medium text-darkblue text-center'>
                {item.position}
              </span>
            </article>
          ))
        }
      </div>
    </div>
  )
}

export default Teams