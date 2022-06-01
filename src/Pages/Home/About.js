import React from 'react';
import AboutMe from '../../images/code.png'

const About = () => {
    return (
        <div className="bg-base-100 mx-auto my-32">
            <h2 className='text-3xl text-center font-bold uppercase'>About <span style={{ color: 'orange' }}>Me</span></h2>
            <p className="py-6 text-1xl text-center font-semi-medium">I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.</p>
            <div className="min-h-screen justify-between">
                <div className="hero-content flex-col lg:flex-row">
                    <img style={{ width: '50%', borderRadius: "10px", boxShadow: "0px 0px 8px #ababab"}} className='left-0 mr-10 shadow-gray-600' src={AboutMe} alt='' />
                    <div>
                        <h1 className="text-2xl font-bold">Personal Info</h1>
                        <div className="flex">
                            <div className="py-6 mr-10">
                                <p className='mb-5'><span className='font-bold'>Name:</span> Prodip Roy</p>
                                <p className='mb-5'><span className='font-bold'>Age:</span> 26 years</p>
                                <p className='mb-5'><span className='font-bold'>Nationality:</span> Bangladesh</p>
                                <p><span className='font-bold'>Freenace:</span> Available</p>
                            </div>
                            <div className="py-6">
                                <p className='mb-5'><span className='font-bold'>Address:</span> Dhaka, Bangladesh</p>
                                <p className='mb-5'><span className='font-bold'>Phone:</span> +88 -1966560165</p>
                                <p className='mb-5'><span className='font-bold'>Whatsapp:</span>  +880 1303496228</p>
                                <p><span className='font-bold'>Email:</span> rprodipchandro@gmail.com</p>
                            </div>
                        </div>
                        <button className="btn btn-secondary text-white mr-5">Download CV</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;