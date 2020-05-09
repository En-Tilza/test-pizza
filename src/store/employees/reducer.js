import * as types from './types';

const initialState = {
    employees: []
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case types.ADD_EMPLOYEES:
            return {
                ...state,
                employees: [
                    ...action.employees
                ]
            }

        case types.EMPLOYEES_SORT:
            return {
                ...state,
                employees: action.employees
            }

        default:
            return state;
    }
}
