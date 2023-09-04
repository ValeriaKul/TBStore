import React from "react";
import { useSelector } from "react-redux";
import CustNavLink from "../CustNavLink/CustNavLink";
import Logo from "../Logo/Logo";
import s from "./style.module.css";
import img from "./squares.png";
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineManageSearch } from 'react-icons/md';
import { BiCategory, BiCart } from 'react-icons/bi';
import MobileNavLink from "../MobileNavLink/MobileNavLink";
import { NavLink } from "react-router-dom";

export default function Header({ styleComp }) {
  const { basket, products } = useSelector((state) => state);

  const data = basket.map((item) => {
    const product = products.find(({ id }) => id === item.id);
    return { ...item, ...product };
  });

  const totalCount = data.reduce((a, { count }) => a + count, 0);

  const links = [
    { id: 1, label: "Home", to: "/", icon: <AiOutlineHome/> },
    { id: 2, label: "All Products", to: "/products/all", icon: <MdOutlineManageSearch/> },
    { id: 3, label: "Categories", to: "/categories", icon: <BiCategory/> },
    { id: 4, label: "Cart", to: "/cart", count: totalCount, icon: <BiCart/> },
  ];

  const styleContainer = [s.header, styleComp].join(" ");

  return (
    <div className={styleContainer}>
      <div className={s.desktop_navigation}>
      <Logo/>
      <nav className={s.nav}>
        {links.map(({ id, label, ...item }) => (
          <CustNavLink key={id} label={label} {...item} />
        ))}
      </nav>
      </div>
      <div className={s.mobile_navigation}>
        <nav className={s.menu}>
          {links.map(({ id, icon, to, ...item }) => (
            <MobileNavLink key={id} icon={icon} to={to} {...item} />
          ))}
        </nav>
      </div>
      <img className={s.img_squares} src={img} alt="..." />
    </div>
  );
}
