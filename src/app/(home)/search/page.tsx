//@ts-nocheck

import Card from "../components/Card";
import Footer from "../components/Footer";

export default async function page({searchParams}) {
    const query = searchParams.q || "trending";

  const res = await fetch(`http://www.omdbapi.com/?apikey=985d4a31&s=${query}`);
  const data = await res.json();
  const search = data.Search;
  // console.log(search)
  return (
    search && 
     <div className="flex flex-wrap p-3 bg-gray-800 gap-9 justify-center items-center">
          {search.map(function(item){
      return <Card key={item.imdbID} item={item}/>
     })}

     
        </div>


  )
}