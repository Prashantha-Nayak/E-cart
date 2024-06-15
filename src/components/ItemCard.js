import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ItemCard.css';
import NavBar from './NavBar';
import Add from './Add';

const imgUrl = "http://localhost:5000/images/";

const ItemCard = ({ addToCart, isDarkMode, toggleTheme }) => {
  const [items, setItems] = useState([]);
  const [visibleDescriptions, setVisibleDescriptions] = useState({});

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products/list');
        setItems(response.data.data);
      } catch (error) {
        console.error('Error fetching the items data', error);
      }
    };

    fetchItems();
  }, []);

  const toggleDescription = (id) => {
    setVisibleDescriptions((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  if (items.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Add/>
    <div>
      <NavBar cartItemCount={items.length} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <div className={`items-grid ${isDarkMode ? 'dark-mode' : ''}`}>
        {items.map((item) => (
          <div key={item._id} className="card-wrap">
            <div className="item-image-wrapper">
              <img
                src={`${imgUrl}${item.imageUrl}`}
                alt={item.title}
                className="item-image"
              />
              <button className="info-btn" onClick={() => toggleDescription(item._id)}>
                i
              </button>
            </div>
            <div className="item-details">
              <h2 className="item-name">{item.title}</h2>
              <p className="item-price">&#x20B9; {item.price}</p>
              <p className="item-rating">&#9734; {item.averageRating}</p>
              <button className="addcart-btn" onClick={() => addToCart(item)}>Add to Cart</button>
              <p className={`item-description ${visibleDescriptions[item._id] ? 'show' : ''}`}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ItemCard;
