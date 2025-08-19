import Link from "next/link";
import { logout } from "@/app/action";

export default function Header() {
  return (
    <header className="bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-red-600">
          <Link href="/searchresult">
            <img
              src="https://img.icons8.com/?size=100&id=20519&format=png&color=000000"
              alt="logo"
              className="w-10 h-10 object-contain"
            />
          </Link>
        </h1>

        {/* Search Bar */}
        <div className="w-full max-w-md">
          <form action="/search" method="GET" className="flex">
            <input
              type="text"
              name="q"
              placeholder="Search for product"
              required
              className="flex-grow text-red-600 rounded-l-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 bg-transparent"
            />
            <button className="bg-red-600 text-white px-4 py-2 rounded-r-lg hover:bg-red-700 transition duration-200">
              Search
            </button>
          </form>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button
            className="text-red-600 font-medium hover:underline"
            onClick={() => logout()}
          >
            <Link href="/form">LogOut</Link>
          </button>
          <Link
            href="/favorites"
            className="text-white hover:text-red-600 text-sm"
          >
            Fav❤️
          </Link>
        </div>
      </div>
    </header>
  );
}
