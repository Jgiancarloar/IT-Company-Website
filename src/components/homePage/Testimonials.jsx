import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import avatarImg from '../../assets/avatar-post.png'
import { Quote } from 'lucide-react';

const Testimonials = () => {

  const testimonial = [
    {
      content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.`,
      name: 'Samuel Karl',
      position: 'CEO'
    },
    {
      content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.`,
      name: 'Laura Smith',
      position: 'Marketing Manager'
    },
    {
      content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.`,
      name: 'Carlos Méndez',
      position: 'CTO'
    },
    {
      content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.`,
      name: 'Sophie Nguyen',
      position: 'Product Designer'
    },
    {
      content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.`,
      name: 'James O’Neill',
      position: 'Software Engineer'
    },
    {
      content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.`,
      name: 'Amara Diallo',
      position: 'UX Researcher'
    },
    {
      content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.`,
      name: 'Luca Romano',
      position: 'Operations Manager'
    },
    {
      content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.`,
      name: 'Fatima Zahra',
      position: 'HR Specialist'
    }
  ];

  return (
    <div className='flex flex-col max-w-6xl mx-auto px-5 md:px-10 lg:px-0 py-10 md:py-20'>
      <h3 className='font-semibold mb-3 md:text-center text-peachred text-2xl'>
        \ From our Customers \
      </h3>
      <h2 className='font-bold mb-10 md:text-center text-darkblue text-4xl'>
        Testimonials
      </h2>
      <div className='w-full md:w-2/3 mx-auto'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {
            testimonial.map((item, index) => (
              <SwiperSlide key={index}>
                <div className='bg-offwhite p-7 rounded-lg'>
                  <div className='flex items-start justify-between mb-10'>
                    <div className='h-20 rounded-full w-20'>
                      <img src={avatarImg} alt="" className='h-full object-cover w-full' />
                    </div>
                    <div className='h-14 w-14'>
                      <Quote fill='#ff3e54' className='h-full text-peachred w-full' />
                    </div>
                  </div>
                  <p className='font-medium mb-7 text-blackshade'>
                    {item.content}
                  </p>
                  <p className='font-bold mb-1 text-peachred'>
                    {item.name}
                  </p>
                  <p className='font-medium text-darkblue text-sm'>
                    {item.position}
                  </p>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonials