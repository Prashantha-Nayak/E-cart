import React, { useState } from 'react';
import axios from 'axios';
import './AuthCard1.css';

const AuthCard1 = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const toggleForm = () => {
    setIsRegister(!isRegister);
    setFormData({
      email: '',
      password: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isRegister ? 'http://localhost:5000/auth/register' : 'http://localhost:5000/auth/login';
    try {
      const response = await axios.post(url, formData);
      console.log(response.data);
      alert(response.data.message);
      
      // Handle successful response (e.g., save token, redirect user)
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container1">
      <div className="card1">
        <h2>{isRegister ? 'Register' : 'Sign In'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">{isRegister ? 'Register' : 'Sign In'}</button>
        </form>
        <button onClick={toggleForm} className="toggle-btn1">
          {isRegister ? 'Already have an account? Sign In' : 'Don\'t have an account? Register'}
        </button>
      </div>
    </div>
  );
};

export default AuthCard1;
