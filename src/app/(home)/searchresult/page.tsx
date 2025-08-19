// @ts-nocheck

import Card from "../components/Card";

// Fetch movies by keyword
async function getfetch(type) {
  const res = await fetch(`https://www.omdbapi.com/?apikey=985d4a31&s=${type}`);
  const data = await res.json();
  return data.Search || [];
}

// Reusable Section Component
function MovieSection({ title, movies }) {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="mb-10 px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-amber-50 mb-4">
        {title}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center">
        {movies.slice(0, 5).map((item) => (
          <Card key={item.imdbID} item={item} />
        ))}
      </div>
    </div>
  );
}

export default async function page() {
  const [trending, anime, love, family, shinchan, english] = await Promise.all([
    getfetch("hindi"),
    getfetch("Anime"),
    getfetch("love"),
    getfetch("family"),
    getfetch("Shinchan"),
    getfetch("english"),
  ]);

  return (
    <div className="bg-gray-900 min-h-screen py-8">
      <MovieSection title="Hindi Movies" movies={trending} />
      <MovieSection title="Love" movies={love} />
      <MovieSection title="English Movies" movies={english} />
      <MovieSection title="Anime" movies={anime} />
      <MovieSection title="Family Movies" movies={family} />
      <MovieSection title="Shinchan" movies={shinchan} />
    </div>
  );
}
