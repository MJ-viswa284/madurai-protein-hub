import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-bg-text">PROTEIN</div>

      <div className="hero-content">

        <span className="hero-badge">
          <span className="hero-badge-dot"></span>
          100% Authentic Supplements
        </span>

        <h1 className="hero-title">
          Madurai
          <span className="hero-title-red">Protein</span>
          Hub
        </h1>

        <p className="hero-subtitle">Fuel Your Performance</p>
        <div className="hero-divider"></div>

        <p className="hero-desc">
          Madurai's most trusted destination for{" "}
          <strong>premium supplements</strong>. Authentic brands, expert
          guidance, and results that speak for themselves.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Explore Products</button>
          <button className="secondary-btn">Visit Store</button>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <h3>50+</h3>
            <span>Top Brands</span>
          </div>
          <div className="hero-stat">
            <h3>100%</h3>
            <span>Authentic</span>
          </div>
          <div className="hero-stat">
            <h3>5K+</h3>
            <span>Customers</span>
          </div>
          <div className="hero-stat">
            <h3>24/7</h3>
            <span>Support</span>
          </div>
        </div>

      </div>

      <div className="hero-image-wrapper">
        <div className="hero-image">
          <div className="hero-image-placeholder">
            <p>Athlete Photo</p>
          </div>
        </div>
        <div className="hero-corner-tl"></div>
        <div className="hero-corner-br"></div>
      </div>

    </section>
  );
}