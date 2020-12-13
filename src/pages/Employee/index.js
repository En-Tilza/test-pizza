import React from 'react';
import { useLocalStorage } from "hooks/useLocalStorage";

import Container from 'components/Container';
import PageTitle from 'components/Page-title';
import Dropdown from 'components/Dropdown';
import Checkbox from 'components/Checkbox';
import InputMask from 'react-input-mask';

import './index.scss';


const Employee = () => {
    const [data, setData] = useLocalStorage('employees');
    const thisId = (new URL(location.href)).searchParams.get("id") - 1;

    const userUpdate = event => {
        event.preventDefault();
        const form = document.querySelector('.edit-form')

        const name = form.querySelector('[name=employee-name]').value;
        const isArchive = form.querySelector('[name=archive]').checked;
        const role = form.querySelector('[name=employee-role]').value;
        const phone = form.querySelector('[name=employee-phone]').value;
        const birthday = form.querySelector('[name=employee-birthday]').value;

        data[thisId].name = name ? name : data[thisId].name;
        data[thisId].isArchive = isArchive ? isArchive : data[thisId].isArchive;
        data[thisId].role = role ? role : data[thisId].role;
        data[thisId].phone = phone ? phone : data[thisId].phone;
        data[thisId].birthday = birthday ? birthday : data[thisId].birthday;


        console.log( data[thisId].gender, data[thisId].role )
        if( data[thisId].gender === 'mele' ) {
            if( data[thisId].role === 'Повар' ) {
                data[thisId].icon = "images/chef-male.svg";
                data[thisId].role = 'cook';
            }
            if( data[thisId].role === 'Водитель' ) {
                data[thisId].icon = "images/driver-male.svg";
                data[thisId].role = 'driver';
            }
            if( data[thisId].role === 'Официант' ) {
                data[thisId].icon = "images/waiter.svg";
                data[thisId].role = 'waiter';
            }
        } else {
            if( data[thisId].role === 'Повар' ) {
                data[thisId].icon = "images/chef-famale.svg";
                data[thisId].role = 'cook';
            }
            if( data[thisId].role === 'Водитель' ) {
                data[thisId].icon = "images/driver-famale.svg";
                data[thisId].role = 'driver';
            }
            if( data[thisId].role === 'Официант' ) {
                data[thisId].icon = "images/waitres.svg";
                data[thisId].role = 'waiter';
            }
        }


        setData([...data]);
    }


    return (
        <section className="page page-employees">
            <Container>
                <PageTitle>Редактирование</PageTitle>

                {data[thisId] ?
                    <form className="edit-form" onSubmit={userUpdate}>
                        <div className="edit-form__row">
                            <div className="field">
                                <p className="field__name">Имя</p>
                                <input name="employee-name" type="text" className="field__input" placeholder={data[thisId].name} />
                            </div>
                            <div className="field">
                                <p className="field__name">Должность</p>
                                <Dropdown values={['Водитель', 'Повар', 'Официант']} name={'employee-role'} title={data[thisId].role} />
                            </div>
                        </div>
                        <div className="edit-form__row">
                            <div className="field">
                                <p className="field__name">Телефон</p>
                                <InputMask name="employee-phone" className="field__input" mask="+7 (999) 999-99-99" placeholder={data[thisId].phone} />
                            </div>
                            <div className="field">
                                <p className="field__name">Дата рождения</p>
                                <InputMask name="employee-birthday" className="field__input" mask="99.99.9999" placeholder={data[thisId].birthday} />
                            </div>
                        </div>
                        <div className="edit-form__row">
                            <div className="field field--center">
                                <Checkbox name="archive" checked={data[thisId].isArchive}>В архиве</Checkbox>
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
        </section>
    )
}


export default Employee;