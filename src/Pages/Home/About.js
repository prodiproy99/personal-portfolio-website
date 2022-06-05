import React from 'react'; 

const About = () => {
    return (
        <div id="about" className="bg-primary mx-auto py-24">
            <h2 className='text-3xl text-center font-bold uppercase'>About <span style={{ color: '#ff014f' }}>Me</span></h2>
            <p className="py-6 text-1xl text-center font-semi-medium mb-5">I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.</p>
            <div>
                <div className="grid md:grid-cols-1 lg:grid-cols-2 grid-cols-1 gap-10 px-12">
                    <div>
                        <div className='p-5 mb-5 bg-accent hover:bg-secondary hover:ease-in-out duration-300 hover:text-white shadow-lg shadow-indigo-500/50 hover:-translate-y-1.5 rounded-md'>
                            <p className="text-2xl font-bold hover:text-white">Personal Info</p>
                            <div className="flex flex-col lg:flex-row md:flex-row justify-btween  ">
                                <div className="pt-6 mr-4">
                                    <p className='mb-3'><span className='font-medium'>Name:</span> Prodip Roy</p>
                                    <p className='mb-3'><span className='font-medium'>Age:</span> 26 years</p>
                                    <p className='mb-3'><span className='font-medium'>Nationality:</span> Bangladesh</p>
                                    <p><span className='font-medium'>Freenace:</span> Available</p>
                                </div>
                                <div className="py-6">
                                    <p className='mb-3'><span className='font-medium'>Address:</span> Dhaka, Bangladesh</p>
                                    <p className='mb-3'><span className='font-medium'>Phone:</span> +88 -1966560165</p>
                                    <p className='mb-3'><span className='font-medium'>Whatsapp:</span>  +880 1303496228</p>
                                    <p><span className='font-medium'>Email:</span> rprodipchandro@gmail.com</p>
                                </div>
                            </div> 
                        </div>
                    </div>

                    <div>
                        <div className='p-5 bg-accent hover:bg-secondary hover:ease-in-out duration-300 hover:text-white shadow-lg shadow-indigo-500/50 hover:-translate-y-1.5 rounded-md'>
                            <p className="text-2xl font-medium">Skill</p>
                            <div className="py-6">
                                <p className='mb-3'><span className='font-medium'>Frontend:</span> HTML, CSS, JavaScript, ES6, bootstrap, React, charting</p>
                                <p className='mb-3'><span className='font-medium'>Backend:</span> (node, express, API), Database (mongodb), Chrome Dev tool, Hosting, GitHub</p> 
                            </div>
                        </div>
                    </div>
                </div>
                   
            </div>
            
        </div> 

    );
};

export default About;