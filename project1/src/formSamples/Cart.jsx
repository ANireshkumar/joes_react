import { useState } from 'react';
import './Cart.css'; // Import the CSS file

const Cart = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="cart-container">
      <img
        src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
        alt="Shopping Cart"
        className="cart-image"
      />
      <h1>Number of items in the cart: {cartCount}</h1>
      <button onClick={() => setCartCount(cartCount + 1)}>Add to cart</button>
    </div>
  );
};

export default Cart;
