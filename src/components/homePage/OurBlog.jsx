import React from 'react'
import post1 from '../../assets/post1.png'
import post2 from '../../assets/post2.png'
import post3 from '../../assets/post3.png'
import avatarImage1 from '../../assets/avatar-post.png'

const OurBlog = () => {

  const ourBlogs = [
    {
      title: 'The most Popular Business Of the Year',
      user: 'Ranold Jeff',
      date: 'May 4th, 2022',
      image:post1,
      avatarPost:avatarImage1
    },
    {
      title: 'The most Popular Business Of the Year',
      user: 'Patricia Anderson',
      date: 'Apr 27th, 2022',
      image:post2,
      avatarPost:avatarImage1
    },
    {
      title: 'The most Popular Business Of the Year',
      user: 'Elaine Luna',
      date: 'Apr 20th, 2022',
      image:post3,
      avatarPost:avatarImage1
    },
    {
      title: 'The most Popular Business Of the Year',
      user: 'Patricia Anderson',
      date: 'Apr 27th, 2022',
      image:post1,
      avatarPost:avatarImage1
    },
    {
      title: 'The most Popular Business Of the Year',
      user: 'Elaine Luna',
      date: 'Apr 20th, 2022',
      image:post2,
      avatarPost:avatarImage1
    },
    {
      title: 'The most Popular Business Of the Year',
      user: 'Patricia Anderson',
      date: 'Apr 27th, 2022',
      image:post3,
      avatarPost:avatarImage1
    },
  ]

  return (
    <div className='flex flex-col max-w-6xl mx-auto px-5 md:px-10 lg:px-0 py-10 md:py-20'>
      <h3 className='font-semibold mb-3 md:text-center text-peachred text-2xl'>
        \ Our Blog \
      </h3>
      <h2 className='font-bold mb-10 md:text-center text-darkblue text-4xl'>
        Latest Post
      </h2>
      <div className='gap-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          ourBlogs.map((item, index) => (
            <article
              className='bg-white drop-shadow-lg p-5 rounded-xl w-full'
              key={index}
            >
              <div className='bg-neutral-500 h-60 mb-5 overflow-hidden rounded-xl w-full'>
                <img src={item.image} alt="" className='h-full object-cover w-full' />
              </div>
              <h4 className='font-bold mb-5 text-peachred text-xl'>
                {item.title}
              </h4>
              <div className='flex gap-2 items-center justify-between'>
                <div className='flex gap-[6px] items-center'>
                  <div className='bg-neutral-500 h-10 rounded-full w-10'>
                    <img src={item.avatarPost} alt="" className='h-full object-cover w-full' />
                  </div>
                  <span className='flex-1 font-semibold text-darkblue'>
                    {item.user}
                  </span>
                </div>
                <span>
                  {item.date}
                </span>
              </div>
            </article>
          ))
        }
      </div>
    </div>
  )
}

export default OurBlog