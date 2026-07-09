import PlaceCard from "./PlaceCard";

function FeaturedPlaces() {

  const places = [

    {
      title: "Ooty",
      location: "Tamil Nadu",
      category: "Mountains",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900",
    },

    {
      title: "Munnar",
      location: "Kerala",
      category: "Tea Gardens",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900",
    },

    {
      title: "Jog Falls",
      location: "Karnataka",
      category: "Waterfalls",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900",
    },

  ];

  return (

    <section className="bg-stone-50 py-20">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center mb-14">
          Trending Escapes
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {places.map((place) => (

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