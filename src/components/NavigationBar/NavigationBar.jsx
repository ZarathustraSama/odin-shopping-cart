import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CheckoutBtn from "../CheckoutBtn/CheckoutBtn";

import './NavigationBar.module.css';

function NavigationBar({ shoppingCart }) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <span>Your cart currently have {shoppingCart.length} items. </span>
      <CheckoutBtn></CheckoutBtn>
    </nav>
  )
}

NavigationBar.propTypes = {
  shoppingCart: PropTypes.array.isRequired,
}

export default NavigationBar;