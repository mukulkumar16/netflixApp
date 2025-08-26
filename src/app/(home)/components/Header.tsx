import Link from "next/link";
import { logout } from "@/app/action";

export default function Header() {

    
  return (
    
   <header className="flex justify-between items-center  bg-gray-900 shadow-md h-[80px] ">
        <h1 className="text-2xl font-bold text-red-600 p-3"><Link href="/searchresult"><img src="https://img.icons8.com/?size=100&id=20519&format=png&color=000000" alt="" /></Link></h1>

        <div className="flex items-center relative">
            <form action="/search" method="GET">
          <input
            type="text"
            
            placeholder="Search for product"
            name="q"
            required
            className="w-[300px] m-3 md:w-[400px]  text-red-600 rounded-lg px-4 py-2 border bg-[#0000] border-gray-300 focus:outline-none focus:ring-2  focus:ring-red-500"
          />
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-200">
            Search
          </button> 
        
         
          </form>
          
         
        </div>

        <div className="flex items-center gap-4 m-3">
          <button className="text-red-600 font-medium hover:underline" onClick={()=>{
            logout();
          }}><Link href={"/form"}>LogOut</Link></button>
          <div className="relative text-white hover:text-red-600 cursor-pointer">
            <Link href={"/favorites"}>Fav❤️</Link>
            
          </div>
        </div>
        
      </header>
      
  )
}