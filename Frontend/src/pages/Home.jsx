import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Carousel from '../components/Caraousel';
import Description from '../components/Description';
import NewsList from '../components/NewsList';
import api from '../api';
import { motion} from 'framer-motion';
import Footer from '../components/Footer';

const Home = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchNews = async () => {
            setIsLoading(true);
            try {
                const response = await api.get('/GetNews');
                setNews(response.data);
            } catch (error) {
                console.error('Error fetching news:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchNews();
    }, []);

    const handleNewsClick = (title) => {
        navigate(`/news/${encodeURIComponent(title)}`);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="space-y-8">
                <Carousel />
                <Description />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {isLoading ? (
                        <div className="flex justify-center p-8">
                            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
                        </div>
                    ) : (
                        <NewsList news={news} onNewsClick={handleNewsClick} />
                    )}
                </motion.div>
            </main>
            <Footer />
        </div>
    );
};
export default Home;