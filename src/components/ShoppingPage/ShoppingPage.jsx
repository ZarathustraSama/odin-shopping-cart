import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import NavigationBar from "../NavigationBar/NavigationBar";
import ProductCard from "../ProductCard/ProductCard";

import './ShoppingPage.module.css';

function ShoppingPage({ shoppingCart = [] }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(shoppingCart);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
      .then(response => response.json())
      .then(json => setProducts(json))
      .catch(error => console.log(error))
    
  }, [])

  return (
    <>
      <NavigationBar shoppingCart={cart} checkout={true} />
      <main>
        {products.map(product => {
          return <ProductCard key={product.id} product={product} addToCartFn={setCart}></ProductCard>
        })}
      </main>
    </>
  )
}

ShoppingPage.propTypes = {
  shoppingCart: PropTypes.array.isRequired,
}

export default ShoppingPage;