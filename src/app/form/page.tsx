// @ts-nocheck
'use client';
import { useState } from "react";
import { handleSubmit } from "../action";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function FormValidation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [msg, setmsg] = useState("");

  async function validateSubmit(event) {
    event.preventDefault();
    const errorObj = {};

    if (name.length < 3) {
      errorObj.name = "Name must be at least 3 characters";
    }

    if (!email.includes("@")) {
      errorObj.email = "Email is invalid";
    }

    if (password.length < 6) {
      errorObj.password = "Password must be at least 6 characters";
    }

    setError(errorObj);

    if (Object.keys(errorObj).length > 0) {
      return;
    }

    const obj = { name, email, password };
    const res = await handleSubmit(obj);

    if (res?.success) {
      setmsg(res.message);
      redirect("/searchresult");
    } else {
      setmsg(res.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 py-8">
      <Link href="/">
        <div className="absolute top-4 left-4">
          <img
            src="https://img.icons8.com/?size=100&id=20519&format=png&color=000000"
            alt="Back"
            className="w-8 sm:w-10 md:w-12"
          />
        </div>
      </Link>

      <form
        onSubmit={validateSubmit}
        className="bg-gray-950 shadow-2xl rounded-2xl p-6 sm:p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-100 text-center">Log In</h2>

        {/* Name */}
        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-400">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-xl bg-gray-800 text-amber-50 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          {error.name && (
            <p className="text-red-500 text-sm mt-1">{error.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-400">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="w-full px-4 py-2 border rounded-xl bg-gray-800 text-amber-50 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          {error.email && (
            <p className="text-red-500 text-sm mt-1">{error.email}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-400">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full px-4 py-2 border rounded-xl bg-gray-800 text-amber-50 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          {error.password && (
            <p className="text-red-500 text-sm mt-1">{error.password}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300"
        >
          Submit
        </button>

        {/* Message */}
        {msg && (
          <p className="text-center text-amber-50 font-semibold">{msg}</p>
        )}
      </form>
    </div>
  );
}
