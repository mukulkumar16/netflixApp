// @ts-nocheck

import Card from "../components/Card";
import Footer from "../components/Footer";

export default async function page({ searchParams }) {
  const query = searchParams.q || "trending";

  const res = await fetch(`https://www.omdbapi.com/?apikey=985d4a31&s=${query}`);
  const data = await res.json();
  const search = data.Search;

  return (
    <div className="bg-gray-900 min-h-screen py-8 px-4 sm:px-6 lg:px-10">
      <h1 className="text-white text-2xl sm:text-3xl font-bold mb-6 text-center">
        Showing results for: <span className="text-red-500">{query}</span>
      </h1>

      {search ? (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center">
          {search.map((item) => (
            <Card key={item.imdbID} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-white text-center text-xl mt-10">
          No results found for <span className="text-red-500">{query}</span>
        </div>
      )}

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}
