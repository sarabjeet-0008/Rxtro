import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { CgClose } from 'react-icons/cg';
import { useCart } from '../context/CartContext';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = ({location, getLocation, openDropdown, setOpenDropdown}) => {

  const {cartItem} = useCart()
  const[openNav, setOpenNav] = useState(false)

const toggleDrodown = () => {
    setOpenDropdown(!openDropdown)
} 
    return (
        <div className='bg-white py-3 shadow-2xl px-4 md:px-0'>
            <div className='max-w-6xl mx-auto flex justify-between items-center'>
             {/* logo section */}
             <div className='flex gap-7 items-center'>
              <Link to={'/'}><h1 className='font-bold text-4xl'><span className='text-green-600 font-serif'>R</span>xtro</h1></Link>
              <div className='md:flex gap-1 cursor-pointer text-grey-700 items-center hidden'>
                <MapPin className='text-green-600'/>
                <span className='font-semibold'>{location ? <div className='-space-y-2'>

                    <p>{location.city_district}</p>
                    <p>{location.suburb}</p>

                </div>: "Add address"}</span>
                <FaCaretDown onClick={toggleDrodown}/>
              </div>
              {
                openDropdown ? <div className='w[250px] h-max shadow-2xl z-50 bg-white fixed top-16 left-60 border-2 p-5 border-grey-100 rounded-r-md'>
                <h1 className='font-semibold mb-4 text-xl flex justify-between'>Change Location<span onClick={toggleDrodown}><CgClose/></span></h1>
                <button onClick={getLocation}className='bg-green-700 text-white rounded-md px-3 py-1 cursor-pointer hover:bg-green-600'>Detect my location</button>
                </div> : null
              }
             </div>
             {/* Menu section */}
             <nav className='flex gap-7 items-center'>
                <ul className='md:flex gap-7 items-center text-xl font-normal hidden'>
                    <NavLink to={'/'} className={({isActive}) => `${isActive ? "border-b-3 transition-all border-green-700" : "text-black"} cursor-pointer`}><li>Home</li></NavLink>
                    <NavLink to={'/products'} className={({isActive}) => `${isActive ? "border-b-3 transition-all border-green-700" : "text-black"} cursor-pointer`}><li>Products</li></NavLink>
                    <NavLink to={'/about'} className={({isActive}) => `${isActive ? "border-b-3 transition-all border-green-700" : "text-black"} cursor-pointer`}><li>About</li></NavLink>
                    <NavLink to={'/contact'} className={({isActive}) => `${isActive ? "border-b-3 transition-all border-green-700" : "text-black"} cursor-pointer`}><li>Contact</li></NavLink>
                </ul>
                <Link to={'/cart'} className='relative'>
                <IoCartOutline className='h-7 w-7'/>
                <span className='bg-green-700 px-2 rounded-full absolute -top-3 -right-3 text-white'>{cartItem.length}</span>
                </Link>
                <div className='hidden md:block'>
                    <SignedOut>
                     <SignInButton className='bg-green-700 text-white px-3 py-1 rounded-md cursor-pointer' />
                      </SignedOut>
                        <SignedIn>
                         <UserButton/>
                        </SignedIn>
                </div>
                {
                  openNav ? <HiMenuAlt3 onClick={()=> setOpenNav(false)} className='h-7 w-7 md:hidden'/> : 
                  <HiMenuAlt1 onClick={()=> setOpenNav(true)}className='h-7 w-7 md:hidden'/>
                }
             </nav>
          </div>
          <ResponsiveMenu openNav={openNav} setOpenNav={setOpenNav}/>
        </div>
    );
}

export default Navbar;