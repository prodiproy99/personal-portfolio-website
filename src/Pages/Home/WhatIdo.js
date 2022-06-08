import React from 'react';
import { BsCodeSlash, BsLaptop } from 'react-icons/bs';
import { SiMinutemailer } from 'react-icons/si';
import { AiOutlineComment } from 'react-icons/ai';
import { BiSupport } from 'react-icons/bi';
import { DiResponsive } from 'react-icons/di';

const WhatIdo = () => {
    return (
        <div id="service" className="bg-primary mx-auto py-24">
            <h2 className='text-3xl text-left font-bold uppercase'>What I do </h2>
            <div className="min-h-screen">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 grid-cols-1 mt-20">
                    <div>
                        <div className='p-10 bg-accent hover:bg-secondary hover:ease-in-out duration-300 hover:text-white shadow-lg shadow-indigo-500/50 hover:-translate-y-1.5 rounded-md'>
                            <div className="py-6">
                                <div><BsCodeSlash className='text-5xl' /></div>
                                <p className='my-5 text-2xl font-semi-bold'>Web development</p>
                                <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='p-10 bg-accent hover:bg-secondary hover:ease-in-out duration-300 hover:text-white shadow-lg shadow-indigo-500/50 hover:-translate-y-1.5 rounded-md'>
                            <div className="py-6">
                                <div><BsLaptop className='text-5xl' /></div>
                                <p className='my-5 text-2xl font-semi-bold'>Web Design</p>
                                <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='p-8 bg-accent hover:bg-secondary hover:ease-in-out duration-300 hover:text-white shadow-lg shadow-indigo-500/50 hover:-translate-y-1.5 rounded-md'>
                            <div className="py-6">
                                <div><DiResponsive className='text-6xl' /></div>
                                <p className='my-5 text-2xl font-semi-bold'>Responsive Design</p>
                                <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='p-10 bg-accent hover:bg-secondary hover:ease-in-out duration-300 hover:text-white shadow-lg shadow-indigo-500/50 hover:-translate-y-1.5 rounded-md'>
                            <div className="py-6">
                                <div><SiMinutemailer className='text-5xl' /></div>
                                <p className='my-5 text-2xl font-semi-bold'>Email Marketing</p>
                                <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='p-10 bg-accent hover:bg-secondary hover:ease-in-out duration-300 hover:text-white shadow-lg shadow-indigo-500/50 hover:-translate-y-1.5 rounded-md'>
                            <div className="py-6">
                                <div><AiOutlineComment className='text-5xl' /></div>
                                <p className='my-5 text-2xl font-semi-bold'>Live Support</p>
                                <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='p-10 bg-accent hover:bg-secondary hover:ease-in-out duration-300 hover:text-white shadow-lg shadow-indigo-500/50 hover:-translate-y-1.5 rounded-md'>
                            <div className="py-6">
                                <div><BiSupport className='text-5xl' /></div>
                                <p className='my-5 text-2xl font-semi-bold'>Support</p>
                                <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>

        </div>
    );
};

export default WhatIdo;