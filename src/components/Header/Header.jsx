import React from "react";
import { useSelector } from "react-redux";
import CustNavLink from "../CustNavLink/CustNavLink";
import Logo from "../Logo/Logo";
import s from "./style.module.css";
import img from "./squares.png";

export default function Header({ styleComp }) {
  const { basket, products } = useSelector((state) => state);

  const data = basket.map((item) => {
    const product = products.find(({ id }) => id === item.id);
    return { ...item, ...product };
  });

  const totalCount = data.reduce((a, { count }) => a + count, 0);

  const links = [
    { id: 1, label: "Home", to: "/" },
    { id: 2, label: "All Products", to: "/products/all" },
    { id: 3, label: "Categories", to: "/categories" },
    { id: 4, label: "Cart", to: "/cart", count: totalCount },
  ];

  const styleContainer = [s.header, styleComp].join(" ");

  return (
    <div className={styleContainer}>
      <Logo />
      <nav className={s.nav}>
        {links.map(({ id, label, ...item }) => (
          <CustNavLink key={id} label={label} {...item} />
        ))}
      </nav>
      <img className={s.img_squares} src={img} alt="..." />
      {/* <div className={s.burger_menu}>
        <nav className={s.menu}>
          {links.map(({ id, label, ...item }) => (
            <CustNavLink key={id} label={label} {...item} />
          ))}
        </nav>
      </div> */}
    </div>
  );
}
