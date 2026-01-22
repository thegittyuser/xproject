import { useState } from "react";
import "../assets/css/checkout.css";

function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = 100;
  const total = subtotal + shipping;

  return (
    <div className="checkout-container checkout-grid">
      {/* LEFT SIDE — FORM */}
      <div className="checkout-form">
        <h2>Checkout</h2>

        <form>
          <div className="form-group">
            <label>First Name</label>
            <input
              typ="text"
              name="firstName"
              value={customer.firstName}
              onChange={(e) => setCustomer(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              value={customer.lastName}
              onChange={(e) => setCustomer(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={customer.email}
              onChange={(e) => setCustomer(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Phone No</label>
            <input
              type="tel"
              value={customer.phone}
              onChange={(e) => setCustomer(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Street Address</label>
            <input
              type="text"
              value={customer.address}
              onChange={(e) => setCustomer(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              value={customer.city}
              onChange={(e) => setCustomer(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Post Code</label>
            <input
              type="number"
              value={customer.postalCode}
              onChange={(e) => setCustomer(e.target.value)}
            />
          </div>

          <div className="payment-methods">
            <h3>Payment Method</h3>
            <label className="radio-option">
              <input type="radio" defaultChecked />
              <span>Cash on Delivery (COD)</span>
            </label>
          </div>

          <button className="place-order-btn">Place Order</button>
        </form>
      </div>

      {/* RIGHT SIDE — PRODUCTS */}
      <div className="checkout-summary">
        <h3>Your Order</h3>

        {cartItems.map((item) => (
          <div className="summary-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div>
              <p>{item.title}</p>
              <p>Qty: {item.quantity}</p>
              <p>Rs {item.price * item.quantity}</p>
            </div>
          </div>
        ))}

        <hr />

        <div className="summary-row">
          <span>Subtotal</span>
          <span>Rs {subtotal}</span>
        </div>

        <div className="summary-row">
          <span>Shipping</span>
          <span>Rs {shipping}</span>
        </div>

        <div className="summary-row total">
          <span>Total</span>
          <span>Rs {total}</span>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
