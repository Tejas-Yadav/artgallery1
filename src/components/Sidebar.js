import { ShoppingCart } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ cartItemCount }) => {
  return (
    <div className="sidebar">
      <div className="logo">
        <Link to="/">OnlyOnRucha</Link>
        <div className="tagline">A simplistic portfolio of a self taught artist Johnathan Gates.</div>
      </div>
      
      <div className="links">
        <div className="nav-links">
          <Link to="/artworks">Artworks</Link>
          <Link to="/about">About</Link>
          <Link to="/admin">Admin</Link>
        </div>
        
        <div className="social-links">
          <a href="mailto:contact@example.com">Email</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://tumblr.com" target="_blank" rel="noreferrer">Tumblr</a>
        </div>
      </div>
      
      <div className="cart-icon">
        <Link to="/cart">
          <ShoppingCart size={20} />
          {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
