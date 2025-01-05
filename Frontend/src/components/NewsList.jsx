import React from 'react';

const NewsList = ({ news, onNewsClick }) => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">News List</h2>
            <ul className="space-y-2">
                {news.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => onNewsClick(item.title)}
                        className="p-4 bg-white rounded shadow hover:bg-gray-100 cursor-pointer"
                    >
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsList;
