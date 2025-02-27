import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import './NavigationBar.module.css';

function NavigationBar({ shoppingCart = [], checkout = false }) {

  function countItems(shoppingItems) {
    let count = 0;

    console.log(shoppingItems)
    for (let i = 0; i < shoppingItems.length; i++) {
      console.log("Here")
      count += shoppingItems[i].quantity;
      
    }
    console.log(count)
    return count;
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <span>Your cart currently has {countItems(shoppingCart)} items. </span>
      {checkout ? <button className="checkoutBtn">Checkout</button> : ""}
    </nav>
  )
}

NavigationBar.propTypes = {
  shoppingCart: PropTypes.array.isRequired,
  checkout: PropTypes.bool.isRequired,
}

export default NavigationBar;