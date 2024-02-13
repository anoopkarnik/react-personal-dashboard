 import React from 'react'
 import useThemeSwitcher from '../../hooks/UseThemeSwitcher';
 import { FiMoon, FiSun } from 'react-icons/fi';
 
 const Header = () => {
    const [activeTheme, setTheme] = useThemeSwitcher();

   return (
     <div className='bg-secondary-light dark:bg-secondary-dark  w-full h-[5%] flex items-center justify-between px-5'>
        <div></div>
        <div className='text-primary-light dark:text-primary-dark text-2xl font-semibold'>Dashboard</div>
        <div onClick={() => setTheme(activeTheme)}	aria-label="Theme Switcher"
			className=" bg-secondary-light dark:bg-secondary-dark p-3 shadow-sm rounded-xl cursor-pointer">
			{activeTheme === 'dark' ? (
				<FiMoon className="text-primary-light dark:text-primary-dark text-xl" />
				) : (
				<FiSun className="text-primary-light dark:text-primary-dark text-xl" />
			)}
		</div>
    </div>
   )
 }
 
 export default Header