import PlaceCard from "./PlaceCard";

function FeaturedPlaces() {
  return (
    <section className="p-10">

      <h2 className="text-3xl font-bold mb-8">
        Featured Places
      </h2>

      <div className="flex gap-6">

        <PlaceCard
          title="Ooty"
          location="Tamil Nadu"
        />

        <PlaceCard
          title="Munnar"
          location="Kerala"
        />

        <PlaceCard
          title="Jog Falls"
          location="Karnataka"
        />

      </div>

    </section>
  );
}

export default FeaturedPlaces;