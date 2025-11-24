import "../assets/css/checkout.css";
import { Link } from "react-router-dom";
function Checkout() {
  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="checkout-form">
        <div className="form-group">
          <label>First Name</label>
          <input type="text" placeholder="Enter first name" />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input type="text" placeholder="Enter last name" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter email address" />
        </div>

        <div className="form-group">
          <label>Phone No</label>
          <input type="text" placeholder="Enter phone number" />
        </div>

        <div className="form-group">
          <label>Street Address</label>
          <input type="text" placeholder="Enter street address" />
        </div>

        <div className="form-group">
          <label>City</label>
          <input type="text" placeholder="Enter city" />
        </div>

        <div className="form-group">
          <label>Post Code</label>
          <input type="text" placeholder="Enter postal code" />
        </div>

        <div className="payment-methods">
          <h3>Payment Method</h3>

          <label className="radio-option">
            <input type="radio" name="payment" defaultChecked />
            <span>Cash on Delivery (COD)</span>
          </label>
        </div>
        <Link to={"/ordercomplete"}>
          <button className="place-order-btn">Place Order</button>
        </Link>
      </div>
    </div>
  );
}

export default Checkout;
