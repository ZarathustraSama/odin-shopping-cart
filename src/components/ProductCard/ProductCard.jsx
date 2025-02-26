import PropTypes from "prop-types";
import { useState } from "react";

import './ProductCard.module.css';


function ProductCard({ product, addToCartFn }) {
  const [quantity, setQuantity] = useState(0);

  function onChangeInput(e) {
    setQuantity(e.target.value);
  }

  function incrementQuantity() {
    const newValue = quantity + 1;
    setQuantity(newValue);
  }

  function decrementQuantity() {
    if (quantity <= 0) { return };
    
    const newValue = quantity - 1;
    setQuantity(newValue);
  }

  function addToCart() {
    const newProduct = {...product, quantity: quantity};

    addToCartFn(newProduct);
  }

  return (
    <section>
      <h2>{product.title}</h2>
      <img src={product.image} />
      <p>The price is {product.price}</p>
      <input className="quantityInput" onChange={onChangeInput} type="number"></input>
      <button className="incrementQuantityBtn" onClick={incrementQuantity}>+</button>
      <button className="decrementQuantityBtn" onClick={decrementQuantity}>-</button>
      <button className="addToCartBtn" onClick={addToCart}>Add To Cart</button>
    </section>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  addToCartFn: PropTypes.func.isRequired,
}

export default ProductCard;