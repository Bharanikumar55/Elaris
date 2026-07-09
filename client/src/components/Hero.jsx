function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-emerald-100 min-h-[85vh] flex items-center">

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
      
        <div>

          <p className="uppercase tracking-widest text-green-700 font-semibold">
            Explore Beyond Maps
          </p>

          <h1 className="text-6xl font-extrabold text-gray-900 mt-4 leading-tight">

            Discover Hidden Places.

            <br />

            Create Lasting Memories.

          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-8">

            Elaris helps explorers discover breathtaking destinations,
            preserve unforgettable experiences,
            and inspire responsible adventures.

          </p>

          <div className="mt-10 flex gap-5">

            <button className="bg-green-700 text-white px-8 py-4 rounded-xl hover:bg-green-800 transition">

              Start Exploring

            </button>

            <button className="border border-gray-300 px-8 py-4 rounded-xl hover:bg-white">

              Learn More

            </button>

          </div>

        </div>

        <div className="flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900"
            className="rounded-3xl shadow-2xl"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;