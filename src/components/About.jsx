import "./About.css";

export default function About() {
  return (
    <section className="about">

      {/* Background watermark */}
      <div className="about-bg-text">ABOUT</div>

      <div className="about-inner">

        {/* Left — Image Stack */}
        <div className="about-images">
          <div className="about-img-main">
            <div className="about-img-placeholder main">
              <p>Store Photo</p>
            </div>
          </div>
          <div className="about-img-secondary">
            <div className="about-img-placeholder secondary">
              <p>Interior Photo</p>
            </div>
          </div>
          <div className="about-years-badge">
            <span className="about-years-num">3+</span>
            <span className="about-years-label">Years of<br />Excellence</span>
          </div>
        </div>

        {/* Right — Content */}
        <div className="about-content">

          <span className="about-tag">Our Story</span>

          <h2 className="about-title">
            Madurai's Most
            <span className="about-title-red"> Trusted</span>
            <br />Supplement Store
          </h2>

          <div className="about-divider"></div>

          <p className="about-desc">
            Born in the heart of Madurai, Protein Hub started with one mission —
            to give serious athletes and fitness enthusiasts access to{" "}
            <strong>100% authentic supplements</strong> at honest prices.
          </p>

          <p className="about-desc">
            No fakes. No compromise. Every product on our shelf is verified,
            sourced directly from authorized distributors, and backed by our
            personal guarantee.
          </p>

          {/* Feature Pills */}
          <div className="about-features">
            <div className="about-feature">
              <span className="about-feature-icon">✓</span>
              Authorized Distributor
            </div>
            <div className="about-feature">
              <span className="about-feature-icon">✓</span>
              100% Authentic Products
            </div>
            <div className="about-feature">
              <span className="about-feature-icon">✓</span>
              Expert Nutrition Guidance
            </div>
            <div className="about-feature">
              <span className="about-feature-icon">✓</span>
              Madurai's Largest Collection
            </div>
          </div>

          <button className="about-btn">Know More About Us</button>

        </div>

      </div>

    </section>
  );
}