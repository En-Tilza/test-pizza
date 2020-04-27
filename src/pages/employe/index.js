import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputMask from 'react-input-mask';

import './index.scss';

import Container from 'components/container';
import PageSection from 'components/page-section';
import PageTitle from 'components/page-title';
import Dropdown from 'components/dropdown';
import Checkbox from 'components/checkbox';

class Employee extends Component {
    constructor(props) {
        super(props);

        this.dropdownName = this.dropdownName.bind(this);
        this.userUpdate = this.userUpdate.bind(this);
    }
    dropdownName(text, target) {
        target.querySelector('.custom-select-header__option').innerText = text
    }
    translete(role) {
        switch(role) {
            case 'driver':
                return 'Водитель';
            case 'waiter':
                return 'Официант';
            case 'cook':
                return 'Повар';
            default:
                return 'ошибка';
        }
    }
    async userUpdate(event) {
        event.preventDefault();
        let data = new FormData(event.target);
        data.append('userId', this.props.store.employee.id)

        let response = await fetch('api/employees.json', {
            method: 'PUT',
            body: data
        }).then(response => response.json());
        console.log(response)
    }
    render() {
        const { employee } = this.props.store;

        let role = this.translete(employee.role);


        return(
            <PageSection>
                <Container>
                    <PageTitle>Редактировать сотрудника</PageTitle>


                    {employee ?
                        <form className="edit-form" onSubmit={this.userUpdate}>
                            <div className="edit-form__row">
                                <div className="field">
                                    <p className="field__name">Имя</p>
                                    <input name="employee-name" type="text" className="field__input" placeholder={employee.name} />
                                </div>
                                <div className="field">
                                    <p className="field__name">Должность</p>
                                    <Dropdown values={['Водитель', 'Повар', 'Официант']} name={role} func={this.dropdownName} />
                                </div>
                            </div>
                            <div className="edit-form__row">
                                <div className="field">
                                    <p className="field__name">Телефон</p>
                                    <InputMask name="employee-phone" className="field__input" mask="+7 (999) 999-99-99" placeholder={employee.phone} />
                                </div>
                                <div className="field">
                                    <p className="field__name">Дата рождения</p>
                                    <input name="employee-birthday" type="date" className="field__input" placeholder={employee.birthday} />
                                </div>
                            </div>
                            <div className="edit-form__row">
                                <div className="field field--center">
                                    <Checkbox name="archive" checked={employee.isArchive}>В архиве</Checkbox>
                                </div>
                            </div>
                            <div className="edit-form__row">
                                <div className="field field--center">
                                    <input type="submit" className="field__submit" value="Сохранить" />
                                </div>
                            </div>
                        </form>
                    : null}
                </Container>
            </PageSection>
        )
    }
}

function getId() {
    let params = window.location.search.replace('?', '').split('&');
    let value = '';
    params.forEach(el => {
        let param = el.split('=');
        if( param[0] === 'id' ) {
            value = param[1];
        }
    })
    return value;
}

function getEmployeeById(id, arr) {
    let obj = {};
    if( arr ) {
        for(const [index, key] of Object.entries(arr)) {
            if( key.id === id && index ) {
                obj = key
                return obj
            }
        }
    }
    return obj
}

function mapStateToProps(state) {
    let employee

    if( state.employees ) employee = getEmployeeById( +getId(), state.employees.employees )
    return {
        store: {
            employee
        }
    }
}

export default connect(mapStateToProps)(Employee)