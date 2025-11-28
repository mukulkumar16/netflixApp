//@ts-nocheck
'use client'
import { useState } from "react"
import { handleSubmit } from "../action";
import { redirect } from "next/navigation";
import Link from "next/link";


export default function FormValidation() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});
    const [msg , setmsg ] = useState("");

    async function validateSubmit(event) {
        event.preventDefault();
        const errorObj = {};

        if (name.length < 5) {
            errorObj.name = "Name must be at least 3 characters";
        }

        if (!email.includes("@")) {
            errorObj.email = "Email invalid";
        }

        if (password.length < 6){
            errorObj.password = "Password length should be minimum of 6";
        }

        setError(errorObj);

        if(errorObj.name || errorObj.email || errorObj.password){
            setError(errorObj);
            return;
        }else{
            const obj = {
                name : name ,
                email : email ,
                password : password
            }
            const res = await handleSubmit(obj)
            if(res?.success){
               setmsg(res.message);
               redirect("/searchresult");
            }else {
               
                setmsg(res.message);
            }
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
            <Link href={"/"}><div className="fixed mt-3 left-6  top-0"><h1 className="text-3xl font-extrabold text-red-500 tracking-wide drop-shadow-[0_0_10px_rgba(255,0,0,0.7)]">
  CineCrush
</h1></div> </Link>
            <form
                onSubmit={validateSubmit}
                className="bg-gray-950 shadow-xl rounded-2xl p-8 w-full max-w-md space-y-6"
            >
                <h2 className="text-2xl font-bold text-gray-100">Log-in </h2>

               

                <div>
                    <label className="block mb-1 text-sm font-semibold text-gray-600">
                        Email
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        className="w-full px-4 py-2 border rounded-xl text-amber-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    {error.email && (
                        <p className="text-red-500 text-sm mt-1">{error.email}</p>
                    )}
                </div>
                <div>
                    <label className="block mb-1 text-sm font-semibold text-gray-600">
                        Password
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="enter password"
                        className="w-full px-4 py-2 text-amber-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    {error.password && (
                        <p className="text-red-500 text-sm mt-1">{error.password}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300"
                >
                    Submit
                </button>
                <div>
                    <Link href={'/signup'}> <p className="text-m text-center mt-0 text-amber-50">Don't  have an account </p> </Link>
                </div>
                 {
                msg && <p className="flex justify-center items-center text-amber-50 font-bold">{msg}</p>
            }
            </form>
           
           
        </div>
    );
}






