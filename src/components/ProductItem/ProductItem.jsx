import React from "react";
import { Link } from "react-router-dom";
import RatingStars from "../RatingStars/RatingStars";
import s from "./style.module.css";

export default function ProductItem({ thumbnail, title, id, price, rating, discountPercentage }) {
  const link = `/product/${id}`;
  const newPrice = price - (price * discountPercentage) / 100;

  return (
    <div className={s.product}>
      <Link to={link}>
        <img className={s.img_item} src={thumbnail} alt={title} />
        <div className={s.description}>
          <div className={s.rating}>
            <RatingStars />
            <p>{rating}</p>
          </div>
          <p className={s.title}>{title}</p>
          <div className={s.price_container}>
            <p className={s.new_price}>{newPrice.toFixed(2)} $</p>
            <p className={s.old_price}>{price} $</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
