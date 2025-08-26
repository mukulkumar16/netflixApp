//@ts-nocheck
// 'use client'

import Image from "next/image";
import Link from "next/link";
import { handleEmail } from "./action";

export default async function page() {

  const res = await fetch("http://www.omdbapi.com/?apikey=985d4a31&s=iron");
  const data = await res.json();
  const search =data.Search;
  // console.log(data);

  // async function handleemil(e) {
  //   e.preventDefault();
  //   const Email = email;
  //   const res = await handleEmail(Email);

  //  if(res){
  //   return alert(res);
  //  }
  //  else {
  //   return alert("error !!!! ");
  //  }

 
    
  // }
 
  return (
    <div>
      {/* <header >
        
      </header> */}

  <div className=" relative flex justify-center h-[100%] w-[100%] items-center">
   
    <Image
      src={"https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg"}
      alt={"pic"}
      // aria-hidden="true"
      className="w-full h-[100vh]"
      height={100}
      width={500}
    

    />
     

    <div className="absolute bg-[#000000b0] flex flex-col justify-center items-center   h-[100vh] w-[100vw] text-white text-3xl ">
     <div className="fixed mt-0 left-6 shadow-2xl top-0"><img src="https://img.icons8.com/?size=100&id=20519&format=png&color=000000" alt="" /></div> 
     <Link href={"/form"}><button className="fixed  right-9 bg-red-600 text-amber-50 p-3 border-red-700 rounded-lg shadow-2xl top-4 text-[20px]">Log-in</button></Link>
    <div className="w-[80%] flex justify-center items-center  font-bold flex-col">
      <h1 className="mb-4">Unlimited movies, TV Shows and more </h1>
    <p className="text-[20px] font-medium">Starts at ₹149. Cancel at any time.</p>
    <p className="text-[20px]   font-medium">Ready to watch? Enter your email to create or restart your membership.</p>

    </div>
    <form action={handleEmail}>
    <div className=" flex m-3 gap-3 mt-10 ">
      <input type="text" required className="border border-red-700 rounded-lg  bg-[#0000] p-3 text-[18px] w-[500px] text-amber-50" name="email" placeholder="Enter your email to start " />
      <button className="bg-red-600 p-3 border border-red-800 rounded-lg" type="submit" >Get Started  {">"}</button>
      
    </div>
    </form>
    </div>
    </div>
 
</div>

   
  )
}
