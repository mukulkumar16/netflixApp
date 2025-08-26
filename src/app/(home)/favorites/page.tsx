'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Optional: Define a type for movie items
interface MovieItem {
  imdbID: string;
  Title: string;
  Poster: string;
}

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<MovieItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('fav');
    const parsed: MovieItem[] = stored ? JSON.parse(stored) : [];
    setFavorites(parsed);
  }, []);

  const removeFromFavorites = (id: string) => {
    const updated = favorites.filter(item => item.imdbID !== id);
    localStorage.setItem('fav', JSON.stringify(updated));
    setFavorites(updated);
  };

  return (
    <div className="bg-gray-900 min-h-screen w-full p-6">
  {favorites.length === 0 ? (
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="text-white text-2xl text-center font-semibold">
        Your favorites list is empty
        <br />
        Start watching now!
      </h1>
      <Link href="/searchresult">
        <button className="mt-8 bg-red-600 text-white px-6 py-2 rounded-full text-lg hover:bg-red-700 transition duration-200">
          Watch Now
        </button>
      </Link>
    </div>
  ) : (
    <div className="flex flex-wrap justify-center gap-8 mt-10">
      {favorites.map((item) => (
        <div
          key={item.imdbID}
          className="w-[300px] bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
        >
          <Link href={`/movie/${item.imdbID}`}>
            <div className="h-[280px] bg-gray-100 flex items-center justify-center overflow-hidden rounded-t-2xl">
              <Image
                src={item.Poster}
                alt={item.Title}
                width={260}
                height={260}
                className="object-contain transition duration-300 hover:scale-105"
              />
            </div>
          </Link>

          <div className="p-4">
            <h2 className="text-center text-lg font-bold text-gray-900 mb-2">
              {item.Title}
            </h2>

            <div className="flex justify-center">
              <button
                onClick={() => removeFromFavorites(item.imdbID)}
                className="bg-red-500 text-white px-4 py-1.5 rounded-full hover:bg-red-600 transition text-sm font-medium"
              >
                ❌ Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )}
</div>

  );
}