function Card({ title, description }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-80 hover:scale-105 transition duration-300">
      <h3 className="text-2xl font-semibold text-green-900 mb-3">
        {title}
      </h3>

      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}

export default Card;