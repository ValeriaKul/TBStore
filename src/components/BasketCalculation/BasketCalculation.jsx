import React from "react";
import s from "./style.module.css";
import { basketClearAction } from "../../store/reduser/basketReduser";
import { useDispatch, useSelector } from "react-redux";
import img1 from "./cashwise.png";
import img2 from "./jcb.png";
import img3 from "./mastercard.png";
import img4 from "./mastre.png";
import img5 from "./paypal.png";
import img6 from "./tamara.png";
import img7 from "./visa.png";

export default function BasketCalculation() {
  const dispatch = useDispatch();
  const { basket, products } = useSelector((state) => state);

  const data = basket.map((item) => {
    const product = products.find(({ id }) => id === item.id);
    return { ...item, ...product };
  });

  const accetpPayments = [
    { id: 1, img: img1, title: "image" },
    { id: 2, img: img2, title: "image" },
    { id: 3, img: img3, title: "image" },
    { id: 4, img: img4, title: "image" },
    { id: 5, img: img5, title: "image" },
    { id: 6, img: img6, title: "image" },
    { id: 7, img: img7, title: "image" },
  ];

  return (
    <div className={s.container}>
      <div className={s.delivery_container}>
        <p className={s.delivery_title}>Delivery country</p>
        <div className={s.selection}>
          <select className={s.select} name="country">
            <option value="">Selection</option>
            <option value="">USA</option>
            <option value="">CANADA</option>
            <option value="">EUROPE</option>
          </select>
        </div>
      </div>
      <p>
        Total products:{" "}
        <b>{data.reduce((a, { count }) => a + count, 0)} items </b>
      </p>
      <p>
        TOTAL PRICE: <b>{(data.reduce((a, b) => a + (b.price - (b.price * b.discountPercentage) / 100) * b.count, 0).toFixed(2))} $</b>
      </p>
      <div className={s.btn_checkout}>
        <p>CHECKOUT</p>
      </div>
      <p>Aviable payment systems:</p>
      <div className={s.accept_imgs}>
        {accetpPayments.map((img) => (
          <img
            className={s.img_accept_item}
            key={img.id}
            src={img.img}
            alt={img.title}
          />
        ))}
      </div>
      <button
        onClick={() => dispatch(basketClearAction())}
        className={s.btn_checkout}
      >
        CLEAR BASKET
      </button>
    </div>
  );
}
