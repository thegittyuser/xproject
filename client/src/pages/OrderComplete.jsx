import { Link } from "react-router-dom";
import "../assets/css/ordercomplete.css";

function OrderComplete() {
  return (
    <div className="placeorder-container">
      <h2>Order Placed Successfully 🎉</h2>

      <div className="order-box">
        <h3>Thank You!</h3>
        <p>Your order has been placed and will be delivered soon.</p>

        <div className="order-details">
          <div className="detail-row">
            <span>Order Number:</span>
            <strong>#123456</strong>
          </div>

          <div className="detail-row">
            <span>Payment Method:</span>
            <strong>Cash on Delivery</strong>
          </div>

          <div className="detail-row">
            <span>Delivery Address:</span>
            <strong>123 Street, City, Country</strong>
          </div>
        </div>
        <Link to={"/ordercomplete"}>
          <button className="back-home-btn">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default OrderComplete;
