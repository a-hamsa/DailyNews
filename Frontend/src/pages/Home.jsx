import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Carousel from '../components/Caraousel';
import Description from '../components/Description';
import NewsList from '../components/NewsList';
import api from '../api';
import Footer from '../components/Footer';

const Home = () => {
    const [news, setNews] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchNews = async () => {
            const response = await api.get('/GetNews');
            console.log(response.data); // Debugging line
            setNews(response.data);
        };
        fetchNews();
    }, []);

    const handleNewsClick = (title) => {
        navigate(`/news/${encodeURIComponent(title)}`);
    };

    return (
        <div>
            <Navbar />
            <Carousel />
            <Description />
            <NewsList news={news} onNewsClick={handleNewsClick} />
            <Footer />
        </div>
    );
};

export default Home;