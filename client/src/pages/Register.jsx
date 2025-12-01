import { useState } from "react";
import "../assets/css/register.css";
import { Link } from "react-router-dom";
function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // submission testing
    // console.log({ ...form });
  
    // try {
    //   const response = fetch("http://localhost:3000/doregister",
    //   {
    //     'method': "POST",
    //     "content-type": "application/json",
        
    //   }
    // } catch (error) {
      
    // }
  
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Sign Up</h2>
        <p className="subtitle">Create a new account to get started.</p>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your last name"
              name="username"
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
          </div>

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

          <div className="form-group">
            <label>Phone No</label>
            <input
              type="tel"
              placeholder="Phone No"
              name="phone"
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
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
