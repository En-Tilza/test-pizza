import React, { useEffect, useState } from 'react';
import { useLocalStorage } from "hooks/useLocalStorage";


import InputMask from 'react-input-mask';
import Dropdown from 'components/Dropdown';
import Checkbox from 'components/Checkbox';


import './index.scss';


const ButtonAddEmployee = props => {
    const [ modal, setModal ] = useState(false);
    const [ errors, setErrors ] = useState({
        name: false,
        role: false,
        phone: false,
        birthday: false,
        gender: false
    });
    const [data, setData] = useLocalStorage('employees');

    const modalClass = modal ? 'modal active' : 'modal';


    const closeModal = () => {
        setModal(false);
    }

    const checkForErrors = (newEmployee) => {
        let newState = {
            name: false,
            role: false,
            phone: false,
            birthday: false,
            gender: false
        }

        let isError = false;

        for (let [key, value] of Object.entries(newEmployee)) {
            if( value === '' || value === 'Пол' || value === 'Должность' ) {
                newState[key] = true;
                isError = true;
            }
        }

        setErrors(newState);

        return isError;
    }

    const handlerAddEmployee = event => {
        event.preventDefault();

        const form = document.querySelector('.add-employee-form')
        const newEmployee = {
            id: data.length + 1,
            name: form.querySelector('[name=employee-name]').value,
            isArchive: form.querySelector('[name=archive]').checked,
            role: form.querySelector('[name=employee-role]').value,
            phone: form.querySelector('[name=employee-phone]').value,
            birthday: form.querySelector('[name=employee-birthday]').value,
            gender: form.querySelector('[name=employee-gender]').value
        }
        if( newEmployee.gender === "Мужчина" ) {
            if( newEmployee.role === 'Повар' ) {
                newEmployee.icon = "images/chef-male.svg";
                newEmployee.role = 'cook';
            }
            if( newEmployee.role === "Водитель" ) {
                newEmployee.icon = "images/driver-male.svg";
                newEmployee.role = 'driver';
            }
            if( newEmployee.role === 'Официант' ) {
                newEmployee.icon = "images/waiter.svg";
                newEmployee.role = 'waiter';
            }
        } else {
            if( newEmployee.role === 'Повар' ) {
                newEmployee.icon = "images/chef-famale.svg";
                newEmployee.role = 'cook';
            }
            if( newEmployee.role === 'Курьер' ) {
                newEmployee.icon = "images/driver-famale.svg";
                newEmployee.role = 'driver';
            }
            if( newEmployee.role === 'Официант' ) {
                newEmployee.icon = "images/waitres.svg";
                newEmployee.role = 'waiter';
            }
        }

        const error = checkForErrors(newEmployee);

        if( error ) return;

        props.handlerAddEmployee(newEmployee);

        closeModal();
    }


    return(
        <>
            <button className="button-add-employee" onClick={() => { setModal(true) }}>Добавить нового</button>

            <div className={modalClass}>
                <div className="modal__wrapper">
                    <div className="modal__content">
                        <button type="button" className="modal-close" onClick={closeModal}>
                            <svg viewBox="0 0 329.26933 329" xmlns="http://www.w3.org/2000/svg"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>
                        </button>

                        <p className="modal__title">Добавить сотрудника</p>
                        <form className="add-employee-form" onSubmit={handlerAddEmployee}>
                            <div className={errors.name ? "error add-employee-form__row" : "add-employee-form__row"}>
                                <label className="field">
                                    <p className="field__title">Имя</p>
                                    <input name="employee-name" type="text" className="field__input" />
                                </label>
                            </div>
                            <div className={errors.role ? "error add-employee-form__row" : "add-employee-form__row"}>
                                <Dropdown values={['Повар', 'Курьер', 'Официант']} title={'Должность'} name="employee-role"/>
                            </div>
                            <div className={errors.phone ? "error add-employee-form__row" : "add-employee-form__row"}>
                                <label className="field">
                                    <p className="field__title">Телефон</p>
                                    <InputMask name="employee-phone" className="field__input" mask="+7 (999) 999-99-99" />
                                </label>
                            </div>
                            <div className={errors.birthday ? "error add-employee-form__row" : "add-employee-form__row"}>
                                <label className="field">
                                    <p className="field__name">Дата рождения</p>
                                    <InputMask name="employee-birthday" className="field__input" mask="99.99.9999" />
                                </label>
                            </div>
                            <div className={errors.gender ? "error add-employee-form__row" : "add-employee-form__row"}>
                                <Dropdown values={['Мужчина', 'Женщина']} title={'Пол'} name="employee-gender"/>
                            </div>
                            <div className="add-employee-form__row">
                                <Checkbox name="archive">В архиве</Checkbox>
                            </div>
                            <div className="add-employee-form__row">
                                <input type="submit" className="field__submit" value="Сохранить"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ButtonAddEmployee;