import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AthletePerformance.css";

gsap.registerPlugin(ScrollTrigger);

const athletes = [
  {
    number: "01",
    name: "The Lifter",
    discipline: "Powerlifting",
    stat: "320KG",
    statLabel: "Total Lift",
    fuel: "Whey Protein + Creatine",
    desc: "Raw power needs raw fuel. Our creatine and whey stack is built for athletes who train heavy and recover harder.",
  },
  {
    number: "02",
    name: "The Shredder",
    discipline: "Physique Athlete",
    stat: "8%",
    statLabel: "Body Fat",
    fuel: "Fat Burner + BCAA",
    desc: "Cutting season demands precision nutrition. Clean fat burners and BCAAs to preserve muscle while burning the rest.",
  },
  {
    number: "03",
    name: "The Endurance King",
    discipline: "Marathon Runner",
    stat: "42KM",
    statLabel: "Full Distance",
    desc: "Long distance needs sustained energy. Pre-workout and electrolytes to keep you moving when others stop.",
    fuel: "Pre Workout + Electrolytes",
  },
];

const performanceStats = [
  { value: "50+", label: "Brands Available" },
  { value: "100%", label: "Authentic Products" },
  { value: "5000+", label: "Athletes Fueled" },
];

export default function AthletePerformance() {
  const sectionRef = useRef(null);
  const bgTextRef = useRef(null);
  const accentLineRef = useRef(null);
  const tagRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const statsRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // BG parallax
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

      // Accent line shoots across from left
      gsap.from(accentLineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Header left — title slams in
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power3.out" },
      });

      headerTl
        .from(tagRef.current, { x: -40, opacity: 0, duration: 0.6 }, 0)
        .from(titleRef.current.children, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
        }, 0.2)
        .from(descRef.current, { x: 40, opacity: 0, duration: 0.7 }, 0.3)
        .from(statsRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
        }, 0.5);

      // Cards — stagger with scale
      const cards = cardsRef.current.querySelectorAll(".athlete-card");

      gsap.from(cards, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });

      // Big stat values — count-up visual feel
      const statValues = cardsRef.current.querySelectorAll(".athlete-card-stat-value");
      gsap.from(statValues, {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Fuel boxes slide up last
      const fuelBoxes = cardsRef.current.querySelectorAll(".athlete-card-fuel");
      gsap.from(fuelBoxes, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="athlete" ref={sectionRef}>

      <div className="athlete-bg-text" ref={bgTextRef}>PERFORM</div>
      <div className="athlete-accent-line" ref={accentLineRef}></div>

      <div className="athlete-inner">

        <div className="athlete-header">
          <div className="athlete-header-left">
            <span className="athlete-tag" ref={tagRef}>Athlete Performance</span>
            <h2 className="athlete-title" ref={titleRef}>
              <span>Fuel Every</span>
              <span className="athlete-title-red">Goal.</span>
            </h2>
          </div>
          <div className="athlete-header-right">
            <p className="athlete-desc" ref={descRef}>
              Whether you're lifting heavy, shredding fat, or running long —
              we have the exact supplement stack for your discipline.
              No generic plans. Fuel built for your goal.
            </p>
            <div className="athlete-header-stats" ref={statsRef}>
              {performanceStats.map((s) => (
                <div className="athlete-header-stat" key={s.label}>
                  <span className="athlete-header-stat-value">{s.value}</span>
                  <span className="athlete-header-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="athlete-cards" ref={cardsRef}>
          {athletes.map((a, i) => (
            <div className={`athlete-card ${i === 1 ? "athlete-card--featured" : ""}`} key={a.number}>
              {i === 1 && (
                <div className="athlete-featured-badge">Most Popular Stack</div>
              )}
              <div className="athlete-card-header">
                <span className="athlete-card-number">{a.number}</span>
                <span className="athlete-card-discipline">{a.discipline}</span>
              </div>
              <div className="athlete-card-stat">
                <span className="athlete-card-stat-value">{a.stat}</span>
                <span className="athlete-card-stat-label">{a.statLabel}</span>
              </div>
              <h3 className="athlete-card-name">{a.name}</h3>
              <p className="athlete-card-desc">{a.desc}</p>
              <div className="athlete-card-fuel">
                <span className="athlete-card-fuel-label">Recommended Stack</span>
                <span className="athlete-card-fuel-value">{a.fuel}</span>
              </div>
              <div className="athlete-card-line"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}