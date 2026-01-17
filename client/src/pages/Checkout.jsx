import "../assets/css/checkout.css";

function Checkout() {
  // Demo customer data
  const customer = {
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "1234567890",
    address: "123 Main Street",
    city: "New York",
    postalCode: "10001",
  };

  // Demo cart items
  const cartItems = [
    {
      id: 1,
      title: "Classic White Shirt",
      price: 1200,
      quantity: 2,
      image: "/images/product1.jpg",
    },
    {
      id: 2,
      title: "Blue Jeans",
      price: 1800,
      quantity: 1,
      image: "/images/product2.jpg",
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 100;
  const total = subtotal + shipping;

  return (
    <div className="checkout-container checkout-grid">
      {/* LEFT SIDE — FORM */}
      <div className="checkout-form">
        <h2>Checkout</h2>

        <div className="form-group">
          <label>First Name</label>
          <input value={customer.firstName} readOnly />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input value={customer.lastName} readOnly />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input value={customer.email} readOnly />
        </div>

        <div className="form-group">
          <label>Phone No</label>
          <input value={customer.phone} readOnly />
        </div>

        <div className="form-group">
          <label>Street Address</label>
          <input value={customer.address} readOnly />
        </div>

        <div className="form-group">
          <label>City</label>
          <input value={customer.city} readOnly />
        </div>

        <div className="form-group">
          <label>Post Code</label>
          <input value={customer.postalCode} readOnly />
        </div>

        <div className="payment-methods">
          <h3>Payment Method</h3>
          <label className="radio-option">
            <input type="radio" defaultChecked />
            <span>Cash on Delivery (COD)</span>
          </label>
        </div>

        <button className="place-order-btn">Place Order</button>
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
