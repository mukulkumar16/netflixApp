// @ts-nocheck
import Image from "next/image";
import Link from "next/link";

export default function Card({ item }) {
  return (
    <Link
      href={`/movie/${item.imdbID}`}
      className="group block w-full sm:w-[48%] md:w-[31%] lg:w-[23%] mx-auto"
    >
      <div className="w-full h-full rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border border-gray-200">

        <div className="relative aspect-[3/4] w-full bg-gray-100 flex items-center justify-center">
          {item.Poster !== "N/A" ? (
            <Image
              src={item.Poster}
              alt={item.Title}
              fill
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="text-gray-500 text-center p-4">
              <span className="text-sm">No Image Available</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        </div>

        <div className="p-4 z-20 relative bg-white">
          <h2 className="text-sm md:text-base font-semibold text-gray-800 truncate">
            {item.Title}
          </h2>
          <p className="text-xs text-gray-500 mt-1">Year: {item.Year}</p>
        </div>
      </div>
    </Link>
  );
}
