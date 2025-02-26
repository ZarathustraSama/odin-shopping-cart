import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import './NavigationBar.module.css';

function NavigationBar({ shoppingCart }) {
  const location = useLocation()

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <span>Your cart currently has {shoppingCart.length} items. </span>
      { (location.pathname == "/shop") ? <button className="checkOutBtn">Checkout</button> : "" }
    </nav>
  )
}

NavigationBar.propTypes = {
  shoppingCart: PropTypes.array.isRequired,
}

export default NavigationBar;