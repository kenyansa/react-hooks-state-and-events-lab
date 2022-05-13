import React, {useState} from "react";


function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);
  function handleClick(){
    setIsInCart(!isInCart)
  }
  return (
    <li className={isInCart ? "in-cart": ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? "remove" : "add"} onClick={handleClick}>{isInCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
