import "../assets/css/cart.css";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <div className="container">
      {/* Cart Items */}
      <div className="cart-items">
        <h2>Your Cart</h2>

        <div className="cart-item">
          <img src="https://via.placeholder.com/90" alt="Product" />

          <div className="item-details">
            <div className="item-name">Product Name</div>
            <div className="price">$30.00</div>

            <div className="quantity">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>

          <div className="subtotal">$30.00</div>
          <div className="remove">×</div>
        </div>

        {/* You can duplicate <div className="cart-item"> … </div> for more products */}
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
};

export default Cart;
