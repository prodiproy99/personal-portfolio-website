import React from 'react';
import Person from '../../images/1.png'
import { FiFacebook, FiLinkedin } from 'react-icons/fi';
import { AiOutlineGitlab } from 'react-icons/ai'; 

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-primary px-16 py-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="bg-base-200 shadow-lg shadow-cyan-500/50 rounded-lg">
                <img className='max-w-sm brightness-120' src={Person} alt='' />
                </div>
                <div>
                    <h1 className="text-5xl font-bold"><span style={{ color: "#ff014f" }}>I am a</span> Front-end Web Developer</h1>
                    <p className="py-6">I'm a Freelancer Front-end web developer based in Dhaka, Bangladesh. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design</p>
                    <div className="my-2">
                    <button className="btn leading-10 hover:btn-secondary text-black border-0 bg-base-100 hover:bg-secondary hover:ease-in-out duration-300 hover:text-white shadow-lg shadow-indigo-300/30 hover:-translate-y-1.5 rounded-md"><a href="https://drive.google.com/uc?id=1Gmn7ImCpljH6sksmGvbi7rPB9tfrAcBy&export=download" >Resume</a></button>
                  </div>
                    <br />
                    <h2>FIND WITH ME</h2>
                    <div className="flex">
                        <div className='bg-base-100 shadow-lg shadow-cyan-500/50 inline-block mt-5 px-3 py-3 text-2xl rounded-full hover:bg-yellow-600 hover:text-white hover:-translate-y-1.5 ease-in-out duration-300 mr-5'><a target='_blank' href='https://web.facebook.com/prodiproyp.9231/'><FiFacebook /></a></div>
                        <div className='bg-base-100 shadow-lg shadow-cyan-500/50 inline-block mt-5 px-3 py-3 text-2xl rounded-full hover:bg-yellow-600 hover:text-white hover:-translate-y-1.5 ease-in-out duration-300 mr-5'><a target='_blank' href=' https://www.linkedin.com/in/prodip-roy-024648211/'><FiLinkedin /></a></div>
                        <div className='bg-base-100 shadow-lg shadow-cyan-500/50 inline-block mt-5 px-3 py-3 text-2xl rounded-full hover:bg-yellow-600 hover:text-white hover:-translate-y-1.5 ease-in-out duration-300'><a target='_blank' href=' https://github.com/prodiproy99'><AiOutlineGitlab /></a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;