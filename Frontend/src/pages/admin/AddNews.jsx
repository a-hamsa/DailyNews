import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import api from '../../api';
import NewsForm from '../../components/NewsForm';

const AddNews = () => {
  const [news, setNews] = useState({ title: '', description: '', author: '', date: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNews({ ...news, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await api.post('/AddNews', news, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      Swal.fire(
        'Success!',
        'News has been added.',
        'success'
      );
      navigate('/dashboard/news');
    } catch (error) {
      console.error('Error adding news:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add News</h1>
      <NewsForm news={news} onChange={handleChange} onSubmit={handleSubmit} submitLabel="Add News" />
      <button onClick={() => navigate('/dashboard/news')} className="bg-gray-500 text-white px-4 py-2 rounded mt-4">
        Cancel
      </button>
    </div>
  );
};

export default AddNews;
