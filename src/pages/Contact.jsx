import { useState } from "react";

import MainLayout from "../layouts/MainLayout";
import "../styles/Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: name,

          email: email,

          message: message,
        }),
      });

      const data = await response.json();

      alert(data.message);

      // Clear form after successful submission
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);

      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <MainLayout>
      <h1>Saint Andrews Map Contact</h1>
      <div className="contact-page">
        <div className="contact-container">
          {/* Left Side */}
          <section className="contact-info">
            <h1>Contact SAM</h1>

            <p>
              Have questions, feedback, or suggestions about the St Andrews Map
              platform? Our team would be happy to hear from you.
            </p>

            <div className="info-item">
              <h3>📍 Location</h3>
              <p>
                St Andrews Country Club
                <br />
                Boca Raton, Florida
              </p>
            </div>

            <div className="info-item">
              <h3>📧 Email</h3>
              <p>support@sam-navigation.com</p>
            </div>

            <div className="info-item">
              <h3>🌐 Platform</h3>
              <p>
                SAM - St Andrews Map
                <br />
                Interactive GIS Navigation System
              </p>
            </div>
          </section>

          {/* Right Side */}
          <section className="contact-form-section">
            <h2>Send Us a Message</h2>

            <form className="contact-form" onSubmit={sendMessage}>
              <label>Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label>Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label>Message</label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <button type="submit">Send Message</button>
            </form>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}

export default Contact;
