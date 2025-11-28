import Link from "next/link";
import { logout } from "@/app/action";

export default function Header() {
  return (
    <header className="bg-gray-900 shadow-md w-full">
      {/* ---------------- Desktop Header ---------------- */}
      <div className="hidden sm:flex justify-between items-center h-[80px] px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-red-600">
          <Link href="/searchresult">
            <h1 className="text-3xl font-extrabold text-red-500 tracking-wide drop-shadow-[0_0_10px_rgba(255,0,0,0.7)]">
              CineCrush
            </h1>
          </Link>
        </h1>

        {/* Search Bar */}
        <form
          action="/search"
          method="GET"
          className="flex items-center"
        >
          <input
            type="text"
            placeholder="Search for product"
            name="q"
            required
            className="w-[400px] text-red-600 rounded-lg px-4 py-2 border bg-transparent border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button className="ml-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-200">
            Search
          </button>
        </form>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button
            className="text-red-600 font-medium hover:underline"
            onClick={() => logout()}
          >
            <Link href="/form">LogOut</Link>
          </button>
          <div className="text-white hover:text-red-600 cursor-pointer">
            <Link href="/favorites">Fav❤️</Link>
          </div>
        </div>
      </div>

      {/* ---------------- Mobile Header ---------------- */}
      <div className="flex sm:hidden flex-col items-center justify-center py-3 px-4 space-y-3">
        {/* Logo + Buttons (Top) */}
        <div className="flex justify-between items-center w-full">
          <Link href="/searchresult">
            <img
              src="https://img.icons8.com/?size=100&id=20519&format=png&color=000000"
              alt="logo"
              className="w-10 h-10"
            />
          </Link>
          <div className="flex items-center gap-3">
            <button
              className="text-red-600 font-medium hover:underline text-sm"
              onClick={() => logout()}
            >
              <Link href="/form">LogOut</Link>
            </button>
            <div className="text-white hover:text-red-600 text-sm cursor-pointer">
              <Link href="/favorites">Fav❤️</Link>
            </div>
          </div>
        </div>

        {/* Search Bar (Bottom) */}
        <form
          action="/search"
          method="GET"
          className="flex w-full items-center"
        >
          <input
            type="text"
            placeholder="Search for product"
            name="q"
            required
            className="flex-1 text-red-600 rounded-lg px-3 py-2 border bg-transparent border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
          <button className="ml-2 bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition duration-200 text-sm">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}
