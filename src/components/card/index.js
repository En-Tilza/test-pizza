import React from 'react';

import './index.scss'

export default function Card(props) {
    const { employe } = props;

    return (
        <div className="card">
            <img src={employe.icon} className="card__icon" alt="user-icon" />
            <div className="card__row">
                <span className="card__role">{employe.role}</span>
            </div>
            <div className="card__row">
                <a href={'/employee?id='+employe.id} className="card__name">{employe.name}</a>
            </div>
            <div className="card__row">
                <a href={'tel:'+employe.phone} className="card__phone">{employe.phone}</a>
                <span className="card__birthday">{employe.birthday}</span>
            </div>
        </div>
    )
}