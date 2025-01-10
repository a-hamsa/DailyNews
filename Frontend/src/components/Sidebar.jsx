import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    return (
        <div className="w-40 md:w-48 h-screen bg-gray-800 text-white">
            <div className="p-4 text-center text-xl font-bold">
                <Link to="/" className="block">DailyNews</Link>
            </div>
            <ul className="py-4">
                <li className={`mb-4 ${location.pathname === '/dashboard' ? 'bg-gray-700' : ''}`}>
                    <Link to="/dashboard" className="block pl-4 md:pl-6 p-2 rounded hover:bg-gray-700">Home</Link>
                </li>
                <li className={` ${location.pathname.startsWith('/dashboard/news') ? 'bg-gray-700' : ''}`}>
                    <Link to="/dashboard/news" className="block pl-4 md:pl-6 p-2 rounded hover:bg-gray-700">News</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;