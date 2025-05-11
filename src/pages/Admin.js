import { LogOut, Upload } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
  const [artworks, setArtworks] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {

    fetchArtworks();
  }, []);

  const fetchArtworks = async () => {
    try {
      const res = await fetch('http://localhost:4000/art/artworks');
      const data = await res.json();
      setArtworks(data.images);
    } catch (err) {
      console.error('Failed to fetch artworks:', err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isArtistAuthenticated');
    setIsAuthenticated(false);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch('http://localhost:4000/api/uploadArtwork', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        const newArtwork = await res.json();
        fetchArtworks();
      } else {
        console.error('Upload failed');
      }
    } catch (err) {
      console.error('Upload error:', err);
    }
  };



  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Artist Dashboard</h1>
        <button className="logout-button" onClick={handleLogout}>
          <LogOut size={18} />
          Logout
        </button>
      </div>

      <div className="admin-content">
        <div className="upload-section">
          <label htmlFor="file-upload" className="upload-button">
            <Upload size={18} />
            Upload New Artwork
          </label>
          <input
            type="file"
            id="file-upload"
            style={{ display: 'none' }}
            onChange={handleFileUpload}
          />
        </div>

        <h2>Uploaded Artworks</h2>
        <div className="uploaded-grid">
          
          {artworks.map((art, idx) => (
            <div className="uploaded-card" key={idx}>
              <img height={`200px`} width={`200px`} src={art.url} alt={`Artwork ${idx}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
