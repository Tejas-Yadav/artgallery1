import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Artworks.css';

const Artworks = () => {

  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await fetch('http://localhost:4000/art/artworks');
        const data = await response.json();
        console.log('Image response:', data);
        setArtworks(data.images); // Assuming your backend sends { images: [...] }
      } catch (error) {
        console.error('Error fetching home artworks:', error);
      }
    };

    fetchArtworks();
  }, []);

  return (
    <div className="artworks-page">
      <h1 className='title'>Paintings</h1>
      <div className="artwork-grid">
        {artworks.map((artwork, index) => (
          <div className="artwork-card" key={artwork.filename || index}>
            <Link to={`/artworks/${artwork.filename || index}`}>
              <img src={artwork.url} alt={artwork.title} />
            </Link>
          </div>
        ))}
      </div>
    </div >
  );
};

export default Artworks;