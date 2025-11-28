"use client";
import Image from "next/image";
import Link from "next/link";
import { handleEmail } from "./action";

export default async function Page() {
  const res = await fetch("http://www.omdbapi.com/?apikey=985d4a31&s=iron");
  const data = await res.json();
  const search = data.Search;

  return (
    <div className="relative flex justify-center items-center w-full h-screen">
      {/* Background Image */}
      <Image
        src={
          "https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg"
        }
        alt="background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 flex flex-col items-center text-white text-center px-4 md:px-12">
        {/* Navbar */}
        <div className="w-full flex justify-between items-center py-5 px-3 md:px-10 fixed top-0 left-0 bg-gradient-to-b from-black/80 to-transparent z-50">
         <h1 className="text-3xl font-extrabold text-red-500 tracking-wide drop-shadow-[0_0_10px_rgba(255,0,0,0.7)]">
  CineCrush
</h1>

          <Link href={"/form"}>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 md:px-6 md:py-3 rounded-md text-[16px] shadow-lg">
              Log In
            </button>
          </Link>
        </div>

        {/* Center Content */}
        <div className="flex flex-col justify-center items-center text-center h-full mt-24 md:mt-0 max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Unlimited movies, TV shows and more
          </h1>
          <p className="text-lg md:text-xl mt-4 font-medium">
            Starts at ₹149. Cancel anytime.
          </p>
          <p className="text-lg md:text-xl mt-2 font-medium">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          {/* Email Form */}
          <form
            action={handleEmail}
            className="flex flex-row flex-wrap justify-center items-center gap-3 mt-8 w-full max-w-[600px]"
          >
            <input
              type="email"
              required
              name="email"
              placeholder="Enter your email"
              className="flex-1 min-w-[200px] p-3 md:p-4 rounded-md text-[16px] md:text-[18px] border border-gray-400 bg-black/50 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 px-5 py-3 md:px-6 md:py-4 rounded-md font-semibold text-[16px] md:text-[18px] shadow-lg transition-all duration-200"
            >
              Get Started &gt;
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
