import PlaceCard from "./PlaceCard";
import featuredPlaces from "../data/featuredPlaces";

function FeaturedPlaces() {
  return (
    <section className="bg-stone-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-14">
          Trending Escapes
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredPlaces.map((place) => (
            <PlaceCard
              key={place.title}
              title={place.title}
              location={place.location}
              category={place.category}
              image={place.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedPlaces;