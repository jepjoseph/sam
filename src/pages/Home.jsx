import MainLayout from "../layouts/MainLayout";
import "../styles/Home.css";

function Home() {
  return (
    <MainLayout>
      <div className="home">
        {" "}
        <section className="hero">
          {" "}
          <div className="hero-left">
            {" "}
            <h1>Welcome to SAM{" "}</h1>
            <p> </p>
            <h3>St Andrews Map</h3>{" "}
            <p>
            <strong>St Andrews Map</strong> is an intelligent GIS navigation
            platform designed specifically for the St Andrews Country Club
            community.
          </p>
          <h3>Why SAM?</h3>
            <p>
              {" "}
              SAM was developed to provide an advanced navigation experience
              tailored specifically for St Andrews Country Club. Unlike
              traditional mapping applications, SAM understands the private road
              network and delivers accurate routing, intelligent search, and
              interactive location services..{" "}
            </p>{" "}
            <div className="button-group"> </div>{" "}
          </div>{" "}
          <div className="hero-right">
            {" "}
            <h2>Platform Features</h2>{" "}
            <ul className="feature-list">
              {" "}
              <li>🗺 Interactive GIS Map</li> <li>🧭 Smart Route Navigation</li>{" "}
              <li>🏢 Building Search</li> <li>⭐ Points of Interest</li>{" "}
              <li>🛣 Road & Intersection Mapping</li> <li>🚗 Transportation Modes</li>{" "}
              <li>📍 Future Real-Time Navigation</li>{" "}
            </ul>{" "}
          </div>{" "}
        </section>{" "}
        <section className="mission">
          {" "}
          <h2>Our Mission</h2>{" "}
          <p>
            {" "}
            To provide an accurate, intelligent, and user-friendly navigation
            platform specifically designed for the St Andrews Country Club
            community, offering a smarter alternative to conventional mapping
            applications.{" "}
          </p>{" "}
        </section>{" "}
      </div>
    </MainLayout>
  );
}

export default Home;
