import React from 'react';
import PropTypes from 'prop-types';

const DashboardTitle = ({ title }) => {
    return (
        <div className="p-4 flex bg-white shadow rounded-lg items-center">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">{title}</h1>
        </div>
    );
};

DashboardTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

export default DashboardTitle;