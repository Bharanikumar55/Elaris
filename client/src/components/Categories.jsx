import CategoryCard from "./CategoryCard";
import categories from "../data/categories";

function Categories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-14">
          Browse by Experience
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              icon={category.icon}
              title={category.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;