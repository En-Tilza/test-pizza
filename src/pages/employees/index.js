import React, { useState } from "react";

import Container from 'components/Container';
import PageTitle from 'components/Page-title';
import Employee from 'components/Employee';
import Filters from 'components/Filters';
import ButtonAddEmployee from 'components/Button-add-employee'

import { useLocalStorage } from "hooks/useLocalStorage";

import './index.scss';

const Employees = () => {
    const [data, setData] = useLocalStorage('employees');
    const [filterEmployee, setFilterEmployee] = useState(data);
    const [filterOption, setFilterOption] = useState({
        'by-abc': '',
        'by-date': '',
        'by-order': '',
    });

    const handlerFiltering = (target, value, newEmployee) => {
        let filteringEmployees;
        const employees = [...data];
        if( newEmployee ) employees.push(newEmployee);

        if( target && value ) {
            filterOption[target] = value;
            // Сортировки по алфавиту и дате взаимоисключающие 
            if(target == 'by-abc') filterOption['by-date'] = '';
            if(target == 'by-date') filterOption['by-abc'] = '';

            setFilterOption(filterOption);
        }

        for(const [val, key] of Object.entries(filterOption)) {
            switch(val) {
                case 'by-abc':
                    if( key == 'ASC' ) filteringEmployees = employees.sort((a, b) => a.name > b.name ? 1 : -1);
                    else if( key == 'DESC' ) filteringEmployees = employees.sort((a, b) => a.name < b.name ? 1 : -1);
                    else filteringEmployees = employees;
                    break;
    
                case 'by-date':
                    if( key == 'ASC' ) {
                        filteringEmployees = employees.sort((a, b) => {
                            const aa = a.birthday.split('.').reverse().join();
                            const bb = b.birthday.split('.').reverse().join();
                            return aa < bb ? -1 : (aa > bb ? 1 : 0);
                        });
                    }
                    else if( key == 'DESC' ) {
                        filteringEmployees = employees.sort((a, b) => {
                            const aa = a.birthday.split('.').reverse().join();
                            const bb = b.birthday.split('.').reverse().join();
                            return aa > bb ? -1 : (aa < bb ? 1 : 0);
                        });
                    }
                    else filteringEmployees = employees;
                    break;
    
                case 'by-order':
                    if( key ) {
                        filteringEmployees = employees.filter(item => {
                            let role;
                            switch(key) {
                                case 'Повар': role = 'cook'; break;
                                case 'Курьер': role = 'driver'; break;
                                case 'Официант': role = 'waiter'; break;
                            }

                            return item.role == role;
                        });
                    } else {
                        filteringEmployees = employees;
                    }
                    break;
            
                default:
                    filteringEmployees = employees;
                    break;
            }
        }

        setFilterEmployee([...filteringEmployees]);
    }

    const handlerAddEmployee = newEmployee => {
        setData([
            ...data,
            newEmployee
        ]);
        handlerFiltering(false, false, newEmployee);
    }

    return (
        <section className="page page-employees">
            <Container>
                <PageTitle>Список сотрудников</PageTitle>

                <Filters handlerFiltering={handlerFiltering} />

                <div className="flex-wrapper">
                    {filterEmployee ? (
                        <>
                            {filterEmployee.map((employee, index) =>
                                <Employee employee={employee} key={index} />
                            )}
                        </>
                    ): (
                        <div>loading...</div>
                    )}
                </div>

                <ButtonAddEmployee handlerAddEmployee={handlerAddEmployee} />
            </Container>
        </section>
    );
}

export default Employees;