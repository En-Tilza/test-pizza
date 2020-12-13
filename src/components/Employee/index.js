import React from 'react';


import './index.scss';

const Employee = ({ employee }) => {
    if( JSON.stringify(employee) === JSON.stringify({}) ) return false;

    let blockAttribute = {};
    if( employee.isArchive ) {
        blockAttribute.className = 'card archive';
        blockAttribute.style = {display: 'none'};
    } else {
        blockAttribute.className = 'card';
    }

    return (
        <div {...blockAttribute}>
            <img src={employee.icon} className="card__icon" alt="user-icon" />
            <div className="card__row">
                <span className="card__role">{employee.role}</span>
            </div>
            <div className="card__row">
                <a href={'/employee?id='+employee.id} className="card__name">{employee.name}</a>
            </div>
            <div className="card__row">
                <a href={'tel:'+employee.phone} className="card__phone">{employee.phone}</a>
                <span className="card__birthday">{employee.birthday}</span>
            </div>
        </div>
    )
}

export default Employee;