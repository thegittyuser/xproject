import { useEffect, useState } from "react";
import "../assets/css/checkout.css";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
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

  const cartProducts = () => {
    fetch("http://localhost:5000/cart")
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data.cartItems);
      })
      .catch((err) => console.error("Error Fetching Products.", err));
  };

  useEffect(cartProducts, []);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = 100;
  const total = subtotal + shipping;

  // const checkout = async () => {
  //   await fetch("http://localhost:5000/checkout", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       customer,
  //     }),
  //   });
  //   navigate("/shop");
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // backend API call
      const response = await fetch("http://localhost:5000/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer,
        }),
      });

      const data = await response.json();

      if (data.ok) {
        console.log(data.message);
        setCustomer({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          postalCode: "",
        });
        navigate("/");
      } else {
        console.log(data.message);
      }
    } catch (err) {
      console.error(err);
      console.log("Order Failed");
    }
  };

  return (
    <div className="checkout-container checkout-grid">
      {/* LEFT SIDE — FORM */}
      <div className="checkout-form">
        <h2>Checkout</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={customer.firstName}
              onChange={(e) =>
                setCustomer({ ...customer, firstName: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              value={customer.lastName}
              onChange={(e) =>
                setCustomer({ ...customer, lastName: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={customer.email}
              onChange={(e) =>
                setCustomer({ ...customer, email: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Phone No</label>
            <input
              type="tel"
              value={customer.phone}
              onChange={(e) =>
                setCustomer({ ...customer, phone: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Street Address</label>
            <input
              type="text"
              value={customer.address}
              onChange={(e) =>
                setCustomer({ ...customer, address: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              value={customer.city}
              onChange={(e) =>
                setCustomer({ ...customer, city: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Post Code</label>
            <input
              type="number"
              value={customer.postalCode}
              onChange={(e) =>
                setCustomer({ ...customer, postalCode: e.target.value })
              }
            />
          </div>

          <div className="payment-methods">
            <h3>Payment Method</h3>
            <label className="radio-option">
              <input type="radio" defaultChecked />
              <span>Cash on Delivery (COD)</span>
            </label>
          </div>

          <button className="place-order-btn" type="submit">
            Place Order
          </button>
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
