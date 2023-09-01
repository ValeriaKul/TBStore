import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductItem from "../../components/ProductItem/ProductItem";
import s from "./style.module.css";

export default function CategoryProductsPage() {
  const { category } = useParams();
  const products = useSelector(({ products }) =>
    products.filter((item) => item.category === category)
  );

  return (
    <div>
      <h2>{category}</h2>
      <div className={s.container}>
        {products.map((elem) => (
          <ProductItem key={elem.id} {...elem} />
        ))}
      </div>
    </div>
  );
}
