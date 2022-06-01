import React from 'react';
import Person from '../../images/1.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-accent mx-auto px-16">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='max-w-sm' src={Person} alt='' />
                <div>
                    <h1 className="text-5xl font-bold">I am a <span style={{color: "orange"}}>Front-end Web Developer</span></h1>
                    <p className="py-6">I'm a Freelancer Front-end web developer based in Dhaka, Bangladesh. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design</p>
                    <button className="btn btn-secondary text-white mr-5">More About Me</button>
                    <button className="btn btn-secondary text-white">Portfolio</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;