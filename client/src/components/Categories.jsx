import CategoryCard from "./CategoryCard";

function Categories() {
  return (
    <section className="py-12 bg-green-50">

      <h2 className="text-3xl font-bold text-center mb-10">
        Explore by Category
      </h2>

      <div className="flex flex-wrap justify-center gap-6">

        <CategoryCard
          icon="🏔️"
          title="Mountains"
        />

        <CategoryCard
          icon="🌊"
          title="Lakes"
        />

        <CategoryCard
          icon="🌲"
          title="Forests"
        />

        <CategoryCard
          icon="💧"
          title="Waterfalls"
        />

        <CategoryCard
          icon="🏕️"
          title="Camping"
        />

        <CategoryCard
          icon="🌅"
          title="Sunrise"
        />

      </div>

    </section>
  );
}

export default Categories;