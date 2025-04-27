import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // In a real application, these credentials would be verified against a backend
  // For this demo, we'll use a hardcoded username and password
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }
    
    // Check credentials - in a real app, this would be a server call
    if (username === 'artist' && password === 'password123') {
      // Store authentication in localStorage or SessionStorage
      localStorage.setItem('isArtistAuthenticated', 'true');
      setIsAuthenticated(true);
    } else {
      setError('Invalid username or password');
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/admin" />;
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Artist Login</h1>
        <p className="login-subtitle">Access your dashboard to manage artworks</p>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          
          <button type="submit" className="login-button">Login</button>
        </form>
        
        <div className="login-help">
          <p>Forgot your password? Contact the site administrator.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;