import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About</h1>
        <p>
          Rucha Paranjape is an artist with decades of experience in old art techniques. 
          Through her careful exploration of Renaissance styles and techniques, she has gained 
          insight into the aesthetics of classical art as well as the history that lies behind it.
        </p>
        <p>
          She has successfully created a number of pieces that capture the beauty and grace of old art 
          while still incorporating elements of modernity.
        </p>
        
        <h2>Clients</h2>
        <ul className="clients-list">
          <li>Kinda Theatre</li>
          <li>Online/Offline</li>
          <li>Winter Sports Committee</li>
          <li>Animalogic Inc.</li>
          <li>Artisan Masterpiece Paintings</li>
          <li>ArtVisions Studio</li>
          <li>Natural Science Street</li>
        </ul>
        
        <h2>Media</h2>
        <ul className="media-list">
          <li><a href="#">Saatch Art</a></li>
          <li><a href="#">Artsy</a></li>
          <li><a href="#">Ugallery</a></li>
        </ul>
        
        <h2>Contact</h2>
        <p>Email: <a href="mailto:paranjaperucha9@email.com">paranjaperucha9@gmail.com</a></p>
        
        <div className="social-media">
          <h3>Follow Rucha</h3>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://behance.net" target="_blank" rel="noreferrer">Behance</a>
            <a href="https://tumblr.com" target="_blank" rel="noreferrer">Tumblr</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;