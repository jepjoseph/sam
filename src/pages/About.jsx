import MainLayout from "../layouts/MainLayout";
import "../styles/About.css";

function About() {
  return (
    <MainLayout>
      <div className="about-page">
        <div className="about-container">
          <h1>About</h1>

          <p className="subtitle">
            <strong>S</strong>t <strong>A</strong>ndrews <strong>M</strong>ap
          </p>

          <section className="about-card">
            <h2>Our Mission</h2>

            <p>
              SAM (St Andrews Map) is an interactive navigation and mapping
              platform designed specifically for the St Andrews Country Club
              community. It provides intelligent navigation throughout the
              private road network, enabling members, guests, employees,
              contractors, and management to quickly locate destinations and
              discover the most efficient routes.
            </p>
          </section>

          <section className="about-card">
            <h2>🚀 Features</h2>

            <div className="feature-grid">
              <div className="feature-item">🗺️ Interactive GIS Map</div>

              <div className="feature-item">📍 Current Location</div>

              <div className="feature-item">🧭 Smart Route Finder</div>

              <div className="feature-item">🚏 Multiple Stops</div>

              <div className="feature-item">🏢 Building Search</div>

              <div className="feature-item">⭐ Points of Interest</div>

              <div className="feature-item">
                🚗 Multiple Transportation Modes
              </div>

              <div className="feature-item">📡 GPS Navigation</div>

              <div className="feature-item">🔄 Future Real-Time Updates</div>
            </div>
          </section>

          <section className="about-card">
            <h2>Technology</h2>

            <p>
              SAM combines modern web technologies with Geographic Information
              Systems (GIS) to provide an accurate and user-friendly navigation
              experience. The application is built using React, Leaflet,
              GeoJSON, GPS data, and a scalable backend architecture for future
              expansion.
            </p>
          </section>

          <section className="about-card">
            <h2>Vision</h2>

            <p>
              Our vision is to provide a modern digital navigation platform that
              enhances mobility, improves accessibility, and delivers a smarter
              mapping experience for everyone within St Andrews Country Club.
            </p>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}

export default About;
