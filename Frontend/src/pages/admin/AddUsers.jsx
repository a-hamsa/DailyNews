import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import api from '../../api';
import UsersForm from '../../components/UsersForm';

const AddUsers = () => {
  const [users, setUsers] = useState({ username: '', email: '', password: '', role: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers({ ...users, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await api.post('/AddUsers', users, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      Swal.fire(
        'Success!',
        'News has been added.',
        'success'
      );
      navigate('/dashboard/users');
    } catch (error) {
      console.error('Error adding news:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Users</h1>
      <UsersForm users={users} onChange={handleChange} onSubmit={handleSubmit} submitLabel="Add User"/>
      <button onClick={() => navigate('/dashboard/users')} className="bg-gray-500 text-white px-4 py-2 rounded mt-4">
        Cancel
      </button>
    </div>
  );
};

export default AddUsers;