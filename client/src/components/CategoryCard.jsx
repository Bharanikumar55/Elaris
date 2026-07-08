function CategoryCard(props) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-40 text-center hover:shadow-xl transition">

      <div className="text-4xl">
        {props.icon}
      </div>

      <h3 className="mt-3 font-semibold">
        {props.title}
      </h3>

    </div>
  );
}

export default CategoryCard;