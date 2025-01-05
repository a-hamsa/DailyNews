import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import api from '../api';

const NewsDetails = () => {
    const { id } = useParams();
    const [news, setNews] = useState(null);

    useEffect(() => {
        const fetchNewsDetails = async () => {
            const response = await api.get(`/GetNews`);
            const newsItem = response.data.find(item => item.title === decodeURIComponent(id));
            setNews(newsItem);
        };
        fetchNewsDetails();
    }, [id]);

    if (!news) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-4">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-4xl font-bold mb-4">{news.title}</h1>
                    <p className="text-lg mb-4">{news.description}</p>
                    <div className="text-gray-600 mb-2">
                        <span className="font-semibold">Date: </span>{news.date}
                    </div>
                    <div className="text-gray-600">
                        <span className="font-semibold">Author: </span>{news.author}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;
