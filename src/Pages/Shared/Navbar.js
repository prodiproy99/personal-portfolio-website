import React from 'react';
// import { Link } from 'react-router-dom';
import {Link} from 'react-scroll'

const Navbar = () => { 
    const menuItem = <>
        <li><Link activeClass="active" to="home" spy={true} smooth={true} className='text-decoration-none font-medium text-1xl'>Home</Link></li>

        <li><Link spy={true} smooth={true} className='text-decoration-none font-medium text-1xl' to='about'>About</Link></li>

        <li><Link spy={true} smooth={true} className='text-decoration-none font-medium text-1xl' to='service'>Services</Link></li>
        <li><Link spy={true} smooth={true} className='text-decoration-none font-medium text-1xl' to='portfolio'>Portfolio</Link></li>
        <li><Link spy={true} smooth={true} className='text-decoration-none font-medium text-1xl' to='blog'>Blog</Link></li>
        <li><Link spy={true} smooth={true} className='text-decoration-none font-medium text-1xl' to='contact'>Contact</Link></li>  
        </>
  
    return (
        <div className="navbar bg-primary">
            <div className="navbar-start">
                <div className="dropdown lg:hidden">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">WEBDEV</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                     
                {menuItem}

                </ul>
            </div>
             
        </div>
    );
};

export default Navbar;