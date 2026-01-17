import { useEffect } from "react";
import "../assets/css/cart.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const cartProducts = () => {
    fetch("http://localhost:5000/cart")
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data.cartItems);
      })
      .catch((err) => console.error("Error Fetching Products.", err));
  };

  useEffect(cartProducts, []);

  const updateQty = () => {
    fetch(`http://localhost:5000/cart/${id}`, {
      method: "PUT",
    });
    cartProducts();
  };

  const removeProduct = () => {
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    });
  };

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
              <br />
              {/* <div className="price">Rs {item.price * item.quantity}</div> */}

              <div className="quantity">
                <button onClick={() => updateQty()}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQty()}>+</button>
              </div>
            </div>

            <div className="subtotal">Rs {item.price * item.quantity}</div>
            <div className="remove" onClick={() => removeProduct()}>
              ×
            </div>
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
