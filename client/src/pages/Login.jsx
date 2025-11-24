import "../assets/css/login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <p className="subtitle">
            Welcome back! Please login to your account.
          </p>

          <form className="login-form">
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>

            <button className="login-btn">Login</button>
          </form>

          <p className="signup-link">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
