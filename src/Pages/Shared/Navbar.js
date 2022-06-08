import { Link } from 'react-scroll'
import ProfilePhoto from '../../images/1.png'
import { FiDownload } from 'react-icons/fi';

const Navbar = () => {
    window.addEventListener("scroll", () => {
        document
            .querySelector(".navbar")
            .classList.toggle("shadow-xl", window.scrollY > 100);
    });

    const menuItem = <>
        <li className='mr-2 hover:bg-secondary hover:text-white hover:ease-in-out duration-300 rounded-md hover:-translate-y-0.5'><Link activeClass="active" to="home" spy={true} smooth={true} className='text-decoration-none font-medium text-1xl'>Home</Link></li>

        <li className='mr-2 hover:bg-secondary hover:text-white hover:ease-in-out duration-300 rounded-md hover:-translate-y-0.5'><Link spy={true} smooth={true} className='text-decoration-none font-medium text-1xl' to='about'>About</Link></li>

        <li className='mr-2 hover:bg-secondary hover:text-white hover:ease-in-out duration-300 rounded-md hover:-translate-y-0.5'><Link spy={true} smooth={true} className='text-decoration-none font-medium text-1xl' to='service'>Services</Link></li>
        <li className='mr-2 hover:bg-secondary hover:text-white hover:ease-in-out duration-300 rounded-md hover:-translate-y-0.5'><Link spy={true} smooth={true} className='text-decoration-none font-medium text-1xl' to='portfolio'>Portfolio</Link></li>
        <li className='mr-2 hover:bg-secondary hover:text-white hover:ease-in-out duration-300 rounded-md hover:-translate-y-0.5'><Link spy={true} smooth={true} className='text-decoration-none font-medium text-1xl' to='blog'>Blog</Link></li>
        <li className='mr-2 hover:bg-secondary hover:text-white hover:ease-in-out duration-300 rounded-md hover:-translate-y-0.5'><Link spy={true} smooth={true} className='text-decoration-none font-medium text-1xl' to='contact'>Contact</Link></li>
        <li><button className="btn hover:btn-secondary text-white border-0 hover:bg-primary bg-secondary hover:ease-in-out duration-300 hover:text-white shadow-lg shadow-indigo-300/30 hover:-translate-y-1.5 rounded-md"><a href="https://drive.google.com/uc?id=1Gmn7ImCpljH6sksmGvbi7rPB9tfrAcBy&export=download" >

            <div className='flex justify-center items-center'>
                <div className='mr-2'>
                    <FiDownload />
                </div>
                <div> Resume</div>
            </div>

        </a></button></li>
    </>

    return (
        <div className="navbar bg-primary sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown lg:hidden">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <div className="flex">
                    <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={ProfilePhoto} alt="" />
                    <Link to='/' className="btn btn-ghost normal-case text-xl">WEBDEV</Link>
                </div>
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