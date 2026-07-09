function CategoryCard(props) {

  return (

    <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">

      <div className="text-5xl">

        {props.icon}

      </div>

      <h3 className="mt-5 font-bold text-lg">

        {props.title}

      </h3>

    </div>

  );

}

export default CategoryCard;