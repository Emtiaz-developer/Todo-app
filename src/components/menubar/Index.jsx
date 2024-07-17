import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
   <div className='w-full bg-black py-5'>
    <div className='container flex justify-between items-center'>
    <div>
        <h1 className='text-xl text-white'>Logo</h1>
    </div>
    <div className='text-white font-mono flex gap-x-10 text-[17px] font-semibold '>
        <Link to="/">Home</Link>
        <Link to="/taskview">Task View</Link>
        <Link to="/contact">Contact</Link>
    </div>
    </div>
   </div>
   </>
  )
}

export default Navbar