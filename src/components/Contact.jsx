import "./Contact.css";

const contactDetails = [
  {
    number: "01",
    label: "Visit Us",
    value: "Madurai Protein Hub, Main Store, Madurai",
    action: "Get Directions →",
    href: "https://maps.google.com",
  },
  {
    number: "02",
    label: "WhatsApp",
    value: "+91 98765 43210",
    action: "Chat Now →",
    href: "https://wa.me/919876543210",
  },
  {
    number: "03",
    label: "Instagram",
    value: "@maduraiproteinhub",
    action: "Follow Us →",
    href: "https://instagram.com/maduraiproteinhub",
  },
  {
    number: "04",
    label: "Store Hours",
    value: "Mon – Sun: 9AM – 9PM",
    action: null,
    href: null,
  },
];

export default function Contact() {
  return (
    <section className="contact">

      <div className="contact-bg-text">CONTACT</div>

      <div className="contact-inner">

        {/* Left — CTA */}
        <div className="contact-left">

          <span className="contact-tag">Get In Touch</span>

          <h2 className="contact-title">
            Ready To
            <br />
            <span className="contact-red">Fuel Up?</span>
          </h2>

          <p className="contact-desc">
            Visit Madurai's most trusted supplement destination. Walk in,
            WhatsApp us, or follow for daily deals and offers.
          </p>

          <a
            href="https://wa.me/919876543210"
            className="contact-cta"
            target="_blank"
            rel="noreferrer"
          >
            <span>Order on WhatsApp</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>

          <a
            href="https://instagram.com/maduraiproteinhub"
            className="contact-cta-secondary"
            target="_blank"
            rel="noreferrer"
          >
            Follow on Instagram →
          </a>

          {/* Divider stat */}
          <div className="contact-trust">
            <div className="contact-trust-item">
              <span className="contact-trust-value">5000+</span>
              <span className="contact-trust-label">Customers Served</span>
            </div>
            <div className="contact-trust-divider"></div>
            <div className="contact-trust-item">
              <span className="contact-trust-value">Same Day</span>
              <span className="contact-trust-label">Delivery in Madurai</span>
            </div>
          </div>

        </div>

        {/* Right — Details Grid */}
        <div className="contact-right">
          {contactDetails.map((item) => (
            <div className="contact-detail-card" key={item.number}>

              <div className="contact-detail-top">
                <span className="contact-detail-number">{item.number}</span>
                <span className="contact-detail-label">{item.label}</span>
              </div>

              <p className="contact-detail-value">{item.value}</p>

              {item.action && item.href && (
                <a
                  href={item.href}
                  className="contact-detail-action"
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.action}
                </a>
              )}

              <div className="contact-detail-line"></div>

            </div>
          ))}
        </div>

      </div>

      {/* Footer Bar */}
      <div className="contact-footer">
        <span className="contact-footer-brand">
          © 2024 Madurai Protein Hub
        </span>
        <span className="contact-footer-tagline">
          Madurai's #1 Supplement Destination
        </span>
      </div>

    </section>
  );
}