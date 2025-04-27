import React from 'react';
import { Link } from 'react-router-dom';
import artData from '../data/artworks';
import './Home.css';

const Home = () => {
  // Display a few featured artworks
  const featuredArt = artData.slice(0, 4);

  return (
    <div className="home-page">
      <div className="hero">
        <h1>Johnathan Gates</h1>
        <p>Explore a world where classical art meets modern expression</p>
        <Link to="/artworks" className="cta-button">View Gallery</Link>
      </div>
      
      <div className="featured-works">
        <h2>Featured Works</h2>
        <div className="artwork-grid">
          {featuredArt.map(artwork => (
            <div className="artwork-card" key={artwork.id}>
              <Link to={`/artwork/${artwork.id}`}>
                <img src={`/api/placeholder/${artwork.dimensions.width}/${artwork.dimensions.height}`} alt={artwork.title} />
                <h3>{artwork.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
