import React, { useState, useEffect } from 'react';
import './Add.css';

const images = [
  'https://www.ceiworldexpo.com/img/india-market-info/electronics.jpeg',
  'https://img.freepik.com/premium-photo/tshirt-hanging-shirt-shop-generative-ai_971989-3350.jpg',
  'https://www.exquisitetimepieces.com/blog/wp-content/uploads/2023/03/15-best-dress-watches-under-5k.jpg',
  'https://images.samsung.com/pk/smartphones/galaxy-s22-ultra/buy/S22_Ultra_Carousel_GroupKV_PC.jpg',
  
];

const Add = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction) => {
    if (direction === 1) {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    } else {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }
  };

  return (
    <div className="add">
      
      <div className="wrapper">
        <a className="prev" onClick={() => scroll(-1)}>&#10094;</a>
        <div className="image-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className={index === currentIndex ? 'active' : ''}
              style={{ display: index === currentIndex ? 'block' : 'none' }}
            />
          ))}
        </div>
        <a className="next" onClick={() => scroll(1)}>&#10095;</a>
      </div>
    </div>
  );
};

export default Add;
