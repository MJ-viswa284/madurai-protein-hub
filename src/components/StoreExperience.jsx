import "./StoreExperience.css";

export default function StoreExperience() {
  return (
    <section className="store">

      <div className="store-bg-text">
        STORE
      </div>

      <div className="store-inner">

        <div className="store-content">

          <span className="store-tag">
            Store Experience
          </span>

          <h2 className="store-title">
            More Than A
            <span className="store-red"> Supplement Store</span>
          </h2>

          <div className="store-divider"></div>

          <p className="store-desc">
            Step into a premium fitness destination built for serious athletes,
            gym enthusiasts, and anyone committed to better performance.
          </p>

          <div className="store-features">

            <div className="store-feature">
              <h3>01</h3>
              <p>Premium Product Display</p>
            </div>

            <div className="store-feature">
              <h3>02</h3>
              <p>Expert Guidance</p>
            </div>

            <div className="store-feature">
              <h3>03</h3>
              <p>Authentic Products Only</p>
            </div>

            <div className="store-feature">
              <h3>04</h3>
              <p>Comfortable Shopping Experience</p>
            </div>

          </div>

        </div>

        <div className="store-image">
          Store Interior Image
        </div>

      </div>

    </section>
  );
}