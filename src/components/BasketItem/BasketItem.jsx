import React from "react";
import { useDispatch } from "react-redux";
import {
  basketDecrementAction,
  basketDeleteProduct,
  basketIncrementAction,
} from "../../store/reduser/basketReduser";
import { FaTrashAlt } from "react-icons/fa";
import { BiPlus, BiMinus } from "react-icons/bi";
import s from "./style.module.css";

export default function BasketItem({
  thumbnail,
  title,
  price,
  count,
  id,
  discountPercentage,
}) {
  const dispatch = useDispatch();
  const newPrice = price - (price * discountPercentage) / 100;
  return (
    <div className={s.basket_container}>
      <div className={s.img_container}>
      <img className={s.img_item} src={thumbnail} alt={title} />
      </div>
      <div className={s.item_descr}>
        <p className={s.title}>{title}</p>
        <div className={s.wrap}>
          <p className={s.grey_style}>price</p>
          <p>{+newPrice.toFixed(2)} $ </p>
        </div>
        <div  className={s.wrap}>
          <p className={s.grey_style}>number</p>
          <p>{count}</p>
        </div>
        <div  className={s.wrap}>
          <p className={s.grey_style}>Total</p>
          <p className={s.product_amount}>{+(newPrice * count).toFixed(2)} $</p>
        </div>
        <div className={s.filters}>
          <div className={s.wrap}>
            <p className={s.grey_style}>Size</p>
            <select className={s.select_basket} name="size" id="">
              <option value="">M</option>
              <option value="">L</option>
            </select>
          </div>
          <div className={s.wrap}>
            <p className={s.grey_style}> Quantity</p>
            <div className={s.btns}>
              <BiPlus className={s.btn_plus}  onClick={() => dispatch(basketIncrementAction(id))}/>
              <BiMinus  className={s.btn_minus}   onClick={() => dispatch(basketDecrementAction(id))}/>
            </div>
          </div>
        </div>
        <div className={s.wrap}>
          <p className={s.grey_style}>Color</p>
          <div className={s.ring}></div>
        </div>
        <p></p>
          <FaTrashAlt
            className={s.btn}
            onClick={() => dispatch(basketDeleteProduct(id))}
          />
      </div>
    </div>
  );
}
