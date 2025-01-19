import React, { useState, useEffect } from 'react';
import api from '../../api';
import DashboardTitle from '../../components/DashboardTitle';
import Sidebar from '../../components/Sidebar'; // Import Sidebar

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await api.get('/GetAllUsers', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    return (
        <div className="flex">
            <Sidebar /> 
            <div className="flex-1 p-4">
                <DashboardTitle title="User Management" />
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2">Username</th>
                            <th className="py-2">Email</th>
                            <th className="py-2">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{user.username}</td>
                                <td className="border px-4 py-2">{user.email}</td>
                                <td className="border px-4 py-2">{user.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
