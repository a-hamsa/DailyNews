import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Caraousel';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Carousel />
            <h1>Welcome to Daily News</h1>
            <p>Your source for the latest news.</p>
        </div>
    );
};

export default Home;