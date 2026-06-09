import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

const contactDetails = [
  { number: "01", label: "Visit Us", value: "Madurai Protein Hub, Main Store, Madurai", action: "Get Directions →", href: "https://maps.google.com" },
  { number: "02", label: "WhatsApp", value: "+91 98765 43210", action: "Chat Now →", href: "https://wa.me/919876543210" },
  { number: "03", label: "Instagram", value: "@maduraiproteinhub", action: "Follow Us →", href: "https://instagram.com/maduraiproteinhub" },
  { number: "04", label: "Store Hours", value: "Mon – Sun: 9AM – 9PM", action: null, href: null },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const bgTextRef = useRef(null);
  const tagRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const ctaSecondaryRef = useRef(null);
  const trustRef = useRef(null);
  const rightRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── BG parallax ───────────────────────────────────
      gsap.to(bgTextRef.current, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // ── Left side cascade ─────────────────────────────
      const leftTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power3.out" },
      });

      leftTl
        .from(tagRef.current, { x: -30, opacity: 0, duration: 0.6 }, 0)
        .from(titleRef.current.children, {
          y: 70,
          opacity: 0,
          duration: 0.9,
          stagger: 0.15,
        }, 0.15)
        .from(descRef.current, { y: 25, opacity: 0, duration: 0.6 }, 0.4)
        .from(ctaRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "back.out(1.4)",
        }, 0.55)
        .from(ctaSecondaryRef.current, { y: 15, opacity: 0, duration: 0.5 }, 0.65)
        .from(trustRef.current.children, {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.12,
        }, 0.75);

      // ── Right detail cards stagger ────────────────────
      const cards = rightRef.current.querySelectorAll(".contact-detail-card");
      gsap.from(cards, {
        x: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // ── Detail values slam in ─────────────────────────
      const values = rightRef.current.querySelectorAll(".contact-detail-value");
      gsap.from(values, {
        y: 15,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
      });

      // ── Detail lines expand ───────────────────────────
      const lines = rightRef.current.querySelectorAll(".contact-detail-line");
      gsap.from(lines, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // ── Footer slides up last ─────────────────────────
      gsap.from(footerRef.current.children, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
          toggleActions: "play none none none",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="contact" ref={sectionRef}>

      <div className="contact-bg-text" ref={bgTextRef}>CONTACT</div>

      <div className="contact-inner">

        {/* Left */}
        <div className="contact-left">
          <span className="contact-tag" ref={tagRef}>Get In Touch</span>
          <h2 className="contact-title" ref={titleRef}>
            <span>Ready To</span>
            <span className="contact-red">Fuel Up?</span>
          </h2>
          <p className="contact-desc" ref={descRef}>
            Visit Madurai's most trusted supplement destination. Walk in,
            WhatsApp us, or follow for daily deals and offers.
          </p>
          <a href="https://wa.me/919876543210" className="contact-cta" target="_blank" rel="noreferrer" ref={ctaRef}>
            <span>Order on WhatsApp</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="https://instagram.com/maduraiproteinhub" className="contact-cta-secondary" target="_blank" rel="noreferrer" ref={ctaSecondaryRef}>
            Follow on Instagram →
          </a>
          <div className="contact-trust" ref={trustRef}>
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

        {/* Right */}
        <div className="contact-right" ref={rightRef}>
          {contactDetails.map((item) => (
            <div className="contact-detail-card" key={item.number}>
              <div className="contact-detail-top">
                <span className="contact-detail-number">{item.number}</span>
                <span className="contact-detail-label">{item.label}</span>
              </div>
              <p className="contact-detail-value">{item.value}</p>
              {item.action && item.href && (
                <a href={item.href} className="contact-detail-action" target="_blank" rel="noreferrer">
                  {item.action}
                </a>
              )}
              <div className="contact-detail-line"></div>
            </div>
          ))}
        </div>

      </div>

      {/* Footer */}
      <div className="contact-footer" ref={footerRef}>
        <span className="contact-footer-brand">© 2024 Madurai Protein Hub</span>
        <span className="contact-footer-tagline">Madurai's #1 Supplement Destination</span>
      </div>

    </section>
  );
}