import {
    ADD_EMPLOYEES,
    ADD_EMPLOYEE,
    FILTER_EMPLOYEES
} from './consts';

const initialState = {
    employees: [],
    filteringEmplyees: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_EMPLOYEES:
            return {
                employees: [
                    ...state.employees,
                    ...action.employees
                ],
                filteringEmplyees: [
                    ...state.filteringEmplyees,
                    ...action.employees
                ]
            }

        case ADD_EMPLOYEE:
            return {
                employees: [
                    ...state.employees,
                    action.newEmployee
                ],
                filteringEmplyees: action.newFilteringEmplyees
            }

        case FILTER_EMPLOYEES:
            return {
                employees: [
                    ...state.employees
                ],
                filteringEmplyees: [
                    ...action.employees
                ]
            };

        default:
            return state;
    }
}

export default reducer;