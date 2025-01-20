import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import api from '../api';
import Swal from 'sweetalert2';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = async () => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You will be logged out!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, logout!'
        });

        if (result.isConfirmed) {
            try {
                await api.post('/Logout', {}, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                localStorage.removeItem('token');
                Swal.fire(
                    'Logged out!',
                    'You have been logged out.',
                    'success'
                );
                navigate('/login');
            } catch (error) {
                console.error('Logout failed', error);
                Swal.fire(
                    'Error!',
                    'Logout failed. Please try again.',
                    'error'
                );
            }
        }
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button
                className="md:hidden p-4 fixed top-0 left-0 z-50"
                onClick={toggleSidebar}
            >
                {isOpen ? '✕' : '☰'}
            </button>
            <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 w-40 md:w-48 h-screen bg-gray-800 text-white flex flex-col justify-between`}>
                <div>
                    <div className="p-4 text-center text-xl font-bold">
                        <Link to="/" className="block">DailyNews</Link>
                    </div>
                    <ul className="py-4">
                        <li className={`mb-4 ${location.pathname === '/dashboard' ? 'bg-gray-700' : ''}`}>
                            <Link to="/dashboard" className="block pl-4 md:pl-6 p-2 rounded hover:bg-gray-700">Home</Link>
                        </li>
                        <li className={`mb-4 ${location.pathname.startsWith('/dashboard/news') ? 'bg-gray-700' : ''}`}>
                            <Link to="/dashboard/news" className="block pl-4 md:pl-6 p-2 rounded hover:bg-gray-700">News</Link>
                        </li>
                        <li className={` ${location.pathname.startsWith('/admin/users') ? 'bg-gray-700' : ''}`}>
                            <Link to="/dashboard/users" className="block pl-4 md:pl-6 p-2 rounded hover:bg-gray-700">User Management</Link>
                        </li>
                    </ul>
                </div>
                <div className="p-4">
                    <button
                        onClick={handleLogout}
                        className="w-full p-2 rounded bg-gray-600 hover:bg-gray-700"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </>
    );
};

export default Sidebar;