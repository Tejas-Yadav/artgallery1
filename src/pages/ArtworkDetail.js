import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ArtworkDetail.css';

const ArtworkDetail = ({ addToCart, cart }) => {
  const [art, setArt] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    const fetchArtwork = async () => {
      try {
        const response = await fetch('http://localhost:4000/art/artwork/' + id);
        const data = await response.json();
        console.log('Image response:', data);
        setArt(data.image); // Assuming your backend sends { images: [...] }
      } catch (error) {
        console.error('Error fetching home artworks:', error);
      }
    };

    fetchArtwork();
  }, []);

  // Check if the artwork is already in the cart
  const isInCart = cart.some(item => item === art);

  const handleAddToCart = () => {
    addToCart(art);
  };

  const goToCart = () => {
    navigate('/cart');
  };

  const openPreview = (url) => {
    const win = window.open();
    win.document.write(`
      <html>
        <head>
          <title>Artwork Preview</title>
          <style>
            body {
              margin: 0;
              background: #000;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
            }
            img {
              max-width: 100%;
              max-height: 100%;
            }
          </style>
        </head>
        <body>
          <img src="${url}" alt="Preview"/>
        </body>
      </html>
    `);
    win.document.close();
  };

  return (
    <div className="artwork-detail">
      <div className="artwork-image">
        <img src={art} onClick={() => openPreview(art)} />
      </div>
      <div className="artwork-info">
        <h1>Artwork title</h1>
        <div className="artwork-price">Price</div>
        <div className="artwork-metadata">
          <p>Width x Height inches</p>
          <p>Medium</p>
        </div>
        <div className="artwork-description">
          <p>Description</p>
        </div>
        <div className="artwork-actions">
          {!isInCart ? (
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Add To Cart
            </button>
          ) : (
            <div className="in-cart-actions">
              <span className="in-cart-message">Already in cart</span>
              <button className="view-cart-btn" onClick={goToCart}>
                View Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetail;