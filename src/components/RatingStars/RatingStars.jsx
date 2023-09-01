import React from 'react'
import s from "./style.module.css";
import { BsFillStarFill } from 'react-icons/bs';


export default function RatingStars() {
  return (
    <div className={s.stars}>
        <BsFillStarFill/>
    </div>
  )
}
