import React from 'react';
import Banner from './Banner';
import About from './About'; 
import MyPortfolio from './MyPortfolio';
import Contact from './Contact';
import Line from './Line';
import WhatIdo from './WhatIdo';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Line></Line>
            <About></About>
            <Line></Line>
            <WhatIdo></WhatIdo>
            <MyPortfolio></MyPortfolio>
            <Contact></Contact>
        </div>
    );
};

export default Home;