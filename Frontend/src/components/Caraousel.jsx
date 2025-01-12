import React, { useEffect, useState } from "react";
import api from "../api";

const images = [
    "src/assets/slider/image.jpeg",
    "src/assets/slider/image2.jpeg",
    "src/assets/slider/image3.jpeg",
    "src/assets/slider/image4.jpeg",
    "src/assets/slider/image5.jpeg",
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [headline, setHeadline] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const fetchHeadline = async () => {
            try {
                const response = await api.get(`/getnews/${currentIndex}`);
                const data = response.data;
                setHeadline(data.title);
            } catch (error) {
                console.error("Error fetching the news headline:", error);
            }
        };

        fetchHeadline();
    }, [currentIndex]);

    return (
        <div className="relative w-full h-[calc(100vh-64px)] overflow-hidden">
            <div className="absolute inset-0 flex transition-transform duration-1000" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="w-full h-full flex-shrink-0"
                        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    />
                ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6 bg-black bg-opacity-70 text-white text-center">
                <h1 className="text-2xl md:text-4xl font-bold drop-shadow-lg">{headline}</h1>
            </div>
        </div>
    );
};

export default Carousel;