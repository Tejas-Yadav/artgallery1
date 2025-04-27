import React from 'react';
import { Link } from 'react-router-dom';
import artData from '../data/artworks';
import './Artworks.css';

const Artworks = () => {
  return (
    <div className="artworks-page">
      <h1>Paintings</h1>
      <div className="artwork-grid">
        {artData.map(artwork => (
          <div className="artwork-card" key={artwork.id}>
            <Link to={`/artwork/${artwork.id}`}>
              <img src={`/api/placeholder/${artwork.dimensions.width}/${artwork.dimensions.height}`} alt={artwork.title} />
              <h3>{artwork.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artworks;