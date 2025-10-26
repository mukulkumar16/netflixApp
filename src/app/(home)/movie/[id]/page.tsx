// @ts-nocheck
import Image from "next/image";
import Link from "next/link";
import AddToFav from "../../components/AddToFav";

export default async function Page({ params }) {
  const id = params.id;

  if (!params?.id) {
    return <div className="text-white p-10">Invalid movie ID</div>;
  }

  const response = await fetch(
    `https://www.omdbapi.com/?apikey=985d4a31&i=${id}`
  );
  const res = await response.json();

  return (
    <div className="relative bg-gray-900 min-h-screen w-full text-white">
      {/* Blurred background poster */}
      {res.Poster !== "N/A" && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={res.Poster}
            alt="bg"
            fill
            className="object-cover opacity-20 blur-2xl"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      )}

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row gap-10 bg-white/10 backdrop-blur-md text-white shadow-2xl rounded-xl p-6 border border-gray-700">
          
          {/* Poster */}
          <div className="md:w-1/3 flex justify-center">
            <Image
              src={res.Poster !== "N/A" ? res.Poster : "/no-image.png"}
              alt={res.Title}
              width={300}
              height={450}
              className="rounded-lg shadow-xl object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:w-2/3 space-y-5">
            <h1 className="text-4xl font-extrabold">{res.Title}</h1>
            <p className="text-sm text-gray-200 leading-relaxed">{res.Plot}</p>

            {/* Details */}
            <div className="flex flex-wrap gap-2 text-xs mt-2">
              <span className="bg-red-600/90 px-3 py-1 rounded-full">
                {res.Runtime}
              </span>
              <span className="bg-blue-600/90 px-3 py-1 rounded-full">
                {res.Genre}
              </span>
              <span className="bg-green-600/90 px-3 py-1 rounded-full">
                {res.Language}
              </span>
              <span className="bg-purple-600/90 px-3 py-1 rounded-full">
                {res.Released}
              </span>
            </div>

            {/* Actors + Director */}
            <div className="text-sm text-gray-300">
              <p>
                <span className="font-semibold">Actors:</span> {res.Actors}
              </p>
              <p>
                <span className="font-semibold">Director:</span> {res.Director}
              </p>
            </div>

            {/* Ratings */}
            {res.Ratings?.[0] && (
              <div className="mt-4">
                <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                  ⭐ {res.Ratings[0].Source}: {res.Ratings[0].Value}
                </span>
              </div>
            )}

            {/* Fav Button */}
            <div className="mt-6">
              <div className="flex w-[150px] items-center gap-2 bg-red-600 hover:bg-red-700 transition px-5 py-2 rounded-lg font-semibold">
                ❤️ <AddToFav item={res} />
              </div>
            </div>

            {/* Back Button */}
            <Link href="/searchresult">
              <button className="flex items-center gap-1 mt-6 text-sm text-gray-300 hover:text-white transition">
                ← Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
