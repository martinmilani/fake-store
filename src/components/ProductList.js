import React from "react";
import axios from "axios";

import ProductCard from "./ProductCard";

function ProductList() {
  const baseURL = "https://fakestoreapi.com/products?limit=10";
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProducts(response.data);
    });
  }, []);

  const listProducts = products.map((product, index) => {
    return <ProductCard key={index} product={product} />;
  });

  return (
    <div>
      <ul>{listProducts}</ul>
    </div>
  );
}

export default ProductList;
