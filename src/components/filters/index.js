import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    addEmployees, 
    sortByNameASC, 
    sortByNameDESC, 
    sortByDateASC, 
    sortByDateDESC
} from 'store/employees/actions';

import './index.scss';

import Dropdown from 'components/dropdown';
import Checkbox from 'components/checkbox';

class Filters extends Component {
    constructor(props) {
        super(props);

        this.filteredEmployees = [];
    }

    sortByName = orderby => {
        if( orderby === 'ASC' ) this.props.sortByNameASC(this.props.employees);
        if( orderby === 'DESC' ) this.props.sortByNameDESC(this.props.employees);
    }

    sortByDate = orderby => {
        if( orderby === 'ASC' ) this.props.sortByDateASC(this.props.employees);
        if( orderby === 'DESC' ) this.props.sortByDateDESC(this.props.employees);
    }

    sortByPost(orderby) {
        let role = '';
        switch(orderby) {
            case 'Повар': role = 'cook'; break;
            case 'Курьер': role = 'driver'; break;
            case 'Официант': role = 'waiter'; break;
            default: break;
        }
        const newArr = this.allEmployees.filter(el => role === el.role)
        return newArr;
    }

    updateByPost = orderby => {
        const newStore = this.sortByPost(orderby);
        this.props.addEmployees(newStore);

        this.filteredEmployees = newStore;
    }

    archive = input => {
        let arr = this.filteredEmployees.length ? this.filteredEmployees : this.allEmployees;

        const newStore = arr.filter(el => el.isArchive === input);
        this.props.addEmployees(newStore);
    }

    showAllEmployees = () => {
        this.props.addEmployees(this.allEmployees);
        this.filteredEmployees = [];
    }

    componentDidUpdate(prevProps) {
        if( this.allEmployees === undefined )
            this.allEmployees = this.props.employees;
    }

    render() {
        return(
            <div className="filter">
                <button type="button" className="reset-filters" onClick={this.showAllEmployees}>Все</button>

                <Dropdown values={['ASC', 'DESC']} name={'По алфавиту'} func={this.sortByName}/>
                <Dropdown values={['ASC', 'DESC']} name={'По дате'} func={this.sortByDate}/>
                <Dropdown values={['Повар', 'Курьер', 'Официант']} name={'Должность'} func={this.updateByPost}/>

                <Checkbox func={this.archive}>В архиве</Checkbox>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    employees: state.employees.employees,
});


const mapDispatchToProps = (dispatch) => ({
    addEmployees: (employees) => dispatch(addEmployees(employees)),
    sortByNameASC: (employees) => dispatch(sortByNameASC(employees)),
    sortByNameDESC: (employees) => dispatch(sortByNameDESC(employees)),
    sortByDateASC: (employees) => dispatch(sortByDateASC(employees)),
    sortByDateDESC: (employees) => dispatch(sortByDateDESC(employees))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);