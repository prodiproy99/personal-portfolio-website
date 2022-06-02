import React from 'react';
import ContactImg from '../../images/contact1.png'
import { FiFacebook, FiLinkedin } from 'react-icons/fi';
import { AiOutlineGitlab } from 'react-icons/ai'; 

const Contact = () => {
    return (
        <div id='contact' className='mt-32 bg-gray-100 py-24'>
            <h2 className='text-3xl text-center font-bold uppercase'>Contact With <span style={{ color: 'orange' }}>Me</span></h2>
            <div className="flex flex-col lg:flex-row mx-auto px-12 mt-10 justify-center justify-between">
                <div className="w-1/3 p-5 bg-gradient-to-r from-blue-100 to-white-200 shadow-lg shadow-indigo-500/50 mr-10">
                    <div>
                        <div className="truncate">
                            <img className='hover:scale-125 ease-in-out duration-300' src={ContactImg} alt='' />
                        </div>
                        <h2 className='text-3xl font-bold mt-5 mb-3'>Prodip Roy</h2>
                        <p>I am available for freelance work. Connect with me via and call in to my account.</p>
                        <p>Phone: +880 1966560165</p>
                        <p>Email: rprodipchandro@gmail.com</p>
                        <h2 className='mt-5'>FIND WITH ME</h2>
                        <div className="flex">
                            <div className='bg-base-200 shadow-lg shadow-cyan-500/50 inline-block mt-5 px-3 py-3 text-2xl rounded-full hover:bg-yellow-600 hover:text-white hover:-translate-y-1.5 ease-in-out duration-300 mr-5'><a target='_blank' href='https://web.facebook.com/prodiproyp.9231/'><FiFacebook /></a></div>
                            <div className='bg-base-200 shadow-lg shadow-cyan-500/50 inline-block mt-5 px-3 py-3 text-2xl rounded-full hover:bg-yellow-600 hover:text-white hover:-translate-y-1.5 ease-in-out duration-300 mr-5'><a target='_blank' href=' https://www.linkedin.com/in/prodip-roy-024648211/'><FiLinkedin /></a></div>
                            <div className='bg-base-200 shadow-lg shadow-cyan-500/50 inline-block mt-5 px-3 py-3 text-2xl rounded-full hover:bg-yellow-600 hover:text-white hover:-translate-y-1.5 ease-in-out duration-300'><a target='_blank' href=' https://github.com/prodiproy99'><AiOutlineGitlab /></a></div>
                        
                    </div>
                </div>
            </div>
            <div className="w-2/3 p-5 bg-blue-100 shadow-lg shadow-indigo-500/50">
                <form>
                    <div className="flex justify-center justify-between">
                        <label class="block">
                            <span className="block text-sm font-normal text-slate-400 mb-4">Your Name</span>
                            <input type="text" class="input w-80" />

                        </label>
                        <label class="block">
                            <span className="block text-sm font-normal text-slate-400 mb-4">Phone Number</span>
                            <input type="number" class="input w-80" />

                        </label>
                    </div>
                    <label class="block">
                        <span className="block text-sm font-normal text-slate-400 mb-4 mt-4">Email</span>
                        <input type="email" class="input w-full" />

                    </label>
                    <label class="block">
                        <span className="block text-sm font-normal text-slate-400 mb-4 mt-4">Subject</span>
                        <input type="text" class="input w-full" />

                    </label>
                    <label class="block">
                        <span className="block text-sm font-normal text-slate-400 mb-4 mt-4">Your Message</span>
                        <textarea className='w-full h-32 input'></textarea>

                    </label>
                    <label class="block">
                        <input type="button" value="Send Message" className='w-full bg-gradient-to-r from-yellow-100 to-white-200 shadow-lg shadow-cyan-500/50 mt-5 px-3 py-3 text-xl font-bold rounded-full hover:bg-yellow-600 hover:text-white hover:-translate-y-1.5 ease-in-out duration-300' />

                    </label>

                </form>
            </div>
        </div>
        </div >
    );
};

export default Contact;