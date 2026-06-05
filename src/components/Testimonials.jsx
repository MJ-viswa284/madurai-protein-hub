import "./Testimonials.css";

const testimonials = [
  {
    number: "01",
    name: "Arun Kumar",
    role: "Competitive Bodybuilder",
    location: "Madurai",
    quote:
      "Been buying from Madurai Protein Hub for 2 years. Every product is 100% authentic — I've never had a fake supplement. These guys are the real deal.",
    rating: 5,
    tag: "Verified Customer",
  },
  {
    number: "02",
    name: "Priya Dharshini",
    role: "CrossFit Athlete",
    location: "Anna Nagar, Madurai",
    quote:
      "The staff actually knows their stuff. They helped me pick the right pre-workout for my training style. Not just selling — actually guiding.",
    rating: 5,
    tag: "Verified Customer",
  },
  {
    number: "03",
    name: "Karthik Selvam",
    role: "Gym Trainer",
    location: "Madurai",
    quote:
      "I recommend all my clients here. Best prices in Madurai, genuine products, and same-day delivery is a game changer. No one else comes close.",
    rating: 5,
    tag: "Verified Customer",
  },
  {
    number: "04",
    name: "Suriya Prakash",
    role: "Marathon Runner",
    location: "KK Nagar, Madurai",
    quote:
      "Ordered my whey protein at 4PM and it arrived by 7PM. The speed and packaging were perfect. This is how supplement shopping should feel.",
    rating: 5,
    tag: "Verified Customer",
  },
];

const stats = [
  { value: "5000+", label: "Happy Customers" },
  { value: "50+", label: "Premium Brands" },
  { value: "4.9★", label: "Average Rating" },
  { value: "2+", label: "Years Trusted" },
];

export default function Testimonials() {
  return (
    <section className="testimonials">

      <div className="testimonials-bg-text">TRUST</div>

      <div className="testimonials-inner">

        {/* Header */}
        <div className="testimonials-header">
          <span className="testimonials-tag">Testimonials & Trust</span>
          <h2 className="testimonials-title">
            Madurai's Athletes
            <span className="testimonials-red"> Speak</span>
          </h2>
          <p className="testimonials-subtitle">
            Real customers. Real results. Real trust built over years of
            authentic service across Madurai.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="testimonials-stats">
          {stats.map((s) => (
            <div className="testimonials-stat" key={s.label}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.number}>

              <div className="testimonial-card-top">
                <span className="testimonial-number">{t.number}</span>
                <span className="testimonial-verified">{t.tag}</span>
              </div>

              <blockquote className="testimonial-quote">
                "{t.quote}"
              </blockquote>

              <div className="testimonial-divider"></div>

              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {t.name.charAt(0)}
                </div>
                <div className="testimonial-info">
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-role">
                    {t.role} · {t.location}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}