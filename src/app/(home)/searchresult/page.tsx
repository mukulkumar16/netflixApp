//@ts-nocheck

import Card from "../components/Card";

 async function getfetch(type) {

        const res = await fetch(`https://www.omdbapi.com/?apikey=985d4a31&s=${type}`);
        const data = await res.json();
        const search = data.Search;
        return search;
        
    }

export default async function page(){
   

    const trending = await getfetch("hindi");
    const anime = await getfetch("Anime");
    const love =  await getfetch("love");
    const family = await getfetch("family");
    const shinchan = await getfetch("Shinchan");
    const english = await getfetch("english");


   
    return(
        <div className="bg-gray-900">
        <h1 className="bg-gray-900 font-bold text-2xl text-amber-50 ml-5">Hindi Movies</h1>
 
       <div className="flex flex-wrap p-3 bg-gray-900 gap-9 justify-center items-center">

            {   trending.slice(0,4).map(function(item){
             return <Card key={item.imdbID} item={item}/>
            })}
        </div>
         <h1 className="bg-gray-900 font-bold text-2xl text-amber-50 ml-5">Love</h1>
 
       <div className="flex flex-wrap p-3 bg-gray-900 gap-9 justify-center items-center">

            {   love.slice(0,4).map(function(item){
             return <Card key={item.imdbID} item={item}/>
            })}
        </div>
         <h1 className="bg-gray-900 font-bold text-2xl text-amber-50 ml-5">English Movies</h1>
 
       <div className="flex flex-wrap p-3 bg-gray-900 gap-9 justify-center items-center">

            {   english.slice(0,4).map(function(item){
             return <Card key={item.imdbID} item={item}/>
            })}
        </div>
            <h1 className="bg-gray-900 font-bold text-2xl text-amber-50 ml-5">Anime</h1>
 
       <div className="flex flex-wrap p-3 bg-gray-900 gap-9 justify-center items-center">

            {   anime.slice(0,4).map(function(item){
             return <Card key={item.imdbID} item={item}/>
            })}
        </div>
          <h1 className="bg-gray-900 font-bold text-2xl text-amber-50 ml-5">Family Movies</h1>
 
       <div className="flex flex-wrap p-3 bg-gray-900 gap-9 justify-center items-center">

            {   family.slice(0,4).map(function(item){
             return <Card key={item.imdbID} item={item}/>
            })}
        </div>
         <h1 className="bg-gray-900 font-bold text-2xl text-amber-50 ml-5">Shinchan</h1>
 
       <div className="flex flex-wrap p-3 bg-gray-900 gap-9 justify-center items-center">

            {   shinchan.slice(0,4).map(function(item){
             return <Card key={item.imdbID} item={item}/>
            })}
        </div>
            
           
        </div>
    )
}