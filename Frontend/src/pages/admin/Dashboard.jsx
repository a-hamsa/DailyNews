import React, { useEffect } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import News from './News';
import AddNews from './AddNews';
import EditNews from './EditNews';
import AdminIndex from './Index';

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
                    <Route path="/" element={<AdminIndex /> } />
                    <Route path="/news" element={<News />} />
                    <Route path="/news/add" element={<AddNews />} />
                    <Route path="/news/edit/:id" element={<EditNews />} />
                </Routes>
            </div>
        </div>
    );
};

export default Dashboard;