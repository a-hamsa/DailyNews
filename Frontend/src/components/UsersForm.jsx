import React from 'react';
import PropTypes from 'prop-types';

const UsersForm = ({ users, onChange, onSubmit, submitLabel }) => {
  return (
    <form onSubmit={onSubmit} className="mb-4">
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={users.username}
        onChange={onChange}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={users.email}
        onChange={onChange}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={users.password}
        onChange={onChange}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        name="role"
        placeholder="Role"
        value={users.role}
        onChange={onChange}
        className="border p-2 mb-2 w-full"
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        {submitLabel}
      </button>
    </form>
  );
};

UsersForm.propTypes = {
  users: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    role: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitLabel: PropTypes.string.isRequired,
};

export default UsersForm;
