import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PortfolioTab = () => {
    const portfolio = [
        {
            name: 'https://i.ibb.co/tPVVbp3/slider.png',
            category: ['all', 'frontend'],

        },
        {
            name: 'https://i.ibb.co/dB26gwT/slider3.png',
            category: ['all', 'mobile', 'ux-ui'],
        },
        {
            name: 'https://i.ibb.co/KxfvLT0/slider2.png',
            category: ['all', 'frontend'],
        },
        {
            name: 'https://i.ibb.co/KxfvLT0/slider2.png',
            category: ['others'],
        },
        {
            name: 'https://i.ibb.co/KxfvLT0/slider2.png',
            category: ['all', 'frontend', 'ux - ui'],
        },
        {
            name: 'https://i.ibb.co/tPVVbp3/slider.png',
            category: ['all', 'others'],
        },
    ];

    const [filter, setFilter] = useState('all');
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        setProjects(portfolio);
    }, []);
    useEffect(() => {
        setProjects([]);
        const filtered = portfolio.map(p => ({ ...p, filtered: p.category.includes(filter) }));
        setProjects(filtered);
    }, [filter]);


    return (
        <div className='my-24'>
            <h2 className='text-3xl text-center font-bold uppercase mb-10'>My <span style={{ color: "#ff014f" }}>Portfolio</span></h2>
            <div className="text-center block mb-10">
                <Link to='' className='mr-10 bg-base-100 shadow-md shadow-cyan-500/50 inline-block mt-5 px-8 py-3 text-2xl rounded-md hover:bg-yellow-600 hover:text-white hover:-translate-y-0.5 ease-in-out duration-300' active={filter === 'all'} onClick={() => setFilter('all')}>All</Link>

                <Link to='' className='mr-10 bg-base-100 shadow-md shadow-cyan-500/50 inline-block mt-5 px-8 py-3 text-2xl rounded-md hover:bg-yellow-600 hover:text-white hover:-translate-y-0.5 ease-in-out duration-300' active={filter === 'frontend'} onClick={() => setFilter('frontend')}>Frontend</Link>

                {/* <Link to='' className='mr-10 bg-base-100 shadow-md shadow-cyan-500/50 inline-block mt-5 px-8 py-3 text-2xl rounded-md hover:bg-yellow-600 hover:text-white hover:-translate-y-0.5 ease-in-out duration-300' active={filter === 'mobile'} onClick={() => setFilter('mobile')}>Mobile</Link> */}

                {/* <Link to='' className='mr-10 bg-base-100 shadow-md shadow-cyan-500/50 inline-block mt-5 px-8 py-3 text-2xl rounded-md hover:bg-yellow-600 hover:text-white hover:-translate-y-0.5 ease-in-out duration-300' active={filter === 'ux-ui'} onClick={() => setFilter('ux-ui')}>UX/UI</Link> */}

                <Link to='' className=' bg-base-100 shadow-md shadow-cyan-500/50 inline-block mt-5 px-8 py-3 text-2xl rounded-md hover:bg-yellow-600 hover:text-white hover:-translate-y-0.5 ease-in-out duration-300' active={filter === 'others'} onClick={() => setFilter('others')}>Others</Link>
            </div>
            <div className="text-center grid grid-cols-2 lg:grid-cols-3 gap-5">
                {projects.map(item => item.filtered === true ? (


                    <div key={item.name} class="w-70 image-full hover:bg-blue-400 hover:shadow-xl">
                        <div className='truncate'>
                            <img className='hover:scale-125 ease-in-out duration-300' src={item.name} alt="" />

                        </div>
                        {/* <div class="card-body items-center flex justify-center">
                            <a target='_blank' href='https://prodiproy99.github.io/influencer-gear-responsive-website/'>Visit Website</a>

                        </div> */}
                    </div>

                ) : '')}
            </div>
        </div>
    );
};

export default PortfolioTab;