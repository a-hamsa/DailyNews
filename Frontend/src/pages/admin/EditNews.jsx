import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import api from '../../api';
import NewsForm from '../../components/NewsForm';

const EditNews = () => {
  const [news, setNews] = useState({ title: '', description: '', author: '', date: '' });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await api.get(`/GetNews/${id}`);
        setNews(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    fetchNews();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNews({ ...news, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/UpdateNews/${id}`, news);
      Swal.fire(
        'Success!',
        'News has been updated.',
        'success'
      );
      navigate('/dashboard/news');
    } catch (error) {
      console.error('Error updating news:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit News</h1>
      <NewsForm news={news} onChange={handleChange} onSubmit={handleSubmit} submitLabel="Update News" />
      <button onClick={() => navigate('/dashboard/news')} className="bg-gray-500 text-white px-4 py-2 rounded mt-4">
        Cancel
      </button>
    </div>
  );
};

export default EditNews;
