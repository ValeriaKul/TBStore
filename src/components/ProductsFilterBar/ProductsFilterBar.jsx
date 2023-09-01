import React from "react";
import { useDispatch } from "react-redux";
import {
  productsSearchAction,
  productsSortPriceAction,
  productsSortTitleAction,
} from "../../store/reduser/productsReduser";
import s from "./style.module.css";

export default function ProductsFilterBar() {
  const dispatch = useDispatch();

  const searchOnChange = (event) => {
    dispatch(productsSearchAction(event.target.value));
  };

  const sortPriceOnChange = (event) => {
    dispatch(productsSortPriceAction(event.target.value));
  };

  const sortTitleOnChange = (event) => {
    dispatch(productsSortTitleAction(event.target.value));
  };

  return (
    <div className={s.container}>
      <input
        type="text"
        name="text"
        placeholder="Search"
        onChange={searchOnChange}
      />
      <select name="price" id="select price" onChange={sortPriceOnChange}>
        <option value="">Sort by price: </option>
        <option value="ascend">Ascending price</option>
        <option value="descen">Descending price</option>
      </select>
      <select name="price" id="select price" onChange={sortTitleOnChange}>
        <option value="">Sort by title: </option>
        <option value="ascend">Ascending title</option>
        <option value="descen">Descending title</option>
      </select>
    </div>
  );
}
