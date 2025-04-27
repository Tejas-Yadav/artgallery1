import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import Admin from './pages/Admin';
import ArtworkDetail from './pages/ArtworkDetail';
import Artworks from './pages/Artworks';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const [cart, setCart] = useState([]);
  
  const addToCart = (artwork) => {
    // Check if artwork is already in cart
    if (!cart.some(item => item.id === artwork.id)) {
      setCart([...cart, { ...artwork, quantity: 1 }]);
    }
  };

  const removeFromCart = (artworkId) => {
    setCart(cart.filter(item => item.id !== artworkId));
  };

  const updateQuantity = (artworkId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCart(cart.map(item => 
      item.id === artworkId ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Conditionally render the sidebar based on route
  const renderWithSidebar = (element) => (
    <div className="app">
      <Sidebar cartItemCount={cart.length} />
      <div className="content">
        {element}
      </div>
    </div>
  );

  // For admin and login pages, render without sidebar
  const renderFullWidth = (element) => (
    <div className="app-full-width">
      {element}
    </div>
  );

  return (
    <Router>
      <Routes>
        {/* Routes with sidebar */}
        <Route path="/" element={renderWithSidebar(<Home />)} />
        <Route path="/about" element={renderWithSidebar(<About />)} />
        <Route path="/artworks" element={renderWithSidebar(<Artworks />)} />
        <Route path="/artwork/:id" element={
          renderWithSidebar(<ArtworkDetail addToCart={addToCart} cart={cart} />)
        } />
        <Route path="/cart" element={
          renderWithSidebar(
            <Cart 
              cart={cart} 
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          )
        } />
        
        {/* Admin routes - no sidebar */}
        <Route path="/login" element={renderFullWidth(<Login />)} />
        <Route path="/admin" element={renderFullWidth(<Admin />)} />
      </Routes>
    </Router>
  );
}

export default App;