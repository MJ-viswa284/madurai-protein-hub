import "./StoreExperience.css";

const features = [
  {
    number: "01",
    title: "Premium Display",
    desc: "Every product wall-to-wall, organized by brand and goal. Easy to browse, easy to choose.",
  },
  {
    number: "02",
    title: "Expert Guidance",
    desc: "Our in-store team gives you real advice — not just a sale. Right stack for your exact goal.",
  },
  {
    number: "03",
    title: "100% Authentic",
    desc: "Zero fakes. Every product sourced from authorized distributors. Scan and verify on the spot.",
  },
  {
    number: "04",
    title: "Premium Feel",
    desc: "Clean, spacious, and built for serious athletes. A store that matches the brand you trust.",
  },
];

export default function StoreExperience() {
  return (
    <section className="store">

      <div className="store-bg-text">STORE</div>

      <div className="store-inner">

        {/* Left — Content */}
        <div className="store-content">

          <span className="store-tag">Store Experience</span>

          <h2 className="store-title">
            More Than A
            <br />
            <span className="store-red">Supplement Store</span>
          </h2>

          <div className="store-divider"></div>

          <p className="store-desc">
            Step into a premium fitness destination built for serious athletes,
            gym enthusiasts, and anyone committed to better performance.
            Walk in and feel the difference.
          </p>

          <div className="store-features">
            {features.map((f) => (
              <div className="store-feature" key={f.number}>
                <div className="store-feature-top">
                  <span className="store-feature-number">{f.number}</span>
                  <span className="store-feature-title">{f.title}</span>
                </div>
                <p className="store-feature-desc">{f.desc}</p>
                <div className="store-feature-line"></div>
              </div>
            ))}
          </div>

          <a
            href="https://maps.google.com"
            className="store-cta"
            target="_blank"
            rel="noreferrer"
          >
            Get Directions →
          </a>

        </div>

        {/* Right — Image */}
        <div className="store-image-wrap">
          <div className="store-image-placeholder">
            <span>Store Interior Photo</span>
          </div>
          <div className="store-image-tag">
            <span className="store-image-tag-value">5000+</span>
            <span className="store-image-tag-label">Happy Customers</span>
          </div>
        </div>

      </div>

    </section>
  );
}