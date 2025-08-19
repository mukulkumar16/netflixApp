// @ts-nocheck
import Image from "next/image";
import Link from "next/link";
import { handleEmail } from "./action";

export default async function page() {
  const res = await fetch("http://www.omdbapi.com/?apikey=985d4a31&s=iron");
  const data = await res.json();
  const search = data.Search;

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      <div className="absolute inset-0 bg-black/70 z-10 flex flex-col items-center justify-center text-white px-4 py-8">
       
        <div className="absolute top-4 left-4">
          <img
            src="https://img.icons8.com/?size=100&id=20519&format=png&color=000000"
            alt="logo"
            className="w-12 h-12"
          />
        </div>

        <Link href="/form">
          <button className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
            Log in
          </button>
        </Link>

        <div className="max-w-3xl text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Unlimited movies, TV Shows and more
          </h1>
          <p className="text-lg md:text-xl mb-2">Starts at ₹149. Cancel anytime.</p>
          <p className="text-md md:text-lg">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
        </div>

      
        <form action={handleEmail} className="w-full max-w-xl mt-8 px-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-md bg-transparent border border-red-600 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md font-semibold text-white transition duration-300"
            >
              Get Started &gt;
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
