import "./WhyChooseUs.css";

const reasons = [
  {
    number: "01",
    title: "100% Authentic",
    desc: "Every product is sourced directly from authorized distributors. Zero fakes, zero compromise — guaranteed.",
    icon: "✦",
  },
  {
    number: "02",
    title: "50+ Premium Brands",
    desc: "From Optimum Nutrition to MuscleBlaze — we carry the biggest names in sports nutrition under one roof.",
    icon: "✦",
  },
  {
    number: "03",
    title: "Expert Guidance",
    desc: "Our in-store experts help you find the right supplement for your exact fitness goal. No guesswork.",
    icon: "✦",
  },
  {
    number: "04",
    title: "Best Price Promise",
    desc: "Premium supplements shouldn't break the bank. We match and beat prices so you get more for less.",
    icon: "✦",
  },
  {
    number: "05",
    title: "Fast Local Delivery",
    desc: "Same-day delivery across Madurai. Order before 6PM and get it at your doorstep tonight.",
    icon: "✦",
  },
  {
    number: "06",
    title: "Trusted by 5000+",
    desc: "Over 5000 athletes, gym-goers, and fitness enthusiasts in Madurai trust us every single day.",
    icon: "✦",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why">

      <div className="why-bg-text">WHY US</div>

      <div className="why-inner">

        {/* Header */}
        <div className="why-header">
          <span className="why-tag">Why Choose Us</span>
          <h2 className="why-title">
            The <span className="why-title-red">Difference</span> Is Clear
          </h2>
          <p className="why-subtitle">
            Not all supplement stores are built the same. Here's why Madurai trusts us.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="why-grid">
          {reasons.map((r) => (
            <div className="why-card" key={r.number}>
              <div className="why-card-top">
                <span className="why-card-number">{r.number}</span>
                <span className="why-card-icon">{r.icon}</span>
              </div>
              <h3 className="why-card-title">{r.title}</h3>
              <p className="why-card-desc">{r.desc}</p>
              <div className="why-card-line"></div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}