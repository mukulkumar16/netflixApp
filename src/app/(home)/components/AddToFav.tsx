// @ts-nocheck
'use client'

import { useEffect, useState } from "react";

export default function AddToFav({ item }) {
  const [added, setadded] = useState(false);
  const [incart, setincart] = useState(false);

  useEffect(() => {
    const name = JSON.parse(localStorage.getItem('fav') || '[]');
    const previtem = name.find(elem => elem.id === item.imdbID);
    if (previtem) setincart(true);
  }, [item.imdbID]);

  function hancdleclick() {
    setadded(true);
    let name = JSON.parse(localStorage.getItem('fav') || '[]');
    const previtem = name.find(elem => elem.id === item.imdbID);

    if (previtem) {
      previtem.quantity = previtem.quantity + 1;
    } else {
      const itemtoadd = {
        ...item,
        quantity: 1
      };
      name.push(itemtoadd);
      setincart(true);
    }

    localStorage.setItem('fav', JSON.stringify(name));
  }

  return (
    <div className="flex justify-center">
      <button
        onClick={hancdleclick}
        className={`px-4 py-2 rounded-lg text-white font-semibold transition duration-300 
          ${added ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}
          text-sm sm:text-base`}
      >
        {added ? "Fav" : "Add to Fav"}
      </button>
    </div>
  );
}
