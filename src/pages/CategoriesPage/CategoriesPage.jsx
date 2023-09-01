import React from "react";
import { useSelector } from "react-redux";
import CategoryItem from "../../components/CategoryItem/CategoryItem";
import Header from "../../components/Header/Header";
import s from "./style.module.css";

export default function CategoriesPage() {
  const categories = useSelector((state) => state.categories);

  return (
    <div className={s.page}>
      <Header styleComp='pages'/>
      <h2 className={s.par}>The Best shop for the Best things</h2>
      <p className={s.text}>Discount on all types of goods</p>
      <div className={s.container}>
        {categories.map((item) => (
          <div key={item}>
            <CategoryItem key={item} label={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
