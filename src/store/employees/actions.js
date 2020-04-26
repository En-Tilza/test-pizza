import * as types from './types';
  
export function addEmployees(employees) {
    return {
        type: types.ADD_EMPLOYEES,
        employees
    };
}

export function filteredEmployees(employees) {
    return {
        type: types.FILTERED_EMPLOYEES,
        employees
    };
}