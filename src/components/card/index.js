import React, { Component } from 'react';

// style
import './index.scss'


// icon
import driverMale from 'images/driver-male.svg';
import driverFamale from 'images/driver-famale.svg';
import waiter from 'images/waiter.svg';
import waitres from 'images/waitres.svg';
import chefMale from 'images/chef-male.svg';
import chefFamale from 'images/chef-famale.svg';



export default class Card extends Component {
    render() {
        const { employe } = this.props;
        let icon;
        if(employe.gender === 'male') {
            switch(employe.role) {
                case 'driver':
                    icon = driverMale;
                    break;
                case 'waiter':
                    icon = waiter;
                    break;
                case 'cook':
                    icon = chefMale;
                    break;
                default: break;
            }
        } else {
            switch(employe.role) {
                case 'driver':
                    icon = driverFamale;
                    break;
                case 'waiter':
                    icon = waitres;
                    break;
                case 'cook':
                    icon = chefFamale;
                    break;
                default: break;
            }
        }
        return (
            <div className="card">
                <img src={icon} className="card__icon" alt="user-icon" />
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
}