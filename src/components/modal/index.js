import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addEmployees } from 'store/employees/actions';

import './index.scss';

import InputMask from 'react-input-mask';
import Dropdown from 'components/dropdown';
import Checkbox from 'components/checkbox';


class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            fieldsError: {
                name: false,
                role: false,
                phone: false,
                birthday: false,
                gender: false
            }
        }
    }

    openModal = () => {
        this.setState({
            modal: true
        })
        document.body.classList.add('opened');
    }

    closeModal = () => {
        this.setState({
            modal: false
        })
        document.body.classList.remove('opened');
    }

    addNewEmployee = event => {
        event.preventDefault();
        const { employees } = this.props.employees
        const form = document.querySelector('.add-employee-form')

        const newEmployee = {
            id: employees.length + 1,
            name: form.querySelector('[name=employee-name]').value,
            isArchive: form.querySelector('[name=archive]').checked,
            role: form.querySelector('[name=employee-role]').value,
            phone: form.querySelector('[name=employee-phone]').value,
            birthday: form.querySelector('[name=employee-birthday]').value,
            gender: form.querySelector('[name=employee-gender]').value
        }

        const error = this.checkForErrors(newEmployee);
        if( error ) return;

        this.translete(newEmployee);

        this.addIcon(newEmployee);

        const newArr = [
            ...employees,
            newEmployee
        ]

        this.props.addEmployees(newArr);

        this.closeModal();
    }

    checkForErrors(newEmployee) {
        let newState = {
            name: false,
            role: false,
            phone: false,
            birthday: false,
            gender: false
        }

        let isError = false;

        for (let [key, value] of Object.entries(newEmployee)) {
            if( value === '' ) {
                newState[key] = true;
                isError = true;
            }
        }

        this.setState({
            fieldsError: {
                ...newState
            }
        });

        return isError;
    }

    translete(newEmployee) {
        if( newEmployee.gender === 'Мужчина' ) newEmployee.gender = 'mele';
        if( newEmployee.gender === 'Женщина' ) newEmployee.gender = 'famele';

        if( newEmployee.role === 'Повар' ) newEmployee.role = 'cook';
        if( newEmployee.role === 'Курьер' ) newEmployee.role = 'driver';
        if( newEmployee.role === 'Официант' ) newEmployee.role = 'waiter';
    }

    addIcon(newEmployee) {
        if( newEmployee.gender === 'mele' ) {
            if( newEmployee.role === 'cook' ) newEmployee.icon = "images/chef-male.svg";
            if( newEmployee.role === 'driver' ) newEmployee.icon = "images/driver-male.svg";
            if( newEmployee.role === 'waiter' ) newEmployee.icon = "images/waiter.svg";
        } else {
            if( newEmployee.role === 'cook' ) newEmployee.icon = "images/chef-famale.svg";
            if( newEmployee.role === 'driver' ) newEmployee.icon = "images/driver-famale.svg";
            if( newEmployee.role === 'waiter' ) newEmployee.icon = "images/waitres.svg";
        }
    }

    render() {
        const classModal = this.state.modal ? 'modal active' : 'modal';
        const { fieldsError } = this.state;
        return(
            <>
                <button type="button" className="add-new-employee" onClick={this.openModal}>Добавить нового</button>
                <div className={classModal}>
                    <div className="modal__wrapper">
                        <div className="modal__content">
                            <button type="button" className="modal-close" onClick={this.closeModal}>
                                <svg viewBox="0 0 329.26933 329" xmlns="http://www.w3.org/2000/svg"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>
                            </button>
                            <p className="modal__title">Добавить сотрудника</p>
                            <form className="add-employee-form">
                                <div className={fieldsError.name ? "error add-employee-form__row" : "add-employee-form__row"}>
                                    <label className="field">
                                        <p className="field__title">Имя</p>
                                        <input name="employee-name" type="text" className="field__input" />
                                    </label>
                                </div>
                                <div className={fieldsError.role ? "error add-employee-form__row" : "add-employee-form__row"}>
                                    <Dropdown values={['Повар', 'Курьер', 'Официант']} name={'Должность'} inputName="employee-role" />
                                </div>
                                <div className={fieldsError.phone ? "error add-employee-form__row" : "add-employee-form__row"}>
                                    <label className="field">
                                        <p className="field__title">Телефон</p>
                                        <InputMask name="employee-phone" className="field__input" mask="+7 (999) 999-99-99" />
                                    </label>
                                </div>
                                <div className={fieldsError.birthday ? "error add-employee-form__row" : "add-employee-form__row"}>
                                    <label className="field">
                                        <p className="field__name">Дата рождения</p>
                                        <input name="employee-birthday" type="date" className="field__input" />
                                    </label>
                                </div>
                                <div className={fieldsError.gender ? "error add-employee-form__row" : "add-employee-form__row"}>
                                    <Dropdown values={['Мужчина', 'Женщина']} name={'Пол'} inputName="employee-gender" />
                                </div>
                                <div className="add-employee-form__row">
                                    <Checkbox name="archive" checked>В архиве</Checkbox>
                                </div>
                                <div className="add-employee-form__row">
                                    <input type="submit" className="field__submit" value="Сохранить" onClick={this.addNewEmployee}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    employees: state.employees
})

const mapDispatchToProps = dispatch => ({
    addEmployees: employees => dispatch(addEmployees(employees))
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal)