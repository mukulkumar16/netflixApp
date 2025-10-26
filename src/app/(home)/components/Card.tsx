// @ts-nocheck
import Image from "next/image";
import Link from "next/link";

export default function Card({ item }) {
  return (
    <Link href={`/movie/${item.imdbID}`} className="group block">
      <div className="relative w-[220px] h-[330px] mx-auto rounded-xl overflow-hidden bg-gray-900 shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
        
        {/* Poster */}
        {item.Poster !== "N/A" ? (
          <Image
            src={item.Poster}
            alt={item.Title}
            fill
            priority
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-800 text-gray-400">
            <span className="text-sm">No Image</span>
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

        {/* Title + Year */}
        <div className="absolute bottom-0 left-0 right-0 p-3 z-20">
          <h2 className="text-sm sm:text-base font-bold text-white truncate">
            {item.Title}
          </h2>
          <p className="text-xs text-gray-300">Year: {item.Year}</p>
        </div>
      </div>
    </Link>
  );
}
