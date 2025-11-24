import "../assets/css/contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      <p className="subtitle">
        Have questions? Feel free to reach out and we’ll get back to you soon.
      </p>

      <div className="contact-content">
        {/* Contact Form */}
        <div className="contact-form">
          <div className="form-group">
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className="form-group">
            <label>Your Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input type="text" placeholder="Enter subject" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Write your message here..."></textarea>
          </div>

          <button className="send-btn">Send Message</button>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Our Information</h3>

          <p>
            <strong>Email:</strong> support@example.com
          </p>
          <p>
            <strong>Phone:</strong> +1 234 567 8900
          </p>
          <p>
            <strong>Address:</strong> 123 Street, City, Country
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
