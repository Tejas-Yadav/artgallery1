import { Minus, Plus, X } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h1>Shopping Cart</h1>
        <p>Your cart is empty</p>
        <Link to="/artworks" className="continue-shopping">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      
      <div className="cart-items">
        {cart.map(item => (
          <div className="cart-item" key={item.id}>
            <div className="item-image">
              <img src={`/api/placeholder/${item.dimensions.width}/${item.dimensions.height}`} alt={item.title} />
            </div>
            <div className="item-details">
              <h3>{item.title}</h3>
              <p className="item-price">${item.price.toLocaleString()}</p>
            </div>
            <div className="item-quantity">
              <button 
                className="quantity-btn" 
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                <Minus size={16} />
              </button>
              <span className="quantity">{item.quantity}</span>
              <button 
                className="quantity-btn" 
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                <Plus size={16} />
              </button>
            </div>
            <div className="item-total">
              ${(item.price * item.quantity).toLocaleString()}
            </div>
            <button className="remove-item" onClick={() => removeFromCart(item.id)}>
              <X size={20} />
            </button>
          </div>
        ))}
      </div>
      
      <div className="cart-summary">
        <div className="subtotal">
          <span>Subtotal</span>
          <span>${subtotal.toLocaleString()}</span>
        </div>
        <button className="checkout-btn">Checkout</button>
        <Link to="/artworks" className="continue-shopping">Continue Shopping</Link>
      </div>
    </div>
  );
};

export default Cart;