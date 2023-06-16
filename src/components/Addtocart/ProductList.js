import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import ProductItem from "./ProductItem";

function ProductList() {
  const { listColor } = useContext(CartContext);
  const [nameIdImg, setNameIdImg] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      const id = Math.floor(Math.random() * 300) + 1;
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
      const res = await fetch(url);
      const data = await res.json();

      const newPokemon = { name: data.name, id: data.id, url: data.sprites.front_default };
      setNameIdImg((prevNameIdImg) => [...prevNameIdImg, newPokemon]);
    };
    for (let i = 0; i < 3; i++) getPokemon();
  }, []);

  return (
    <div className={`product-list ${listColor > 3}`}>
      {nameIdImg.map((item) => (
        <ProductItem key={item.id} name={item.name} link={item.url} />
      ))}
    </div>
  );
}

export default ProductList;

// const arrayofobjects = [
//   { id: 1, name: "HTML" },
//   { id: 2, name: "CSS" },
//   { id: 3, name: "Javascript" },
//   { id: 4, name: "PHP" },
//   { id: 5, name: "SQL" },
// ];

// const objects = {
//   item1: { id: 1, name: "HTML" },
//   item2: { id: 2, name: "CSS" },
//   item3: { id: 3, name: "Javascript" },
//   item4: { id: 4, name: "PHP" },
//   item5: { id: 5, name: "SQL" },
// };

/* {Object.keys(objects).map((key) => (
      <ProductItem key={key} name={objects[key].name} />
    ))} */
