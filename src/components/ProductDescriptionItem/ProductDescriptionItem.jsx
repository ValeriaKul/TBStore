import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { basketAddProductAction } from "../../store/reduser/basketReduser";
import RatingStars from "../RatingStars/RatingStars";
import { ImPriceTag } from "react-icons/im";
import s from "./style.module.css";

export default function ProductDescriptionItem({
  id,
  title,
  description,
  price,
  rating,
  category,
  discountPercentage,
  brand,
  images,
}) {
  const dispatch = useDispatch();
  const [imgIndex, setImgIndex] = useState(0);
  const newPrice = price - (price * discountPercentage) / 100;
  return (
    <div className={s.container}>
      <div className={s.img_container}>
        <img className={s.img} src={images[imgIndex]} alt={title} />
        <div className={s.img_slidebar}>
          {images.map((image, index) => (
            <img
              key={index}
              className={imgIndex === index ? s.active : ''}
              src={image}
              alt={title}
              onClick={() => setImgIndex(index)}
            />
          ))}
        </div>
      </div>
      <div className={s.descr_item}>
        <p className={s.title}>{title}</p>
        <div className={s.rating_and_price}>
          <div className={s.rating}>
            <RatingStars />
            <p>{rating}</p>
          </div>
          <p className={s.old_price}>{price} $</p>
        </div>
        <p>
          {" "}
          <b>Category:</b> {category}
        </p>
        <p className={s.description}>
          <b>Description:</b> {description}
        </p>
        <p className={s.description}>
          <b>Brand:</b> {brand}
        </p>
        <div className={s.price_and_btn}>
          <div className={s.price_container}>
            <ImPriceTag />
            <p className={s.price}> {newPrice.toFixed(2)} $</p>
          </div>

          <button
            onClick={() => dispatch(basketAddProductAction(id))}
            className={s.btn_add}
          >
            Add to basket
          </button>
        </div>
      </div>
    </div>
  );
}
