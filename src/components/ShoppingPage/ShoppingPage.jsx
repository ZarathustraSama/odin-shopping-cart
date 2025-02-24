import { useEffect, useState } from "react";

import NavigationBar from "../NavigationBar/NavigationBar";
import ProductCard from "../ProductCard/ProductCard";

import './ShoppingPage.module.css';

export default function ShoppingPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
      .then(response => response.json())
      .then(json => setProducts(json))
      .catch(error => console.log(error))
    
  }, [])

  return (
    <>
      <NavigationBar></NavigationBar>
      <main>
        {products.map(product => {
          return <ProductCard key={product.id} product={product}></ProductCard>
        })}
      </main>
    </>
  )
}