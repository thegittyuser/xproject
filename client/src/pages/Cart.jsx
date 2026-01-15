import { useEffect } from "react";
import "../assets/css/cart.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cart")
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data.cartItems);
      })
      .catch((err) => console.error("Error Fetching Products.", err));
  }, []);

  return (
    <div className="container">
      {/* Cart Items */}
      <div className="cart-items">
        <h2>Your Cart</h2>
        {cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={item.image} alt={item.title} />

            <div className="item-details">
              <div className="item-name">{item.title}</div>
              <div className="price">Rs {item.price}</div>

              <div className="quantity">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>

            <div className="subtotal">Rs {item.price}</div>
            <div className="remove">×</div>
          </div>
        ))}
      </div>
      {/* Order Summary */}
      <div className="summary">
        <h3>Order Summary</h3>

        <div className="row">
          <span>Subtotal</span>
          <span>$30.00</span>
        </div>

        <div className="row">
          <span>Shipping</span>
          <span>$5.00</span>
        </div>

        <div className="row">
          <span>Tax</span>
          <span>$2.50</span>
        </div>

        <hr />

        <div className="row total">
          <span>Total</span>
          <span>$37.50</span>
        </div>

        <Link to="/checkout">
          <button className="checkout-btn">Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
