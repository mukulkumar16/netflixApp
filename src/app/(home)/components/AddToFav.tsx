//@ts-nocheck
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
    <div>
      <button onClick={hancdleclick}>
        {added ? "Fav" : "Add to Fav"}
      </button>
    </div>
  );
}
