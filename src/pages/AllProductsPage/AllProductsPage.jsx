import React from "react";
import { useSelector } from "react-redux";

import ProductItem from "../../components/ProductItem/ProductItem";

import s from "./style.module.css";

export default function AllProductsPage() {
  const { products } = useSelector((state) => state);

  return (

      <div className={s.container}>
        <h2>All products</h2>
        {products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
  );
}
