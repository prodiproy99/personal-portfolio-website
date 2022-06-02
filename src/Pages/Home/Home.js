import React from 'react';
import Banner from './Banner';
import About from './About';
import Skill from './Skill';
import MyPortfolio from './MyPortfolio';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <About></About>
             <Skill></Skill>
             <MyPortfolio></MyPortfolio>
        </div>
    );
};

export default Home;