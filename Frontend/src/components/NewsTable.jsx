import React from 'react';

const NewsTable = ({ news, onEdit, onDelete }) => {
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
              <button onClick={() => onEdit(newsItem)} className="bg-yellow-500 text-white px-4 py-2 rounded mr-2">
                Edit
              </button>
              <button onClick={() => onDelete(newsItem.id)} className="bg-red-500 text-white px-4 py-2 rounded">
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
