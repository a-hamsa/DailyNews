import React, { useEffect, useState } from "react";
import api from "../api";
import { ChevronLeft, ChevronRight} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';



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
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        let interval;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    useEffect(() => {
        const fetchHeadline = async () => {
            try {
                const response = await api.get(`/getnews/${currentIndex}`);
                setHeadline(response.data.title);
            } catch (error) {
                console.error("Error fetching headline:", error);
            }
        };
        fetchHeadline();
    }, [currentIndex]);

    const navigate = (direction) => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex + direction;
            if (newIndex >= images.length) return 0;
            if (newIndex < 0) return images.length - 1;
            return newIndex;
        });
    };

    return (
        <div className="relative h-screen w-full overflow-hidden group">
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                >
                    <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-500"
                        style={{ backgroundImage: `url(${images[currentIndex]})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60" />
                </motion.div>
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-0 left-0 right-0 p-8 text-white"
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{headline}</h1>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className="px-4 py-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors"
                    >
                        {isAutoPlaying ? 'Pause' : 'Play'}
                    </button>
                    <div className="flex space-x-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${
                                    index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>

            <button
                onClick={() => navigate(-1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors opacity-0 group-hover:opacity-100"
            >
                <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
                onClick={() => navigate(1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors opacity-0 group-hover:opacity-100"
            >
                <ChevronRight className="w-6 h-6 text-white" />
            </button>
        </div>
    );
};

export default Carousel;