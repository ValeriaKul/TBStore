import React from "react";
import { useSelector } from "react-redux";
import BasketCalculation from "../../components/BasketCalculation/BasketCalculation";
import BasketItem from "../../components/BasketItem/BasketItem";
import Header from "../../components/Header/Header";
import s from "./style.module.css";

export default function BasketPage() {
  const { basket, products } = useSelector((state) => state);
  const data = basket.map((item) => {
    const product = products.find(({ id }) => id === item.id);
    return { ...item, ...product };
  });

  return (
    <>
      <Header styleComp="pages" />
      <div className={s.container}>
        {products.length === 0 ? (
          <p>"Is liading..."</p>
        ) : (
          <>
            <div className={s.basket_items}>
              {data.length === 0 ? (
                <div className={s.no_items}>No items in the cart</div>
              ) : (
                data.map((item) => <BasketItem key={item.id} {...item} />)
              )}
            </div>
            {data.length === 0 ? "" : <BasketCalculation />}
          </>
        )}
      </div>
    </>
  );
}
