import React from "react";
import image from "./girl.png";
import Header from "../../components/Header/Header";
import img1 from "./curlyLine.png";
import img2 from "./arrows.png";
import s from "./style.module.css";

export default function HomePage() {
  const onClick = () => {
    window.location.href = "/products/all";
  };
  return (
    <div className={s.page}>
      <Header styleComp="homepage" />
      <div className={s.container}>
        <div className={s.wripper}>
          <h1 className={s.animated_text}>
            The Best Store To
            Shop Online
            ALL IN ONE
          </h1>
          <div className={s.text_container}>
          <p className={s.text}>
            Welcome to our universal store where you can find everything you
            need. We offer a wide range of products at affordable prices and
            fast delivery. Order from us and enjoy shopping!
          </p>

          </div>
          <button onClick={onClick} className={s.btn_shopNow}>
            Shop Now
          </button>
        </div>
        <img className={s.img_girl} src={image} alt="/" />
      </div>
      <img className={s.img_curlyLine} src={img1} alt="" />
      <img className={s.img_arrows} src={img2} alt="" />
    </div>
  );
}
