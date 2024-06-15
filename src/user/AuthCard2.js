import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AuthCard2.css';

const AuthCard2 = ({ setUser }) => {
  const [isRegister, setIsRegister] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

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

      if (response.status === 200 || response.status === 201) {
        setUser(response.data.user); // Set the user information
        navigate('/items'); // Navigate to ItemCard component on successful login
      } else {
        alert('Authentication failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container2">
      <div className="card2">
        <h2>{isRegister ? 'Register' : 'Sign In'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete={isRegister ? "new-password" : "current-password"}
          />
          <button type="submit">{isRegister ? 'Register' : 'Sign In'}</button>
        </form>
        <button onClick={toggleForm} className="toggle-btn2">
          {isRegister ? 'Already have an account? Sign In' : 'Don\'t have an account? Register'}
        </button>
      </div>
    </div>
  );
};

export default AuthCard2;
