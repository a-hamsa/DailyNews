import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
    <div className="w-40 md:w-48 h-screen bg-gray-800 text-white">
        <div className="p-4 text-center text-xl font-bold">
            DailyNews
        </div>
        <ul className="p-4">
            <li className="mb-4 ml-2 md:ml-4">
                <Link to="/dashboard" className="hover:text-gray-400">Home</Link>
            </li>
            <li className="ml-2 md:ml-4">
                <Link to="/dashboard/news" className="hover:text-gray-400">News</Link>
            </li>
        </ul>
    </div>
);

export default Sidebar;
