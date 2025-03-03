import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api';
import NewsTable from '../../components/NewsTable';
import DashboardTitle from '../../components/DashboardTitle';

const News = () => {
  const [news, setNews] = useState([]);
  const [editingNews, setEditingNews] = useState(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await api.get('/GetNews');
      setNews(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const updateNews = async (id) => {
    try {
      await api.put(`/UpdateNews/${id}`, editingNews);
      fetchNews();
      setEditingNews(null);
    } catch (error) {
      console.error('Error updating news:', error);
    }
  };

  const deleteNews = async (id) => {
    try {
      await api.delete(`/DeleteNews/${id}`);
      fetchNews(); // Fetch the news again after deletion
    } catch (error) {
      console.error('Error deleting news:', error);
    }
  };

  const handleEdit = (newsItem) => {
    setEditingNews(newsItem);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingNews({ ...editingNews, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/UpdateNews/${editingNews.id}`, editingNews);
      fetchNews();
      setEditingNews(null);
    } catch (error) {
      console.error('Error updating news:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <DashboardTitle title="News Management" />
      <Link to="/dashboard/news/add" className="bg-blue-500 text-white px-4 py-2 rounded my-4 inline-block">Add News</Link>
      <NewsTable news={news} setNews={setNews} onEdit={handleEdit} onDelete={deleteNews} />
    </div>
  );
};

export default News;