function SearchBar() {
  return (
    <section className="py-10 flex justify-center">
      <input
        type="text"
        placeholder="🔍 Search beautiful places..."
        className="w-2/3 p-4 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </section>
  );
}

export default SearchBar;