import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const bgTextRef = useRef(null);
  const imagesRef = useRef(null);
  const imgMainRef = useRef(null);
  const imgSecondaryRef = useRef(null);
  const badgeRef = useRef(null);
  const tagRef = useRef(null);
  const titleRef = useRef(null);
  const dividerRef = useRef(null);
  const desc1Ref = useRef(null);
  const desc2Ref = useRef(null);
  const featuresRef = useRef(null);
  const btnRef = useRef(null);

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

      // ── Master reveal timeline ────────────────────────
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power3.out" },
      });

      // Main image slides in from left
      tl.from(imgMainRef.current, {
        x: -80,
        opacity: 0,
        duration: 1,
      }, 0);

      // Secondary image slides in from bottom
      tl.from(imgSecondaryRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.9,
      }, 0.2);

      // Badge pops in
      tl.from(badgeRef.current, {
        scale: 0.5,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
      }, 0.4);

      // Tag line
      tl.from(tagRef.current, {
        x: -30,
        opacity: 0,
        duration: 0.5,
      }, 0.3);

      // Title lines stagger
      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
      }, 0.4);

      // Divider expands from left
      tl.from(dividerRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.5,
      }, 0.6);

      // Desc paragraphs stagger
      tl.from([desc1Ref.current, desc2Ref.current], {
        y: 25,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
      }, 0.7);

      // Feature pills stagger
      tl.from(featuresRef.current.children, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
      }, 0.85);

      // Button
      tl.from(btnRef.current, {
        y: 15,
        opacity: 0,
        duration: 0.5,
      }, 1.05);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about" ref={sectionRef}>

      <div className="about-bg-text" ref={bgTextRef}>ABOUT</div>

      <div className="about-inner">

        {/* Left — Image Stack */}
        <div className="about-images" ref={imagesRef}>
          <div className="about-img-main" ref={imgMainRef}>
            <div className="about-img-placeholder main">
              <p>Store Photo</p>
            </div>
          </div>
          <div className="about-img-secondary" ref={imgSecondaryRef}>
            <div className="about-img-placeholder secondary">
              <p>Interior Photo</p>
            </div>
          </div>
          <div className="about-years-badge" ref={badgeRef}>
            <span className="about-years-num">3+</span>
            <span className="about-years-label">Years of<br />Excellence</span>
          </div>
        </div>

        {/* Right — Content */}
        <div className="about-content">

          <span className="about-tag" ref={tagRef}>Our Story</span>

          <h2 className="about-title" ref={titleRef}>
            Madurai's Most
            <span className="about-title-red"> Trusted</span>
            <br />Supplement Store
          </h2>

          <div className="about-divider" ref={dividerRef}></div>

          <p className="about-desc" ref={desc1Ref}>
            Born in the heart of Madurai, Protein Hub started with one mission —
            to give serious athletes and fitness enthusiasts access to{" "}
            <strong>100% authentic supplements</strong> at honest prices.
          </p>

          <p className="about-desc" ref={desc2Ref}>
            No fakes. No compromise. Every product on our shelf is verified,
            sourced directly from authorized distributors, and backed by our
            personal guarantee.
          </p>

          <div className="about-features" ref={featuresRef}>
            <div className="about-feature">
              <span className="about-feature-icon">✓</span>
              Authorized Distributor
            </div>
            <div className="about-feature">
              <span className="about-feature-icon">✓</span>
              100% Authentic Products
            </div>
            <div className="about-feature">
              <span className="about-feature-icon">✓</span>
              Expert Nutrition Guidance
            </div>
            <div className="about-feature">
              <span className="about-feature-icon">✓</span>
              Madurai's Largest Collection
            </div>
          </div>

          <button className="about-btn" ref={btnRef}>
            Know More About Us
          </button>

        </div>

      </div>

    </section>
  );
}