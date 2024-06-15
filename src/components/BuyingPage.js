import React from 'react';
import './BuyingPage.css';
import { useParams, useNavigate } from 'react-router-dom';

const BuyingPage = ({ cartItems, isDarkMode }) => {
  const { id } = useParams(); // Get the item ID from URL params
  const navigate = useNavigate(); // Hook for navigation

  // Find the selected item based on ID
  const selectedItem = cartItems.find(item => item._id === id);

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  // Calculate GST based on product price
  const calculateGST = (price) => {
    const gstRate = 18; // GST rate in India (example)
    const gstAmount = (price * gstRate) / 100;
    return gstAmount.toFixed(2); // Return GST amount rounded to 2 decimal places
  };

  // Handle proceed to checkout button click
  const handleProceedToCheckout = () => {
    navigate('/thank-you');
  };

  // Render the BuyingPage with detailed product information
  return (
    <div className={`buying-page ${isDarkMode ? 'dark-mode' : ''}`}>
      <h1>Product Details</h1>
      <div className="product-details">
        <img src={`http://localhost:5000/images/${selectedItem.imageUrl}`} alt={selectedItem.title} className="product-image" />
        <div className="product-info">
          <h2 className="product-name">{selectedItem.title}</h2>
          <p className="product-description">{selectedItem.description}</p>
          <p className="product-price">&#x20B9; {selectedItem.price}</p>
          <p className="product-rating">&#9734; {selectedItem.averageRating}</p>
          <p className="product-gst">GST Amount: &#x20B9; {calculateGST(selectedItem.price)}</p>
          <button className="proceed-to-checkout-btn" onClick={handleProceedToCheckout}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default BuyingPage;
