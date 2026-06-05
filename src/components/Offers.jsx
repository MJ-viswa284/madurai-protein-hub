import "./Offers.css";

const offers = [
  {
    label: "Best Seller",
    featured: true,
    discount: "20% OFF",
    title: "Buy 2 Whey Proteins",
    desc: "Stack your supply and save big. Get 20% off on your second tub of any whey protein brand.",
    saving: "Save up to ₹800",
    action: "Shop Now →",
  },
  {
    label: null,
    featured: false,
    discount: "COMBO DEAL",
    title: "Creatine Combo",
    desc: "Bundle Creatine + Shaker and save more. Everything you need in one power-packed deal.",
    saving: "Save ₹350",
    action: "View Offer →",
  },
  {
    label: null,
    featured: false,
    discount: "FIRST ORDER",
    title: "First Purchase Deal",
    desc: "First time with us? Welcome to the hub. Special discount waiting for new customers only.",
    saving: "Save ₹500",
    action: "Claim Offer →",
  },
];

export default function Offers() {
  return (
    <section className="offers">

      <div className="offers-bg-text">DEALS</div>

      <div className="offers-inner">

        <div className="offers-header">
          <span className="offers-tag">Special Promotions</span>
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
          {offers.map((offer) => (
            <div className={`offer-card ${offer.featured ? "offer-card--featured" : ""}`} key={offer.title}>

              <div className="offer-card-top">
                <span className="offer-discount">{offer.discount}</span>
                {offer.label && (
                  <span className="offer-label">{offer.label}</span>
                )}
              </div>

              <h3 className="offer-title">{offer.title}</h3>

              <p className="offer-desc">{offer.desc}</p>

              <div className="offer-saving">{offer.saving}</div>

              <div className="offer-divider"></div>

              <a href="https://wa.me/919876543210" className="offer-action" target="_blank" rel="noreferrer">
                {offer.action}
              </a>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}