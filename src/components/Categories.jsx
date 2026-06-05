import "./Categories.css";

const categories = [
  {
    name: "Whey Protein",
    desc: "Fast-absorbing protein for muscle repair and growth after every session.",
    tag: "Best Seller",
  },
  {
    name: "Mass Gainer",
    desc: "High-calorie formula for serious size and strength gains.",
    tag: "Bulk Season",
  },
  {
    name: "Creatine",
    desc: "Proven strength booster. More power, more reps, more results.",
    tag: "Most Popular",
  },
  {
    name: "Pre Workout",
    desc: "Explosive energy and laser focus to dominate every training session.",
    tag: "High Energy",
  },
  {
    name: "Fat Burner",
    desc: "Thermogenic formula to accelerate fat loss while preserving muscle.",
    tag: "Cut Season",
  },
  {
    name: "Vitamins",
    desc: "Daily micronutrient support for recovery, immunity, and peak performance.",
    tag: "Daily Essentials",
  },
];

export default function Categories() {
  return (
    <section className="categories">

      <div className="categories-bg-text">FUEL</div>

      <div className="categories-inner">

        <div className="categories-header">
          <span className="categories-tag">Product Categories</span>
          <h2 className="categories-title">
            Find The Right
            <span className="categories-red"> Fuel</span>
          </h2>
          <p className="categories-desc">
            Premium supplements for every fitness goal.
            Authentic brands trusted by athletes across Madurai.
          </p>
        </div>

        <div className="categories-grid">
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