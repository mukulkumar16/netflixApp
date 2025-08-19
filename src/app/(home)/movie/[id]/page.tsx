// @ts-nocheck
import Image from "next/image";
import Link from "next/link";
import AddToFav from "../../components/AddToFav";

export default async function page({ params }) {
  const id = params.id;

  if (!params?.id) {
    return <div className="text-black p-10">Invalid movie ID</div>;
  }

  const response = await fetch(`https://www.omdbapi.com/?apikey=985d4a31&i=${id}`);
  const res = await response.json();

  return (
    <div className="bg-gray-900 min-h-screen w-full text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8 bg-white text-black shadow-2xl rounded-xl p-6">
          
          {/* Poster Image */}
          <div className="lg:w-1/2 flex justify-center items-center">
            <Image
              src={res.Poster !== "N/A" ? res.Poster : "/no-image.png"}
              alt={res.Title}
              width={300}
              height={450}
              className="rounded-lg shadow-lg object-contain max-h-[450px] w-auto"
            />
          </div>

          {/* Movie Info */}
          <div className="lg:w-1/2 space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">{res.Title}</h1>
            <p className="text-gray-600 text-sm sm:text-base">{res.Plot}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <p><span className="font-semibold">Released:</span> {res.Released}</p>
              <p><span className="font-semibold">Runtime:</span> {res.Runtime}</p>
              <p><span className="font-semibold">Genre:</span> {res.Genre}</p>
              <p><span className="font-semibold">Language:</span> {res.Language}</p>
              <p><span className="font-semibold">Actors:</span> {res.Actors}</p>
              <p><span className="font-semibold">Director:</span> {res.Director}</p>
            </div>

            {res.Ratings?.[0] && (
              <div className="mt-4">
                <span className="bg-yellow-400 text-black px-3 py-1 rounded text-sm font-medium">
                  ⭐ {res.Ratings[0].Source}: {res.Ratings[0].Value}
                </span>
              </div>
            )}

            <div className="mt-6">
              <button className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 transition duration-200">
                ❤️ <AddToFav item={res} />
              </button>
            </div>

            <Link href="/searchresult">
              <button className="block mt-4 text-red-600 underline text-sm">
                ← Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
