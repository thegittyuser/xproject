import { useEffect, useState } from "react";
import "../assets/css/cart.css";

function Orders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await fetch("http://localhost:5000/orders");
      const data = await res.json();
      setOrders(data.orders);
    } catch (err) {
      console.error("Error fetching orders", err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="container">
      <h2>Your Orders</h2>

      {orders.map((order) => (
        <div className="order-box" key={order._id}>
          {/* CUSTOMER INFO */}
          <div className="customer-info">
            <h3>Customer Details</h3>
            <p>
              <strong>Name:</strong> {order.customer.firstName}
              {order.customer.lastName}
            </p>
            <p>
              <strong>Email:</strong> {order.customer.email}
            </p>
            <p>
              <strong>Phone:</strong> {order.customer.phone}
            </p>
            <p>
              <strong>Address:</strong> {order.customer.address},
              {order.customer.city} - {order.customer.postalCode}
            </p>
          </div>

          <hr />

          {/* ORDER ITEMS */}
          <div className="order-items">
            <h3>Products</h3>

            {order.products.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.image} alt={item.title} />

                <div className="item-details">
                  <div className="item-name">{item.title}</div>
                  <div>Qty: {item.quantity}</div>
                  <div>Rs {item.price * item.quantity}</div>
                </div>
              </div>
            ))}
          </div>

          <hr />

          {/* TOTAL */}
          <div className="order-total">
            <strong>Total:</strong> Rs {order.totalPrice}
            <br />
            <strong>Payment:</strong> {order.payment}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Orders;
