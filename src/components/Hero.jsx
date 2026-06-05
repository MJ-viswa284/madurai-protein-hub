import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const dividerRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);
  const statsRef = useRef(null);
  const imageRef = useRef(null);
  const bgTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Master timeline on page load ──────────────────
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // BG ghost text fades in slow
      tl.from(bgTextRef.current, {
        opacity: 0,
        scale: 1.08,
        duration: 2,
        ease: "power2.out",
      }, 0);

      // Badge drops in
      tl.from(badgeRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.6,
      }, 0.3);

      // Title lines stagger — each word/line clips up
      tl.from(titleRef.current.children, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power4.out",
      }, 0.5);

      // Subtitle
      tl.from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
      }, 0.9);

      // Divider line expands from 0
      tl.from(dividerRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.5,
      }, 1.0);

      // Desc text
      tl.from(descRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
      }, 1.1);

      // Buttons
      tl.from(buttonsRef.current.children, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
      }, 1.2);

      // Stats bar
      tl.from(statsRef.current.children, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
      }, 1.3);

      // Image slides in from right
      tl.from(imageRef.current, {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }, 0.6);

      // ── Parallax on scroll ────────────────────────────
      gsap.to(bgTextRef.current, {
        y: -120,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(imageRef.current, {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Title parallax — slightly slower
      gsap.to(titleRef.current, {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={sectionRef}>

      <div className="hero-bg-text" ref={bgTextRef}>PROTEIN</div>

      <div className="hero-content">

        <div className="hero-badge" ref={badgeRef}>
          <span className="hero-badge-dot"></span>
          100% Authentic Supplements
        </div>

        <h1 className="hero-title" ref={titleRef}>
          <span>MADURAI</span>
          <span className="hero-title-red">PROTEIN</span>
          <span>HUB</span>
        </h1>

        <p className="hero-subtitle" ref={subtitleRef}>
          Fuel Your Performance
        </p>

        <div className="hero-divider" ref={dividerRef}></div>

        <p className="hero-desc" ref={descRef}>
          Madurai's most trusted destination for{" "}
          <strong>premium supplements</strong>. Authentic brands, expert
          guidance, and results that speak for themselves.
        </p>

        <div className="hero-buttons" ref={buttonsRef}>
          <button className="primary-btn">Explore Products</button>
          <button className="secondary-btn">Visit Store</button>
        </div>

        <div className="hero-stats" ref={statsRef}>
          <div className="hero-stat">
            <h3>50+</h3>
            <span>Top Brands</span>
          </div>
          <div className="hero-stat">
            <h3>100%</h3>
            <span>Authentic</span>
          </div>
          <div className="hero-stat">
            <h3>5K+</h3>
            <span>Customers</span>
          </div>
          <div className="hero-stat">
            <h3>24/7</h3>
            <span>Support</span>
          </div>
        </div>

      </div>

      <div className="hero-image-wrapper" ref={imageRef}>
        <div className="hero-image">
          <div className="hero-image-placeholder">Athlete Photo</div>
          <div className="hero-corner-tl"></div>
          <div className="hero-corner-br"></div>
        </div>
      </div>

    </section>
  );
}