import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
      const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
      await api.post('/AddNews', news, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate('/dashboard/news');
    } catch (error) {
      console.error('Error adding news:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add News</h1>
      <NewsForm news={news} onChange={handleChange} onSubmit={handleSubmit} submitLabel="Add News" />
    </div>
  );
};

export default AddNews;
