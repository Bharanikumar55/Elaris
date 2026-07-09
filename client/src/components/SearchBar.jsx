import { useState } from "react";

function SearchBar() {

  const [search, setSearch] = useState("");

  return (
    <section className="py-16 bg-white">

      <div className="max-w-4xl mx-auto">

        <input
          type="text"
          placeholder="🔍 Search mountains, waterfalls..."
          className="w-full p-5 rounded-2xl shadow-lg border border-gray-200 text-lg outline-none focus:ring-2 focus:ring-green-700"

          value={search}

          onChange={(event) => setSearch(event.target.value)}
        />

        <h2 className="mt-8 text-center text-xl">
          Searching for:
          <span className="font-bold text-green-700">
            {" "}
            {search}
          </span>
        </h2>

      </div>

    </section>
  );
}

export default SearchBar;