import React from 'react';
import PropTypes from 'prop-types';

const NewsForm = ({ news, onChange, onSubmit, submitLabel }) => {
  return (
    <form onSubmit={onSubmit} className="mb-4">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={news.title}
        onChange={onChange}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={news.description}
        onChange={onChange}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={news.author}
        onChange={onChange}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="date"
        name="date"
        value={news.date}
        onChange={onChange}
        className="border p-2 mb-2 w-full"
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        {submitLabel}
      </button>
    </form>
  );
};

NewsForm.propTypes = {
  news: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitLabel: PropTypes.string.isRequired,
};

export default NewsForm;
