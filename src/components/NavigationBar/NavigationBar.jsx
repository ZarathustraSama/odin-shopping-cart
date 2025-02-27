import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from './NavigationBar.module.css';

function NavigationBar({ shoppingCart = [], checkout = false }) {

  function countItems(shoppingItems) {
    let count = 0;

    for (let i = 0; i < shoppingItems.length; i++) {
      count += shoppingItems[i].quantity;
    }

    return count;
  }

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.a}>Home</Link>
      <Link to="/shop" className={styles.a}>Shop</Link>
      <span className={styles.span} role="textbox">Your cart currently has {countItems(shoppingCart)} items. </span>
      {checkout ? <button className={styles.button}>Checkout</button> : ""}
    </nav>
  )
}

NavigationBar.propTypes = {
  shoppingCart: PropTypes.array.isRequired,
  checkout: PropTypes.bool.isRequired,
}

export default NavigationBar;