import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./WhyChooseUs.css";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef(null);
  const bgTextRef = useRef(null);
  const tagRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── BG text parallax ──────────────────────────────
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

      headerTl.from(tagRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.6,
      }, 0);

      headerTl.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
      }, 0.15);

      headerTl.from(subtitleRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
      }, 0.35);

      // ── Cards stagger in ──────────────────────────────
      const cards = gridRef.current.querySelectorAll(".why-card");

      gsap.from(cards, {
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: {
          amount: 0.6,
          from: "start",
        },
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // ── Card numbers count-up feel ────────────────────
      // Each card number flickers in with clip
      gsap.from(cards, {
        clipPath: "inset(0 100% 0 0)",
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="why" ref={sectionRef}>

      <div className="why-bg-text" ref={bgTextRef}>WHY US</div>

      <div className="why-inner">

        {/* Header */}
        <div className="why-header">
          <span className="why-tag" ref={tagRef}>Why Choose Us</span>
          <h2 className="why-title" ref={titleRef}>
            The <span className="why-title-red">Difference</span> Is Clear
          </h2>
          <p className="why-subtitle" ref={subtitleRef}>
            Not all supplement stores are built the same. Here's why Madurai trusts us.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="why-grid" ref={gridRef}>
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