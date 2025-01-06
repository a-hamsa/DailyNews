import React, { useEffect } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-4">
                <Routes>
                    <Route path="/" element={<div>
                        <h1 className="text-2xl font-bold">Dashboard</h1>
                        <p>Welcome to your dashboard!</p>
                    </div>} />
                </Routes>
            </div>
        </div>
    );
};

export default Dashboard;