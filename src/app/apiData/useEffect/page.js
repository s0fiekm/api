
"use client";
import { useState, useEffect } from "react";
const Page = () => {
  const [products, setProducts] = useState(undefined);
  useEffect(() => {
    async function fetchProducts() {
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  if (!products) {
    return <div>loading!!</div>;
  }

  return (
    <ul>
      {products.products.map((product) => {
        return <li key={product.id}>{product.category}</li>;
      })}
    </ul>
  );
};

export default Page;
