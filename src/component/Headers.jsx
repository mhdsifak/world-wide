import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { GiWorld } from "react-icons/gi";
import { Link } from 'react-router-dom';

export default function Headers() {
  return (
  <header className=' shadow-xl '>
    <form className='items-center max-w-6xl flex justify-between p-3'>
    <Link to='/'>
      <div className='flex gap-1'>
      <GiWorld className=' size-6'/>
      <h1 className='text-sm sm:text-xl'><b>
        <span className='text-red-600'>WORLD</span>
        <span><i>WIDESHOP</i></span>
        </b></h1>
        </div>
        </Link>

    <form className='bg-slate-200 p-3 rounded-s-xl flex items-center'>
      <input type="text" placeholder="Search"
      className='bg-transparent focus:outline-none w-24 sm:w-64' />
      <FaSearch className='bg-slate-200'/>
    </form>
    <ul className='flex gap-3'>
      <Link to='/'>
      <li className='hidden sm:inline hover:underline'>Home</li>
      </Link>
      <Link to='About/'>
      <li className='hidden sm:inline hover:underline'>About</li>
      </Link>
      <Link to='Singin/'>
      <li className='hidden sm:inline hover:underline'>Singin</li>
      </Link>
    </ul>
    </form>
  </header>
  )
}
