import { useState } from "react";
import "../assets/css/login.css";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/dologin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (data.ok) {
        console.log(data.message);
        navigate(`/profile/${data.userEmail.sessionId}`);
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      console.log("Login Failed. Try Again", err);
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <p className="subtitle">
            Welcome back! Please login to your account.
          </p>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
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
