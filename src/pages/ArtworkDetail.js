import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import artData from '../data/artworks';
import './ArtworkDetail.css';

const ArtworkDetail = ({ addToCart, cart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const artwork = artData.find(art => art.id === parseInt(id, 10));
  
  if (!artwork) {
    return <div className="artwork-not-found">Artwork not found</div>;
  }
  
  // Check if the artwork is already in the cart
  const isInCart = cart.some(item => item.id === artwork.id);
  
  const handleAddToCart = () => {
    addToCart(artwork);
  };
  
  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <div className="artwork-detail">
      <div className="artwork-image">
        <img src={`/api/placeholder/${artwork.dimensions.width}/${artwork.dimensions.height}`} alt={artwork.title} />
      </div>
      <div className="artwork-info">
        <h1>{artwork.title}</h1>
        <div className="artwork-price">${artwork.price.toLocaleString()}</div>
        <div className="artwork-metadata">
          <p>{artwork.dimensions.width} x {artwork.dimensions.height} inches</p>
          <p>{artwork.medium}</p>
        </div>
        <div className="artwork-description">
          <p>{artwork.description}</p>
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