import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {

    const [openMenu, setopenMenu] = useState(false)
    const location = useLocation();

    // Desactivar scroll del body cuando se abre el menú
    useEffect(() => {
        if (openMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [openMenu]);

    // Cerrar menú al cambiar de ruta (cuando se navega)
    useEffect(() => {
        setopenMenu(false);
    }, [location.pathname]);

    return (
        <div className='bg-white fixed left-0 right-0 top-0 w-full z-50'>
            <nav className='bg-white flex h-24 items-center justify-between max-w-6xl mx-auto px-5 md:px-10 lg:px-0 w-full'>
                <Link to='/'>
                    <div className='flex gap-2 items-center'>
                        <div className='bg-peachred h-10 text-white p-2 rounded-full w-10'>
                            <Zap className='h-full w-full' fill='#fff' />
                        </div>
                        <span className='font-black text-darkblue text-xl'>IT Company</span>
                    </div>
                </Link>
                <div className='hidden lg:flex font-bold gap-10 items-center'>
                    <ul className='flex gap-5 text-darkblue'>
                        <li>
                            <Link to='/about'>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to='/our-services'>
                                Our Services
                            </Link>
                        </li>
                        <li>
                            <Link to='/portfolio'>
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link to='/blog'>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <button className='bg-peachred font-medium px-6 py-3 rounded-md text-white'>
                        Get In Touch
                    </button>
                </div>
                <button
                    className='h-8 lg:hidden text-darkblue w-8'
                    onClick={() => setopenMenu(!openMenu)}
                >
                    {openMenu ? <X className='h-full w-full' /> : <Menu className='h-full w-full' />}
                </button>
            </nav>
            <div
                className={`bg-offwhite lg:hidden px-5 md:px-10 overflow-hidden transition-all duration-300 ease-in-out
                ${openMenu ? 'max-h-[1000px]' : 'max-h-0'}`}>
                <ul className='flex flex-col md:flex-row md:justify-center md:gap-10 text-darkblue'>
                    <Link to='/'>
                        <li className='border-b md:border-none border-neutral-300 font-bold py-5 text-center text-2xl md:text-lg w-full'>
                            Home
                        </li>
                    </Link>
                    <Link to='/about'>
                        <li className='border-b md:border-none border-neutral-300 font-bold py-5 text-center text-2xl md:text-lg w-full'>
                            About Us
                        </li>
                    </Link>
                    <Link to='/our-services'>
                        <li className='border-b md:border-none border-neutral-300 font-bold py-5 text-center text-2xl md:text-lg w-full'>
                            Our Services
                        </li>
                    </Link>
                    <Link to='/portfolio'>
                        <li className='border-b md:border-none border-neutral-300 font-bold py-5 text-center text-2xl md:text-lg w-full'>
                            Portfolio
                        </li>
                    </Link>
                    <Link to='/blog'>
                        <li className='border-b md:border-none border-neutral-300 font-bold py-5 text-center text-2xl md:text-lg w-full'>
                            Blog
                        </li>
                    </Link>
                    <Link to='/contact'>
                        <li className='font-bold py-5 text-center text-2xl md:text-lg w-full'>
                            Contact
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar