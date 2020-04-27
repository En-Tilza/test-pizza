import * as types from './types';



export default function reducer(state = {}, action) {
    switch(action.type) {
        case types.ADD_EMPLOYEES:
            return state = {
                ...state,
                employees: action.employees
            }

        case types.SORT_BY_NAME_ASC:
            return state = {
                ...state,
                employees: action.employees
            }

        case types.SORT_BY_NAME_DESC:
            return state = {
                ...state,
                employees: action.employees
            }

        case types.SORT_BY_DATE_ASC:
            return state = {
                ...state,
                employees: action.employees
            }

        case types.SORT_BY_DATE_DESC:
            return state = {
                ...state,
                employees: action.employees
            }

        default:
            return state;
    }
}
