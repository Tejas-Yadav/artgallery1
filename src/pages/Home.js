import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [homeArtworks, setHomeArtworks] = useState([]);

  useEffect(() => {
    const fetchHomeArtworks = async () => {
      try {
        const response = await fetch('http://localhost:4000/art/homeArtworks');
        const data = await response.json();
        console.log('Image response:', data);
        setHomeArtworks(data.images); // Assuming your backend sends { images: [...] }
      } catch (error) {
        console.error('Error fetching home artworks:', error);
      }
    };

    fetchHomeArtworks();
  }, []);



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
          {homeArtworks.map((artwork, index) => (
            <div className="artwork-card" key={artwork.id || index}>
              <Link to={`/artworks/${artwork.id || index}`}>
                <img src={artwork.url} alt={artwork.title} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
