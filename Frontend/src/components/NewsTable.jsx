import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import api from '../api'; 

const NewsTable = ({ news, setNews }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const token = localStorage.getItem('token'); // Get the token from localStorage
          await api.delete(`/DeleteNews/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setNews(news.filter(newsItem => newsItem.id !== id)); // Update the state directly
          Swal.fire(
            'Deleted!',
            'Your news has been deleted.',
            'success'
          );
        } catch (error) {
          Swal.fire(
            'Error!',
            'There was an error deleting the news.',
            'error'
          );
        }
      }
    });
  };

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2">Title</th>
          <th className="py-2">Description</th>
          <th className="py-2">Author</th>
          <th className="py-2">Date</th>
          <th className="py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {news.map((newsItem) => (
          <tr key={newsItem.id}>
            <td className="border px-4 py-2">{newsItem.title}</td>
            <td className="border px-4 py-2">{newsItem.description}</td>
            <td className="border px-4 py-2">{newsItem.author}</td>
            <td className="border px-4 py-2">{newsItem.date}</td>
            <td className="border px-4 py-2">
              <Link to={`/dashboard/news/edit/${newsItem.id}`} className="bg-yellow-500 text-white px-4 py-2 rounded mr-2">
                Edit
              </Link>
              <button onClick={() => handleDelete(newsItem.id)} className="bg-red-500 text-white px-4 py-2 rounded">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NewsTable;
