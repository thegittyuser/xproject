import "../assets/css/register.css";
import { Link } from "react-router-dom";
function Register() {
  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Sign Up</h2>
        <p className="subtitle">Create a new account to get started.</p>

        <form className="register-form">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" placeholder="Enter your first name" />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Enter your last name" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm your password" />
          </div>

          <button className="register-btn">Register</button>
        </form>

        <p className="login-link">
          Already have an account? <Link to={"/login"}>Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
