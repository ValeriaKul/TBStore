import React from 'react'
import s from './style.module.css';
import { SlBasket } from 'react-icons/sl';
export default function Logo() {
  return (
    <div className={s.logo_container}>
       <span className={s.span_logo}> <SlBasket /> </span>
        <h1 className={s.logo_title}>TBStore</h1>
    </div>
  )
}
