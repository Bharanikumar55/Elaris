function PlaceCard(props) {
  return (
    <div className="border rounded-lg p-4 shadow-md w-72">

      <h2 className="text-xl font-bold">
        {props.title}
      </h2>

      <p className="text-gray-600">
        {props.location}
      </p>

    </div>
  );
}

export default PlaceCard;