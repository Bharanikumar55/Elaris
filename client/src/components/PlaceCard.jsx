function PlaceCard(props) {

  return (

    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">

      <img
        src={props.image}
        alt={props.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">

        <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
          {props.category}
        </span>

        <h2 className="text-2xl font-bold mt-4">
          {props.title}
        </h2>

        <p className="text-gray-500 mt-2">
          📍 {props.location}
        </p>

        <button className="mt-5 bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition">
          View Story
        </button>

      </div>

    </div>

  );

}

export default PlaceCard;