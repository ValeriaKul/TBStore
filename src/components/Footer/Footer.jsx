import React from "react";
import Logo from "../Logo/Logo";
import s from "./style.module.css";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <div className={s.footer}>
      <div className={["logo", "item"].join(" ")}>
        <Logo />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
      </div>
      <div className={["contact_us", "item"].join(" ")}>
        <p className={s.title}>Contact Us</p>
        <a href="mailto:tbshop@gmail.com">Email: tbshop@gmail.com</a>
        <a href="tel:+380953043434">Phone: + 38 (095) 304-34-34</a>
        <p>WhatsApp: + 38 (095) 304-34-34</p>
      </div>
      <div className={["follow_us", "item"].join(" ")}>
        <p className={s.title}>Follow Us</p>
        <div className={s.icons}>
          <a className={s.icon_link} href="http://facebook.com">
            <BsFacebook />
          </a>
          <a className={s.icon_link} href="http://twitter.com">
            <FaTwitter />
          </a>
          <a className={s.icon_link} href="http://instagram.com">
            <FiInstagram />
          </a>
        </div>
        <form className={s.btn_submit}>
          <input id="input" type="email" placeholder=" Enter your email" />
          <button className={s.btn}>submit</button>
        </form>
      </div>
    </div>
  );
}
