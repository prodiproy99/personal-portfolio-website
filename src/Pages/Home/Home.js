import React from 'react';
import Banner from './Banner';
import About from './About';
import MyPortfolio from './MyPortfolio';
import Contact from './Contact';
import Line from './Line';
import WhatIdo from './WhatIdo';
// import PortfolioTab from './PortfolioTab';

const Home = () => {
    return (
        <div className='md:w-[1080px] w-[95%] mx-auto'>
            <Banner></Banner>
            <Line></Line>
            <About></About>
            <Line></Line>
            <WhatIdo></WhatIdo>
            {/* <Line></Line> */}
            {/* <PortfolioTab></PortfolioTab> */}
            <Line></Line>
            <MyPortfolio></MyPortfolio>
            {/* <Line></Line> */}
            <Contact></Contact>
        </div>
    );
};

export default Home;