import * as types from './types';



export default function reducer(state = {}, action) {
    switch(action.type) {
        case types.ADD_EMPLOYEES:
            return state = {
                ...state,
                employees: action.employees
            }

        case types.FILTERED_EMPLOYEES:
            return state = {
                ...state,
                employees: action.employees
            }

        default:
            return state;
    }
}
