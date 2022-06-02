import React from 'react';
import Person from '../../images/1.png'
import { FiFacebook, FiLinkedin } from 'react-icons/fi';
import { AiOutlineGitlab } from 'react-icons/ai'; 

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-accent mx-auto px-16">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='max-w-sm' src={Person} alt='' />
                <div>
                    <h1 className="text-5xl font-bold">I am a <span style={{ color: "orange" }}>Front-end Web Developer</span></h1>
                    <p className="py-6">I'm a Freelancer Front-end web developer based in Dhaka, Bangladesh. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design</p>

                    <br />
                    <h2>FIND WITH ME</h2>
                    <div className="flex">
                        <div className='bg-base-200 shadow-lg shadow-cyan-500/50 inline-block mt-5 px-3 py-3 text-2xl rounded-full hover:bg-yellow-600 hover:text-white hover:-translate-y-1.5 ease-in-out duration-300 mr-5'><a target='_blank' href='https://web.facebook.com/prodiproyp.9231/'><FiFacebook /></a></div>
                        <div className='bg-base-200 shadow-lg shadow-cyan-500/50 inline-block mt-5 px-3 py-3 text-2xl rounded-full hover:bg-yellow-600 hover:text-white hover:-translate-y-1.5 ease-in-out duration-300 mr-5'><a target='_blank' href=' https://www.linkedin.com/in/prodip-roy-024648211/'><FiLinkedin /></a></div>
                        <div className='bg-base-200 shadow-lg shadow-cyan-500/50 inline-block mt-5 px-3 py-3 text-2xl rounded-full hover:bg-yellow-600 hover:text-white hover:-translate-y-1.5 ease-in-out duration-300'><a target='_blank' href=' https://github.com/prodiproy99'><AiOutlineGitlab /></a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;