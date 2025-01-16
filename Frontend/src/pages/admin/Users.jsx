import React, { useState, useEffect } from 'react';
import api from '../../api';
import DashboardTitle from '../../components/DashboardTitle';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await api.get('/GetAllUsers');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
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
    );
};

export default Users;
