import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItem = <>
        <li><Link className='text-decoration-none font-medium text-xl' to='/home'>Home</Link></li>
        <li><Link className='text-decoration-none font-medium text-xl' to='/about'>About</Link></li>
        <li><Link className='text-decoration-none font-medium text-xl' to='/service'>Services</Link></li>
        <li><Link className='text-decoration-none font-medium text-xl' to='/portfolio'>Portfolio</Link></li>
        <li><Link className='text-decoration-none font-medium text-xl' to='/blog'>Blog</Link></li>
        <li><Link className='text-decoration-none font-medium text-xl' to='/contact'>Contact</Link></li>  
        </>
  
    return (
        <div className="navbar bg-accent mx-auto px-12">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                     
                     {menuItem}
                     
                </ul>
            </div>
        </div>
    );
};

export default Navbar;