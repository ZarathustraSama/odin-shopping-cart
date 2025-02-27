import PropTypes from "prop-types";
import { useState } from "react";

import './ProductCard.module.css';


function ProductCard({ product, shoppingCart, addToCartFn }) {
  const [quantity, setQuantity] = useState(0);

  function onChangeInput(e) {
    setQuantity(e.target.value);
  }

  function incrementQuantity() {
    const newValue = parseInt(quantity) + 1;
    setQuantity(newValue);
  }

  function decrementQuantity() {
    if (quantity <= 0) { return };
    
    const newValue = parseInt(quantity) - 1;
    setQuantity(newValue);
  }

  function addToCart() {
    if (quantity <= 0) { return };

    addToCartFn([...shoppingCart, {...product, quantity: quantity}]);
  }

  return (
    <section>
      <h2>{product.title} - {(product.price).toFixed(2)} $</h2>
      <img src={product.image} />
      <br />
      <input className="quantityInput" onChange={onChangeInput} type="number" value={quantity}/>
      <button className="incrementQuantityBtn" onClick={incrementQuantity}>+</button>
      <button className="decrementQuantityBtn" onClick={decrementQuantity}>-</button>
      <button className="addToCartBtn" onClick={addToCart}>Add To Cart</button>
    </section>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  shoppingCart: PropTypes.arrayOf(Object).isRequired,
  addToCartFn: PropTypes.func.isRequired,
}

export default ProductCard;