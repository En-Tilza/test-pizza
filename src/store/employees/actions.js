import * as types from './types';
  
export function addEmployees(employees) {
    return {
        type: types.ADD_EMPLOYEES,
        employees
    };
}

export function sortByNameASC(employees) {
    employees = employees.sort((a, b) => a.name > b.name ? 1 : -1);
    return {
        type: types.SORT_BY_NAME_ASC,
        employees
    };
}

export function sortByNameDESC(employees) {
    employees = employees.sort((a, b) => a.name < b.name ? 1 : -1);
    return {
        type: types.SORT_BY_NAME_DESC,
        employees
    };
}

export function sortByDateASC(employees) {
    employees = employees.sort(function(a, b){
        var aa = a.birthday.split('.').reverse().join(),
            bb = b.birthday.split('.').reverse().join();
        return aa < bb ? -1 : (aa > bb ? 1 : 0);
    });
    return {
        type: types.SORT_BY_DATE_ASC,
        employees
    };
}

export function sortByDateDESC(employees) {
    employees = employees.sort(function(a, b){
        var aa = a.birthday.split('.').reverse().join(),
            bb = b.birthday.split('.').reverse().join();
        return aa > bb ? -1 : (aa < bb ? 1 : 0);
    });
    return {
        type: types.SORT_BY_DATE_DESC,
        employees
    };
}