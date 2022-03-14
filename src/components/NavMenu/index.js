import React from 'react'
import s from './NavMenu.module.scss';
import {  Link } from 'react-router-dom';

export const NavMenu = ({props}) => {
    console.log('props: ', props);


    return (
        <main>

        <div className={s.menu}>   
        <ul className={s.ulmenu}>
            <li className={s.limenu}><Link to="/">Главная</Link></li>
            <li className={s.limenu}><Link to="/courses">Уроки</Link></li>
            <li className={s.limenu}><Link to="/about">О нас</Link></li>
        </ul>    
        </div>

        </main>

    )
}
