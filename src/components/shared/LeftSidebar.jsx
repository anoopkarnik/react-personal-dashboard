import React,{useState} from 'react'
import { SIDEBAR_BOTTOM_LINKS, SIDEBAR_LINKS } from '../../lib/consts/navigation'
import { Link, useLocation } from 'react-router-dom'
const LeftSidebar = () => {


  return (
    <div className='text-secondary-light dark:text-primary-dark bg-quartary-light dark:bg-quartary-dark flex flex-col w-[5%] h-screen items-center justify-between'>

        <div className='h-[5%]'></div>
        <div className='w-full h-full flex flex-col items-center justify-start text-3xl'>
            {SIDEBAR_LINKS.map((link) => (
                <Link to={link.path} key={link.key} className='flex flex-col items-center justify-center w-full py-5 cursor-pointer border-top'>
                    <div>{link.icon}</div>
                    <div className='text-sm'>{link.label}</div>
                </Link>
            ))}
        </div>
        <div className='flex flex-col items-center justify-end text-3xl'>
            {SIDEBAR_BOTTOM_LINKS.map((link) => (
                <Link to={link.path} key={link.key} className='flex items-center justify-center w-full h-16 cursor-pointer'>
                    {link.icon}
                </Link>
            ))}
        </div>
    </div>
  )
}

export default LeftSidebar