import React from "react";
import s from "./style.module.css";

export default function LogIn() {
  const onClick = () => {
    window.location.href = "/login";
  };
  return (
    <button className={s.btn_login} onClick={onClick}>
      LogIn
    </button>
  );
}
