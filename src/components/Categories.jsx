import "./Categories.css";

const categories = [
  "Whey Protein",
  "Mass Gainer",
  "Creatine",
  "Pre Workout",
  "Fat Burner",
  "Vitamins",
];

export default function Categories() {
  return (
    <section className="categories">

      <div className="categories-bg-text">
        CATEGORIES
      </div>

      <div className="categories-inner">

        <span className="categories-tag">
          Product Categories
        </span>

        <h2 className="categories-title">
          Find The Right
          <span className="categories-red"> Fuel</span>
        </h2>

        <p className="categories-desc">
          Premium supplements for every fitness goal.
          Authentic brands trusted by athletes across Madurai.
        </p>

        <div className="categories-grid">

          {categories.map((item, index) => (
            <div className="category-card" key={item}>

              <span className="category-number">
                {(index + 1).toString().padStart(2, "0")}
              </span>

              <h3>{item}</h3>

              <div className="category-line"></div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}