import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ cartItemCount, toggleTheme, isDarkMode, items, setFilteredItems, user }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('');

  // Handler for search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    filterItems(value, sortBy); // Call filterItems with search query and current sortBy value
  };

  // Handler for sort option change
  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortBy(value);
    filterItems(searchQuery, value); // Call filterItems with current search query and new sortBy value
  };

  // Function to filter items based on search query and sort option
  const filterItems = (query, sortBy) => {
    if (!Array.isArray(items)) {
      console.error('Items is not an array:', items);
      return; // Exit early if items is not an array
    }

    let filteredItems = [...items];

    // Filter by search query
    if (query) {
      filteredItems = filteredItems.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Sort by selected option
    if (sortBy === 'name') {
      filteredItems.sort((a, b) => a.title.localeCompare(b.title));
    }

    // Update filtered items using setFilteredItems prop
    setFilteredItems(filteredItems);
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="navbar-logo">
            <Link to="/items">Logo</Link>
          </div>
        </div>
        <div className="navbar-center">
          <div className="navbar-search">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <div className="navbar-right">
          <div className="navbar-menu">
            <ul>
              <li><Link to="/items" className="nav-link">Home</Link></li>
              <li><Link to="/cart" className="nav-link">Cart{' '}{cartItemCount > 0 && (<span className="cart-item-count">{cartItemCount}</span>)}</Link></li>
              {user && <li className="nav-link">Hello, {user.name}</li>}
            </ul>
          </div>
          <div className="navbar-theme-toggle">
            <button className={`theme-toggle-btn ${isDarkMode ? 'light' : 'dark'}`} onClick={toggleTheme}>
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
