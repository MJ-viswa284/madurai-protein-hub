import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Testimonials.css";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    number: "01",
    name: "Arun Kumar",
    role: "Competitive Bodybuilder",
    location: "Madurai",
    quote: "Been buying from Madurai Protein Hub for 2 years. Every product is 100% authentic — I've never had a fake supplement. These guys are the real deal.",
    tag: "Verified Customer",
  },
  {
    number: "02",
    name: "Priya Dharshini",
    role: "CrossFit Athlete",
    location: "Anna Nagar, Madurai",
    quote: "The staff actually knows their stuff. They helped me pick the right pre-workout for my training style. Not just selling — actually guiding.",
    tag: "Verified Customer",
  },
  {
    number: "03",
    name: "Karthik Selvam",
    role: "Gym Trainer",
    location: "Madurai",
    quote: "I recommend all my clients here. Best prices in Madurai, genuine products, and same-day delivery is a game changer. No one else comes close.",
    tag: "Verified Customer",
  },
  {
    number: "04",
    name: "Suriya Prakash",
    role: "Marathon Runner",
    location: "KK Nagar, Madurai",
    quote: "Ordered my whey protein at 4PM and it arrived by 7PM. The speed and packaging were perfect. This is how supplement shopping should feel.",
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
  const sectionRef = useRef(null);
  const bgTextRef = useRef(null);
  const tagRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const statsBarRef = useRef(null);
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
        .from(subtitleRef.current, { y: 25, opacity: 0, duration: 0.6 }, 0.35);

      // ── Stats bar — each stat pops in ─────────────────
      const statItems = statsBarRef.current.querySelectorAll(".testimonials-stat");
      gsap.from(statItems, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: statsBarRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // ── Stat values scale up ──────────────────────────
      const statValues = statsBarRef.current.querySelectorAll(".stat-value");
      gsap.from(statValues, {
        scale: 0.5,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: statsBarRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // ── Testimonial cards stagger ─────────────────────
      const cards = gridRef.current.querySelectorAll(".testimonial-card");
      gsap.from(cards, {
        y: 70,
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

      // ── Quote text reveal — clip wipe ────────────────
      const quotes = gridRef.current.querySelectorAll(".testimonial-quote");
      gsap.from(quotes, {
        clipPath: "inset(0 100% 0 0)",
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // ── Avatars pop in ────────────────────────────────
      const avatars = gridRef.current.querySelectorAll(".testimonial-avatar");
      gsap.from(avatars, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
      });

      // ── Dividers expand ───────────────────────────────
      const dividers = gridRef.current.querySelectorAll(".testimonial-divider");
      gsap.from(dividers, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.5,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="testimonials" ref={sectionRef}>

      <div className="testimonials-bg-text" ref={bgTextRef}>TRUST</div>

      <div className="testimonials-inner">

        <div className="testimonials-header">
          <span className="testimonials-tag" ref={tagRef}>Testimonials & Trust</span>
          <h2 className="testimonials-title" ref={titleRef}>
            Madurai's Athletes
            <span className="testimonials-red"> Speak</span>
          </h2>
          <p className="testimonials-subtitle" ref={subtitleRef}>
            Real customers. Real results. Real trust built over years of
            authentic service across Madurai.
          </p>
        </div>

        <div className="testimonials-stats" ref={statsBarRef}>
          {stats.map((s) => (
            <div className="testimonials-stat" key={s.label}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="testimonials-grid" ref={gridRef}>
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.number}>
              <div className="testimonial-card-top">
                <span className="testimonial-number">{t.number}</span>
                <span className="testimonial-verified">{t.tag}</span>
              </div>
              <blockquote className="testimonial-quote">"{t.quote}"</blockquote>
              <div className="testimonial-divider"></div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.name.charAt(0)}</div>
                <div className="testimonial-info">
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-role">{t.role} · {t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}