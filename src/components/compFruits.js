import { useState } from "react";
import "./compFruits.css";

function ShowFruits() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);
  const FilterRedFruits = () => {
    return setFruits(fruits.filter((fruit) => fruit.color === "red"));
  };
  return (
    <div>
      <p>
        Preço Total =
        {fruits.reduce((acc, fruit) => {
          return fruit.price + acc;
        }, 0)}
      </p>
      <ul className="list">
        {fruits.map((fruit) => (
          <li>{fruit.name}</li>
        ))}
      </ul>
      <button className="btn" onClick={FilterRedFruits}>
        Mostrar Apenas Frutas Vermelhas
      </button>
    </div>
  );
}

export default ShowFruits;
