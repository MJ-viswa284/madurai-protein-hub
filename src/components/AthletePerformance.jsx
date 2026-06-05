import "./AthletePerformance.css";

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
  return (
    <section className="athlete">

      <div className="athlete-bg-text">PERFORM</div>

      {/* Top accent line */}
      <div className="athlete-accent-line"></div>

      <div className="athlete-inner">

        {/* Header */}
        <div className="athlete-header">

          <div className="athlete-header-left">
            <span className="athlete-tag">Athlete Performance</span>
            <h2 className="athlete-title">
              Fuel Every
              <br />
              <span className="athlete-title-red">Goal.</span>
            </h2>
          </div>

          <div className="athlete-header-right">
            <p className="athlete-desc">
              Whether you're lifting heavy, shredding fat, or running long —
              we have the exact supplement stack for your discipline.
              No generic plans. Fuel built for your goal.
            </p>
            <div className="athlete-header-stats">
              {performanceStats.map((s) => (
                <div className="athlete-header-stat" key={s.label}>
                  <span className="athlete-header-stat-value">{s.value}</span>
                  <span className="athlete-header-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Athlete Cards */}
        <div className="athlete-cards">
          {athletes.map((a, i) => (
            <div className={`athlete-card ${i === 1 ? "athlete-card--featured" : ""}`} key={a.number}>

              {i === 1 && (
                <div className="athlete-featured-badge">Most Popular Stack</div>
              )}

              <div className="athlete-card-header">
                <span className="athlete-card-number">{a.number}</span>
                <span className="athlete-card-discipline">{a.discipline}</span>
              </div>

              {/* Big stat */}
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