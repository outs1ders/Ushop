import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { ShopContext } from '../../Context';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

const Navbar = () => {

  const activeStyle = 'underline underline-offset-4';
  
  const {
    count
  } = useContext( ShopContext )
  return(
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-normal'>
      <ul className='flex items-center gap-3 '>
        <li className='font-semibold text-lg'>
          <NavLink to='/'>
            Ushop
          </NavLink>
        </li>
        <li>
          <NavLink to='/' className ={({ isActive }) => 
              isActive ? activeStyle : undefined
            }>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to='/clothes' className ={({ isActive }) => 
              isActive ? activeStyle : undefined
            }>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink to='/electronics' className ={({ isActive }) => 
              isActive ? activeStyle : undefined
            }>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink to='/furnitures' className ={({ isActive }) => 
              isActive ? activeStyle : undefined
            }>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink to='/toys' className ={({ isActive }) => 
              isActive ? activeStyle : undefined
            }>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink to='/others' className ={({ isActive }) => 
              isActive ? activeStyle : undefined
            }>
            Others
          </NavLink>
        </li>
      </ul>
      
      <ul className='flex items-center gap-3'>
        <li className='text-black/70'>
          jcsanchez@gmail.com
        </li>
        <li>
          <NavLink to='/my-orders' className ={({ isActive }) => 
              isActive ? activeStyle : undefined
            }>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink to='/my-account' className ={({ isActive }) => 
              isActive ? activeStyle : undefined
            }>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink to='/signin' className ={({ isActive }) => 
              isActive ? activeStyle : undefined
            }>
            Sign In
          </NavLink>
        </li>
        <li className='flex'>
          <ShoppingCartIcon className='h-4 w-4'/> ({count})
        </li>
      </ul>
    </nav>
  )
}

export { Navbar }
