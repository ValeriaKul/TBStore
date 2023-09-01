import React from 'react'
import Header from '../../components/Header/Header';
import s from './style.module.css';

export default function LoginPage() {
  return (
    <div className={s.page}>
        <Header styleComp="header"/>
        <div className={s.container}>
            <form className={s.form}>
                <p>Enter something about you...</p>
                <input type="text" placeholder=' first name' />
                <input type="text" placeholder=' second name' />
                <input type="date" name="" id="" />
            
                <input type="email" name="" id="" placeholder=' email'/>
                <input type="password" name="" id="" placeholder=' password'/>
                <input type="password" name="" id="" placeholder=' password'/>

                <p>Choose the place of delivery</p>
                <input type="text"placeholder=' country'/>
                <input type="text"placeholder=' city/town'/>
                <input type="text"placeholder=' street'/>
                <input type="text"placeholder=' house'/>
                <input type="text"placeholder=' flat'/>
                <input type="text"placeholder=' index'/>

            </form>
        </div>
    </div>
  )
}
