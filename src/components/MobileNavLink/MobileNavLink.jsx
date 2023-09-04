import React from 'react'
import s from "./style.module.css";

import { NavLink } from "react-router-dom";

export default function MobileNavLink({count, icon, to, item}) {
    const isActive = ({ isActive }) => [isActive ? s.active : "", s.link].join(' ');

  return (
    <>
    <NavLink  data-count = {count || undefined} id={s.mobile_link} className={isActive} to={to} {...item}>
        {icon}
    </NavLink>
    </>
  )
}
