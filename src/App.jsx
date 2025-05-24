import React from 'react'
import AppRoutes from './router/AppRoutes'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'

const App = () => {
  return (
    <div className='flex flex-col font-raleway min-h-screen w-full'>
      <Navbar />
      <div className='flex-1 pt-24'>
        <ScrollToTop />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  )
}

export default App