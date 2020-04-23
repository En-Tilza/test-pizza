import React, { Component } from 'react';

// style
import './menu.scss';


export default class Menu extends Component {
    render() {
        return(
            <ul className="menu">
                <li className="menu__item">
                    <a href="/" className="menu__link">Home</a>
                </li>
                <li className="menu__item">
                    <a href="/employees" className="menu__link">Employees</a>
                </li>
            </ul>
        )
    }
}