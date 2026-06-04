import "./Offers.css";

export default function Offers() {
  return (
    <section className="offers">

      <div className="offers-bg-text">
        OFFERS
      </div>

      <div className="offers-inner">

        <div className="offers-header">

          <span className="offers-tag">
            Special Promotions
          </span>

          <h2 className="offers-title">
            Deals That Power
            <span className="offers-red"> Your Journey</span>
          </h2>

          <p className="offers-desc">
            Exclusive discounts, combo offers, and limited-time promotions
            on Madurai's favorite supplement brands.
          </p>

        </div>

        <div className="offers-grid">

          <div className="offer-card featured">

            <span className="offer-label">
              BEST SELLER
            </span>

            <h3>
              Buy 2 Whey Proteins
            </h3>

            <p>
              Get an exclusive discount on your second tub.
            </p>

            <div className="offer-divider"></div>

            <span className="offer-action">
              Shop Now →
            </span>

          </div>

          <div className="offer-card">

            <h3>
              Creatine Combo
            </h3>

            <p>
              Bundle Creatine + Shaker and save more.
            </p>

            <div className="offer-divider"></div>

            <span className="offer-action">
              View Offer →
            </span>

          </div>

          <div className="offer-card">

            <h3>
              First Purchase Deal
            </h3>

            <p>
              Special discount for first-time customers.
            </p>

            <div className="offer-divider"></div>

            <span className="offer-action">
              Claim Offer →
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}