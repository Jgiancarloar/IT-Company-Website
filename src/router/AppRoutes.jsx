import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import OurServicesPage from '../pages/OurServicesPage'
import PortfolioPage from '../pages/PortfolioPage'
import BlogPage from '../pages/BlogPage'
import ContactPage from '../pages/ContactPage'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/our-services' element={<OurServicesPage />} />
            <Route path='/portfolio' element={<PortfolioPage />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/contact' element={<ContactPage />} />
        </Routes>
    )
}

export default AppRoutes