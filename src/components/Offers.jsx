import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Offers.css";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef(null);
  const bgTextRef = useRef(null);
  const tagRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const gridRef = useRef(null);

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

      // ── Header reveal ─────────────────────────────────
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power3.out" },
      });

      headerTl
        .from(tagRef.current, { y: -20, opacity: 0, duration: 0.6 }, 0)
        .from(titleRef.current, { y: 50, opacity: 0, duration: 0.8 }, 0.15)
        .from(descRef.current, { y: 25, opacity: 0, duration: 0.6 }, 0.35);

      // ── Cards stagger in ──────────────────────────────
      const cards = gridRef.current.querySelectorAll(".offer-card");

      gsap.from(cards, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });

      // ── Discount labels slam in ───────────────────────
      const discounts = gridRef.current.querySelectorAll(".offer-discount");
      gsap.from(discounts, {
        x: -30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // ── Savings amount pops in gold ───────────────────
      const savings = gridRef.current.querySelectorAll(".offer-saving");
      gsap.from(savings, {
        scale: 0.7,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
      });

      // ── Dividers expand ───────────────────────────────
      const dividers = gridRef.current.querySelectorAll(".offer-divider");
      gsap.from(dividers, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.5,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="offers" ref={sectionRef}>

      <div className="offers-bg-text" ref={bgTextRef}>DEALS</div>

      <div className="offers-inner">

        <div className="offers-header">
          <span className="offers-tag" ref={tagRef}>Special Promotions</span>
          <h2 className="offers-title" ref={titleRef}>
            Deals That Power
            <span className="offers-red"> Your Journey</span>
          </h2>
          <p className="offers-desc" ref={descRef}>
            Exclusive discounts, combo offers, and limited-time promotions
            on Madurai's favorite supplement brands.
          </p>
        </div>

        <div className="offers-grid" ref={gridRef}>
          {offers.map((offer) => (
            <div className={`offer-card ${offer.featured ? "offer-card--featured" : ""}`} key={offer.title}>
              <div className="offer-card-top">
                <span className="offer-discount">{offer.discount}</span>
                {offer.label && <span className="offer-label">{offer.label}</span>}
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