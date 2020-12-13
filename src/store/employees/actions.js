import {
    ADD_EMPLOYEES,
    ADD_EMPLOYEE,
    FILTER_EMPLOYEES 
} from './consts';

export const addEmployees = employees => {
    return {
        type: ADD_EMPLOYEES,
        employees
    };
}

export const addEmployee = (newFilteringEmplyees, newEmployee) => {
    return {
        type: ADD_EMPLOYEE,
        newFilteringEmplyees,
        newEmployee
    };
}

export const filterEmployees = employees => {
    return {
        type: FILTER_EMPLOYEES,
        employees
    };
}


