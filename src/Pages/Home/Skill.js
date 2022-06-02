import React from 'react';

const Skill = () => {
    return (
        <div className="bg-base-100 mx-auto my-32">
            <h2 className='text-3xl text-center font-bold uppercase mb-10'>My <span style={{ color: 'orange' }}>Skill</span></h2>
            <div className="min-h-screen justify-between">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='mr-10'>
                        <div className="mb-5 w-96">
                            <h3 className='text-left font-bold ml-14'>HTML</h3>
                            <div className='flex items-center'><span className='font-bold text-2xl mr-2'>95%</span> <progress class="progress progress-info" value="95" max="100"></progress></div>
                        </div>

                        <div className="mb-5 w-96">
                            <h3 className='text-left font-bold ml-14'>BOOTSTRAP</h3>
                            <div className='flex items-center'><span className='font-bold text-2xl mr-2'>90%</span> <progress class="progress progress-info" value="90" max="100"></progress></div>
                        </div>
                        <div className="mb-5 w-96">
                            <h3 className='text-left font-bold ml-14'>JAVASCRIPT</h3>
                            <div className='flex items-center'><span className='font-bold text-2xl mr-2'>80%</span> <progress class="progress progress-info" value="80" max="100"></progress></div>
                        </div>
                        <div className="mb-5 w-96">
                            <h3 className='text-left font-bold ml-14'>NODE JS</h3>
                            <div className='flex items-center'><span className='font-bold text-2xl mr-2'>70%</span> <progress class="progress progress-info" value="70" max="100"></progress></div>
                        </div>
                        <div className="mb-5 w-96">
                            <h3 className='text-left font-bold ml-14'>API</h3>
                            <div className='flex items-center'><span className='font-bold text-2xl mr-2'>80%</span> <progress class="progress progress-info" value="80" max="100"></progress></div>
                        </div>
                    </div>

                    <div>
                        <div className="mb-5 w-96">
                            <h3 className='text-left font-bold ml-14'>CSS</h3>
                            <div className='flex items-center'><span className='font-bold text-2xl mr-2'>95%</span> <progress class="progress progress-info" value="95" max="100"></progress></div>
                        </div>
                        <div className="mb-5 w-96">
                            <h3 className='text-left font-bold ml-14'>TAILWIND CSS</h3>
                            <div className='flex items-center'><span className='font-bold text-2xl mr-2'>88%</span> <progress class="progress progress-info" value="88" max="100"></progress></div>
                        </div>
                        <div className="mb-5 w-96">
                            <h3 className='text-left font-bold ml-14'>REACT JS</h3>
                            <div className='flex items-center'><span className='font-bold text-2xl mr-2'>75%</span> <progress class="progress progress-info" value="75" max="100"></progress></div>
                        </div>
                        <div className="mb-5 w-96">
                            <h3 className='text-left font-bold ml-14'>EXPRESS JS</h3>
                            <div className='flex items-center'><span className='font-bold text-2xl mr-2'>75%</span> <progress class="progress progress-info" value="75" max="100"></progress></div>
                        </div>
                        <div className="mb-5 w-96">
                            <h3 className='text-left font-bold ml-14'>MONGODB</h3>
                            <div className='flex items-center'><span className='font-bold text-2xl mr-2'>75%</span> <progress class="progress progress-info" value="75" max="100"></progress></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;