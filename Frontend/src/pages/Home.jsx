import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Caraousel';
import Description from '../components/Description';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Carousel />
            <Description/>
        </div>
    );
};

export default Home;