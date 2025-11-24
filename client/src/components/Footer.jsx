import { Link } from "react-router-dom";
import "../assets/css/footer.css";
function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* About / Brand */}
        <div className="footer-section">
          <h3>Talha Collections</h3>
          <p>Providing quality products and excellent service since 2025.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/cart"}>Cart</Link>
            </li>
            <li>
              <Link to={"/checkout"}>Checkout</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@example.com</p>
          <p>Phone: +1 234 567 8900</p>
          <p>Address: 123 Street, City, Country</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 ShopName. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
