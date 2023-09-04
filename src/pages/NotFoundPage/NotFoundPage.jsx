import React from "react";
import Header from "../../components/Header/Header";
import s from "./style.module.css";
import img1 from "./curlyLine.png";
import img2 from "./arrows.png";
import img3 from "./squares.png";

export default function NotFoundPage() {
  return (
    <div className={s.page}>
      <Header styleComp="homepage" />
      <div className={s.container}>
        <h1 className={s.animated_h1}>Page is not found</h1>
        <p className={s.animated_text}>404</p>
        <p className={s.text}>Please, come back</p>
        <img className={s.img_curlyLine} src={img1} alt="" />
        <img className={s.img_arrows} src={img2} alt="" />
        <img className={s.img_squares1} src={img3} alt="" />{" "}
        <img className={s.img_squares2} src={img3} alt="" />
        <img className={s.img_squares3} src={img3} alt="" />
        <img className={s.img_squares4} src={img3} alt="" />

      </div>
    </div>
  );
}
