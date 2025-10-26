// @ts-nocheck
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Carousel({ trending = [] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % trending.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [trending]);

  if (!trending || trending.length === 0) return null;

  return (
    <div className="relative w-full h-[450px] md:h-[500px] overflow-hidden bg-black">
      {trending.map((movie, index) => (
        <div
          key={movie.imdbID}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <Image
            src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
            alt={movie.Title}
            fill
            priority
            className="object-cover opacity-30 scale-105"
          />

          {/* Foreground layout */}
          <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-16 text-center md:text-left space-y-4 md:space-y-0">
            
            {/* Left Image (moves on top in mobile) */}
            <div className="flex-shrink-0 mb-3 md:mb-0">
              <Image
                src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
                alt={movie.Title}
                width={250}
                height={350}
                className="rounded-lg shadow-2xl w-[180px] h-auto sm:w-[220px] md:w-[300px]"
              />
            </div>

            {/* Right Title / Info */}
            <div className="md:ml-8 max-w-xs sm:max-w-md md:max-w-lg">
              <h2 className="text-white text-xl sm:text-2xl md:text-4xl font-bold drop-shadow-lg leading-tight">
                {movie.Title}
              </h2>
              <a
                href={`/movie/${movie.imdbID}`}
                className="inline-block mt-4 bg-red-600 hover:bg-red-700 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-semibold transition"
              >
                Play Now
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
