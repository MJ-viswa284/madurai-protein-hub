import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Categories.css";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { name: "Whey Protein", desc: "Fast-absorbing protein for muscle repair and growth after every session.", tag: "Best Seller" },
  { name: "Mass Gainer", desc: "High-calorie formula for serious size and strength gains.", tag: "Bulk Season" },
  { name: "Creatine", desc: "Proven strength booster. More power, more reps, more results.", tag: "Most Popular" },
  { name: "Pre Workout", desc: "Explosive energy and laser focus to dominate every training session.", tag: "High Energy" },
  { name: "Fat Burner", desc: "Thermogenic formula to accelerate fat loss while preserving muscle.", tag: "Cut Season" },
  { name: "Vitamins", desc: "Daily micronutrient support for recovery, immunity, and peak performance.", tag: "Daily Essentials" },
];

export default function Categories() {
  const sectionRef = useRef(null);
  const bgTextRef = useRef(null);
  const tagRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // BG text parallax
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

      // Header reveal
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

      // Cards stagger from bottom
      const cards = gridRef.current.querySelectorAll(".category-card");
      gsap.from(cards, {
        y: 80,
        opacity: 0,
        duration: 0.7,
        stagger: { amount: 0.5, from: "start" },
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });

      // Numbers scale pop
      const numbers = gridRef.current.querySelectorAll(".category-number");
      gsap.from(numbers, {
        scale: 1.4,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });

      // Lines expand
      const lines = gridRef.current.querySelectorAll(".category-line");
      gsap.from(lines, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.5,
        stagger: 0.08,
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
    <section className="categories" ref={sectionRef}>
      <div className="categories-bg-text" ref={bgTextRef}>FUEL</div>
      <div className="categories-inner">
        <div className="categories-header">
          <span className="categories-tag" ref={tagRef}>Product Categories</span>
          <h2 className="categories-title" ref={titleRef}>
            Find The Right<span className="categories-red"> Fuel</span>
          </h2>
          <p className="categories-desc" ref={descRef}>
            Premium supplements for every fitness goal. Authentic brands trusted by athletes across Madurai.
          </p>
        </div>
        <div className="categories-grid" ref={gridRef}>
          {categories.map((item, index) => (
            <div className="category-card" key={item.name}>
              <div className="category-card-top">
                <span className="category-number">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <span className="category-badge">{item.tag}</span>
              </div>
              <h3 className="category-name">{item.name}</h3>
              <p className="category-desc">{item.desc}</p>
              <div className="category-line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}