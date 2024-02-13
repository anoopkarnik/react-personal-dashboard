import React from 'react'
import { AnimatePresence } from 'framer-motion';
import LeftSidebar from './LeftSidebar';
import Header from './Header';
import {Outlet} from 'react-router-dom'


const Layout = () => {
  return (
    <AnimatePresence>
        <div className='flex h-screen w-full bg-primary-light dark:bg-primary-dark transition duration-300'>
            <LeftSidebar/>
            <div className='flex flex-col w-full h-screen'>
                <Header/>
                <div className='w-full h-[95%] text-primary-light dark:text-primary-dark'>
                    <Outlet/>
                </div>
                
            </div>
        </div>
    </AnimatePresence>
  )
}

export default Layout