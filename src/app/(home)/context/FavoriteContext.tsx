// //@ts-nocheck
// 'use client';

// import { createContext, useContext, useState } from "react";

// const FavoriteContext = createContext();

// export function FavoriteProvider({ children }) {
//   const [favorites, setFavorites] = useState([]);

//   function addFavorite(movie) {
//     // Avoid duplicate entries
//     if (!favorites.some(fav => fav.imdbID === movie.imdbID)) {
//       setFavorites([...favorites, movie]);
//     }
//   }

//   function removeFavorite(imdbID) {
//     setFavorites(favorites.filter(fav => fav.imdbID !== imdbID));
//   }

//   return (
//     <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
//       {children}
//     </FavoriteContext.Provider>
//   );
// }

// export function useFavorite() {
//   const context = useContext(FavoriteContext);
//   if (!context) throw new Error("useFavorite must be used within a FavoriteProvider");
//   return context;
// }
