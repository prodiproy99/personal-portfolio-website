import React from 'react';
import ContactImg from '../../images/contact1.png'
import { FiFacebook, FiLinkedin } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const Contact = () => {
    const SERVICE_ID = "service_xjjzysj";
    const TEMPLATE_ID = "template_pf6twvh";
    const USER_ID = "Q8yVnco38Y4w01Cod";

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    text: error.text,
                })
            });
        e.target.reset()
    };
    return (
        <div id='contact' className='mt-32 bg-gray-100 py-24'>
            <h2 className='text-3xl text-center font-bold uppercase'>Contact With <span style={{ color: "#ff014f" }}>Me</span></h2>
            <div className="flex flex-col lg:flex-row mx-auto mt-10 gap-10">
                <div className="p-5 bg-gradient-to-r from-blue-100 to-white-200 shadow-lg shadow-indigo-500/50">
                    <div>
                        <div className="truncate">
                            <img className='hover:scale-125 ease-in-out duration-300' src={ContactImg} alt='' />
                        </div>
                        <h2 className='text-3xl font-bold mt-5 mb-3'>Prodip Roy</h2>
                        <p>I am available for freelance work. Connect with me via and call in to my account.</p>
                        <p>Phone: <a href="tel:+88 01966560165">+880 1966560165</a></p>
                        <p>Email: <a href="mailTo:rprodipchandro@gmail.com">rprodipchandro@gmail.com</a></p>
                        <h2 className='mt-5'>FIND WITH ME</h2>
                        <div className="flex-col lg:flex-row block">
                            <div className='bg-base-200 shadow-lg shadow-cyan-500/50 inline-block mt-5 px-3 py-3 text-2xl rounded-full hover:bg-yellow-600 hover:text-white hover:-translate-y-1.5 ease-in-out duration-300 mr-5'><a target='_blank' href='https://web.facebook.com/prodiproyp.9231/'><FiFacebook /></a></div>
                            <div className='bg-base-200 shadow-lg shadow-cyan-500/50 inline-block mt-5 px-3 py-3 text-2xl rounded-full hover:bg-yellow-600 hover:text-white hover:-translate-y-1.5 ease-in-out duration-300 mr-5'><a target='_blank' href=' https://www.linkedin.com/in/prodip-roy-024648211/'><FiLinkedin /></a></div>
                            <div className='bg-base-200 shadow-lg shadow-cyan-500/50 inline-block mt-5 px-3 py-3 text-2xl rounded-full hover:bg-yellow-600 hover:text-white hover:-translate-y-1.5 ease-in-out duration-300'><a target='_blank' href=' https://github.com/prodiproy99'><AiFillGithub /></a></div>

                        </div>
                    </div>
                </div>
                <div className="p-5 bg-blue-100 shadow-lg shadow-indigo-500/50">

                    <Form onSubmit={handleOnSubmit}>
                        <div className="flex flex-col lg:flex-row gap-4">
                            <label class="block">
                                <span className="block text-sm font-normal text-slate-400 mb-4">Your Name</span>
                                <input 
                                type="text"
                                control={Input}
                                 name='name' required class="input lg:w-80 md:w-full sm:w-full" />

                            </label>
                            <label class="block">
                                <span className="block text-sm font-normal text-slate-400 mb-4">Phone Number</span>
                                <input 
                                type="number"
                                name='phone'
                                control={Input}
                                class="input lg:w-80 md:w-full sm:w-full" />

                            </label>
                        </div>
                        <label class="block">
                            <span className="block text-sm font-normal text-slate-400 mb-4 mt-4">Email</span>
                            <input type="email" 
                            name='email'
                            id='form-input-control-email' 
                            control={Input}
                             required icon='mail' class="input w-full" />

                        </label>
                        <label class="block">
                            <span className="block text-sm font-normal text-slate-400 mb-4 mt-4">Subject</span>
                            <input type="text" name='subject' class="input w-full" />

                        </label>
                        <label class="block">
                            <span className="block text-sm font-normal text-slate-400 mb-4 mt-4">Your Message</span>
                            <textarea 
                             control={TextArea}
                            name='message' required className='w-full h-32 input'></textarea>

                        </label>
                        <label class="block">
                            <Button type="submit"  
                             className='w-full bg-gradient-to-r from-yellow-100 to-white-200 shadow-lg shadow-cyan-500/50 mt-5 px-3 py-3 text-xl font-bold rounded-full hover:bg-yellow-600 hover:text-white hover:-translate-y-1.5 ease-in-out duration-300'>Send Message</Button>

                        </label>
                    </Form>
                </div>
            </div>
        </div >
    );
};

export default Contact;