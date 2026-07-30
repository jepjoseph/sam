import { useState, useEffect } from "react";

import MainLayout from "../layouts/MainLayout";
import "../styles/Contact.css";

function Contact() {
  //---------------- Contact Form ----------------//

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  //---------------- Likes ----------------//

  const [likes, setLikes] = useState(0);

  //---------------- Comments ----------------//

  const [commentName, setCommentName] = useState("");

  const [commentText, setCommentText] = useState("");

  const [comments, setComments] = useState([]);

  //---------------- Contact Form ----------------//

  const sendMessage = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      alert(data.message);

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);

      alert("Failed to send message.");
    }
  };

  //---------------- Get Likes from database ----------------//
  const loadLikes = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/likes");

      const data = await response.json();

      setLikes(data.count);
    } catch (err) {
      console.error(err);
    }
  };

  //---------------- Like Button ----------------//

  const handleLike = async () => {
    try {
      await fetch("http://localhost:5001/api/likes", {
        method: "POST",
      });

      loadLikes();
    } catch (err) {
      console.error(err);
    }
  };

  //---------------- Comment ----------------//

  const postComment = async (e) => {
    e.preventDefault();

    if (!commentName || !commentText) {
      alert("Please complete both fields.");

      return;
    }

    try {
      const response = await fetch("http://localhost:5001/api/comments", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: commentName,

          comment: commentText,
        }),
      });

      const data = await response.json();

      alert(data.message);

      setCommentName("");

      setCommentText("");

      loadComments();
    } catch (err) {
      console.error(err);
    }
  };

  //---------------- Load Comments Function----------------//
  const loadComments = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/comments");

      const data = await response.json();

      setComments(data.comments);
    } catch (err) {
      console.error(err);
    }
  };

  //---------------- Load Likes Function----------------//
  useEffect(() => {
    loadLikes();

    loadComments();
  }, []);

  return (
    <MainLayout>
      <div className="contact-page">
        <div className="contact-container">
          {/* LEFT */}

          <section className="contact-info">
            <h1>Contact Us</h1>

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

          {/* RIGHT */}

          <section className="contact-form-section">
            <h2>Send Us a Message</h2>

            <form className="contact-form" onSubmit={sendMessage}>
              <label>Name</label>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />

              <label>Email</label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />

              <label>Message</label>

              <textarea
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message..."
              />

              <button type="submit">Send Message</button>
            </form>
          </section>
        </div>

        {/* COMMUNITY */}

        <section className="community-section">
          <h2>Community Feedback</h2>

          {/* Likes */}

          <div className="likes-card">
            <h3>❤️ {likes} Likes</h3>

            <button onClick={handleLike}>👍 Like This Project</button>
          </div>

          {/* Comment Form */}

          <div className="comments-card">
            <h3>Leave a Comment</h3>

            <form onSubmit={postComment}>
              <input
                placeholder="Your name"
                value={commentName}
                onChange={(e) => setCommentName(e.target.value)}
              />

              <textarea
                rows="4"
                placeholder="Write a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />

              <button type="submit">Post Comment</button>
            </form>
          </div>

          {/* Comment List */}

          <div className="comment-list">
            <h3>Recent Comments</h3>

            <div className="comment-scroll">
              {comments.length === 0 && <p>No comments yet.</p>}

              {comments.map((comment) => (
                <div key={comment.Id} className="comment-item">
                  <h4>{comment.Name}</h4>

                  <small>{new Date(comment.CreatedAt).toLocaleString()}</small>

                  <p>{comment.Comment}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default Contact;
