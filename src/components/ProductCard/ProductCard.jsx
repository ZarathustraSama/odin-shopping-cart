import QuantityInput from "../QuantityInput/QuantityInput";
import IncrementBtn from "../IncrementBtn/IncrementBtn";
import DecrementBtn from "../DecrementBtn/DecrementBtn";

import PropTypes from "prop-types";

import './ProductCard.module.css';

function ProductCard({ product }) {

  return (
    <section>
      <h2>{product.title}</h2>
      <img src={product.image} />
      <QuantityInput></QuantityInput>
      <IncrementBtn></IncrementBtn>
      <DecrementBtn></DecrementBtn>
    </section>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
}

export default ProductCard;