import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./StoreExperience.css";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { number: "01", title: "Premium Display", desc: "Every product wall-to-wall, organized by brand and goal. Easy to browse, easy to choose." },
  { number: "02", title: "Expert Guidance", desc: "Our in-store team gives you real advice — not just a sale. Right stack for your exact goal." },
  { number: "03", title: "100% Authentic", desc: "Zero fakes. Every product sourced from authorized distributors. Scan and verify on the spot." },
  { number: "04", title: "Premium Feel", desc: "Clean, spacious, and built for serious athletes. A store that matches the brand you trust." },
];

export default function StoreExperience() {
  const sectionRef = useRef(null);
  const bgTextRef = useRef(null);
  const tagRef = useRef(null);
  const titleRef = useRef(null);
  const dividerRef = useRef(null);
  const descRef = useRef(null);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);
  const imageWrapRef = useRef(null);
  const imagePlaceholderRef = useRef(null);
  const imageTagRef = useRef(null);

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

      // ── Image parallax — floats up as you scroll ──────
      gsap.to(imagePlaceholderRef.current, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // ── Left content cascade ──────────────────────────
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
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
        }, 0.15)
        .from(dividerRef.current, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.5,
        }, 0.4)
        .from(descRef.current, { y: 25, opacity: 0, duration: 0.6 }, 0.5);

      // ── Feature cards stagger ─────────────────────────
      const featureCards = featuresRef.current.querySelectorAll(".store-feature");
      gsap.from(featureCards, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });

      // ── CTA button ────────────────────────────────────
      gsap.from(ctaRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });

      // ── Image slides in from right ────────────────────
      gsap.from(imageWrapRef.current, {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          toggleActions: "play none none none",
        },
      });

      // ── Image stat badge pops in ──────────────────────
      gsap.from(imageTagRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          toggleActions: "play none none none",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="store" ref={sectionRef}>

      <div className="store-bg-text" ref={bgTextRef}>STORE</div>

      <div className="store-inner">

        <div className="store-content">
          <span className="store-tag" ref={tagRef}>Store Experience</span>
          <h2 className="store-title" ref={titleRef}>
            <span>More Than A</span>
            <span className="store-red">Supplement Store</span>
          </h2>
          <div className="store-divider" ref={dividerRef}></div>
          <p className="store-desc" ref={descRef}>
            Step into a premium fitness destination built for serious athletes,
            gym enthusiasts, and anyone committed to better performance.
            Walk in and feel the difference.
          </p>
          <div className="store-features" ref={featuresRef}>
            {features.map((f) => (
              <div className="store-feature" key={f.number}>
                <div className="store-feature-top">
                  <span className="store-feature-number">{f.number}</span>
                  <span className="store-feature-title">{f.title}</span>
                </div>
                <p className="store-feature-desc">{f.desc}</p>
                <div className="store-feature-line"></div>
              </div>
            ))}
          </div>
          <a href="https://maps.google.com" className="store-cta" target="_blank" rel="noreferrer" ref={ctaRef}>
            Get Directions →
          </a>
        </div>

        <div className="store-image-wrap" ref={imageWrapRef}>
          <div className="store-image-placeholder" ref={imagePlaceholderRef}>
            <span>Store Interior Photo</span>
          </div>
          <div className="store-image-tag" ref={imageTagRef}>
            <span className="store-image-tag-value">5000+</span>
            <span className="store-image-tag-label">Happy Customers</span>
          </div>
        </div>

      </div>
    </section>
  );
}