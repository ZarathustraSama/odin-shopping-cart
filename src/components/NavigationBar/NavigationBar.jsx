import { Link } from "react-router-dom";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutBtn from "../CheckoutBtn/CheckoutBtn";

import './NavigationBar.module.css';

export default function NavigationBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <ShoppingCart></ShoppingCart>
      <CheckoutBtn></CheckoutBtn>
    </nav>
  )
}