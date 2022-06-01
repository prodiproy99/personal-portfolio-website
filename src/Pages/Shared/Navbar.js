import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItem = <>
        <li><Link className='text-decoration-none' to='/home'>Home</Link></li>
        <li><Link className='text-decoration-none' to='/about'>About</Link></li>
        <li><Link className='text-decoration-none' to='/service'>Services</Link></li>
        <li><Link className='text-decoration-none' to='/portfolio'>Portfolio</Link></li>
        <li><Link className='text-decoration-none' to='/blog'>Blog</Link></li>
        <li><Link className='text-decoration-none' to='/contact'>Contact</Link></li>  
        </>
  
    return (
        <div class="navbar bg-base-100">
            <div class="flex-1">
                <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal p-0">
                     
                     {menuItem}
                     
                </ul>
            </div>
        </div>
    );
};

export default Navbar;