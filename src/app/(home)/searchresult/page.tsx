//@ts-nocheck
import Card from "../components/Card";
import Carousel from "../components/Carousel";

async function getfetch(type) {
  const res = await fetch(`https://www.omdbapi.com/?apikey=985d4a31&s=${type}`);
  const data = await res.json();
  return data.Search || [];
}

// Utility function → Random 4 movies pick karega
function getRandomMovies(list, count = 5) {
  if (!list || list.length === 0) return [];
  const shuffled = [...list].sort(() => Math.random() - 0.5); // shuffle
  return shuffled.slice(0, count);
}

export default async function page() {
  const trending = await getfetch("hindi");
  const anime = await getfetch("Anime");
  const love = await getfetch("love");
  const family = await getfetch("family");
  const shinchan = await getfetch("Shinchan");
  const english = await getfetch("english");
  const new1 = await getfetch("new");

  return (
    <div className="bg-gray-900 p-4">
      <Carousel trending={love} />

      {/* Hindi Section */}
      <h1 className="bg-gray-900 mt-5 font-bold text-2xl text-amber-50 ml-5">Hindi Movies</h1>
      <div className="flex flex-wrap p-3 bg-gray-900 gap-9 justify-center items-center">
        {getRandomMovies(trending).map((item) => (
          <Card key={item.imdbID} item={item} />
        ))}
      </div>

      {/* Love Section */}
      <h1 className="bg-gray-900 font-bold text-2xl text-amber-50 ml-5">Love</h1>
      <div className="flex flex-wrap p-3 bg-gray-900 gap-9 justify-center items-center">
        {getRandomMovies(love).map((item) => (
          <Card key={item.imdbID} item={item} />
        ))}
      </div>

      {/* English Section */}
      <h1 className="bg-gray-900 font-bold text-2xl text-amber-50 ml-5">English Movies</h1>
      <div className="flex flex-wrap p-3 bg-gray-900 gap-9 justify-center items-center">
        {getRandomMovies(english).map((item) => (
          <Card key={item.imdbID} item={item} />
        ))}
      </div>

      {/* Anime Section */}
      <h1 className="bg-gray-900 font-bold text-2xl text-amber-50 ml-5">Anime</h1>
      <div className="flex flex-wrap p-3 bg-gray-900 gap-9 justify-center items-center">
        {getRandomMovies(anime).map((item) => (
          <Card key={item.imdbID} item={item} />
        ))}
      </div>

      {/* Family Section */}
      <h1 className="bg-gray-900 font-bold text-2xl text-amber-50 ml-5">Family Movies</h1>
      <div className="flex flex-wrap p-3 bg-gray-900 gap-9 justify-center items-center">
        {getRandomMovies(family).map((item) => (
          <Card key={item.imdbID} item={item} />
        ))}
      </div>

      {/* Shinchan Section */}
      <h1 className="bg-gray-900 font-bold text-2xl text-amber-50 ml-5">Shinchan</h1>
      <div className="flex flex-wrap p-3 bg-gray-900 gap-9 justify-center items-center">
        {getRandomMovies(shinchan).map((item) => (
          <Card key={item.imdbID} item={item} />
        ))}
      </div>
    </div>
  );
}
