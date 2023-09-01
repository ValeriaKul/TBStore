import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ProductItem from "../../components/ProductItem/ProductItem";
import ProductsFilterBar from "../../components/ProductsFilterBar/ProductsFilterBar";
import { productsResetFilter } from "../../store/reduser/productsReduser";
import s from "./style.module.css";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const { category } = useParams();
  console.log(category);
  const products = useSelector(({ products }) => {
    if (category === undefined) {
      return products;
    } else {
      return products.filter((item) => item.category === category);
    }
  });
  useEffect(() => {
    dispatch(productsResetFilter());
  }, []);

  return (
    <div className={s.page}>
      <div>
      <Header styleComp="pages" />
        <div className={s.wrapper}>
          <ProductsFilterBar />
          <h2>{category ? category : ""}</h2>
        </div>
      </div>
      <div className={s.products_container}>
        <div className={s.container}>
          {products.length !== 0 ? (
            products
              .filter(({ show }) => show)
              .map((elem) => <ProductItem key={elem.id} {...elem} />)
          ) : (
            <div>No items in that category...</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
