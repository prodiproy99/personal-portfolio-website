import React from 'react';
import Banner from './Banner';
import About from './About';
import Skill from './Skill';
import MyPortfolio from './MyPortfolio';
import Contact from './Contact';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
             <Banner></Banner>
             <About></About>
             <Skill></Skill>
             <MyPortfolio></MyPortfolio>
             <Contact></Contact>
        </div>
    );
};

export default Home;