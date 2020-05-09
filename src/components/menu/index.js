import React from 'react';

import './index.scss';


export default function Menu() {
    return(
        <ul className="menu">
            <li className="menu__item">
                <a href="/" className="menu__link">Главная</a>
            </li>
            <li className="menu__item">
                <a href="/employees" className="menu__link">Сотрудники</a>
            </li>
        </ul>
    )
}