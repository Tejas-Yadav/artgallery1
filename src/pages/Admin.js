import { LogOut, Trash2, Upload } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import artData from '../data/artworks';
import './Admin.css';

const Admin = () => {
  const [artworks, setArtworks] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    const authStatus = localStorage.getItem('isArtistAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      // Load artworks from the data source
      setArtworks(artData);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isArtistAuthenticated');
    setIsAuthenticated(false);
  };

  const handleDelete = (id) => {
    // In a real app, this would make an API call to delete from the database
    setArtworks(artworks.filter(artwork => artwork.id !== id));
  };

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

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
        <div className="admin-panel">
          <h2>Manage Artworks</h2>
          
          <div className="upload-section">
            <button className="upload-button">
              <Upload size={18} />
              Upload New Artwork
            </button>
            <p className="help-text">Upload new paintings to your gallery</p>
          </div>

          <div className="artworks-table">
            <h3>Your Artworks</h3>
            <table>
              <thead>
                <tr>
                  <th>Thumbnail</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {artworks.map(artwork => (
                  <tr key={artwork.id}>
                    <td className="artwork-thumbnail">
                      <img 
                        src={`/api/placeholder/${artwork.dimensions.width}/${artwork.dimensions.height}`} 
                        alt={artwork.title} 
                      />
                    </td>
                    <td>{artwork.title}</td>
                    <td>${artwork.price.toLocaleString()}</td>
                    <td>
                      <button 
                        className="delete-button"
                        onClick={() => handleDelete(artwork.id)}
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;