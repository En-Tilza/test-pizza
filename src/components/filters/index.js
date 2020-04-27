import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addEmployees, sortByNameASC, sortByNameDESC, sortByDateASC, sortByDateDESC } from 'store/employees/actions';


import Dropdown from 'components/dropdown';
import Checkbox from 'components/checkbox';

class Filters extends Component {
    constructor(props) {
        super(props);

        this.sortByName = this.sortByName.bind(this);
        this.sortByDate = this.sortByDate.bind(this);
        this.updateByPost = this.updateByPost.bind(this);
        this.archive = this.archive.bind(this);
        this.showAllEmployees = this.showAllEmployees.bind(this);


        this.filteredEmployees = [];
    }

    sortByName(orderby) {
        if( orderby === 'ASC' ) this.props.sortByNameASC(this.props.employees);
        if( orderby === 'DESC' ) this.props.sortByNameDESC(this.props.employees);

        this.allEmployees = this.props.employees;
    }

    sortByDate(orderby) {
        if( orderby === 'ASC' ) this.props.sortByDateASC(this.props.employees);
        if( orderby === 'DESC' ) this.props.sortByDateDESC(this.props.employees);

        this.allEmployees = this.props.employees;
    }

    sortByPost(orderby) {
        let role = '';
        switch(orderby) {
            case 'Повар': role = 'cook'; break;
            case 'Курьер': role = 'driver'; break;
            case 'Официант': role = 'waiter'; break;
            default: break;
        }
        let newArr = this.allEmployees.filter(el => {
            return role === el.role;
        })
        return newArr;
    }

    updateByPost(orderby) {
        let newStore = this.sortByPost(orderby);
        this.props.addEmployees(newStore);

        this.filteredEmployees = newStore;
    }

    archive(input) {
        let arr = this.filteredEmployees.length ? this.filteredEmployees : this.allEmployees;

        let newStore = arr.filter(el => el.isArchive === input);
        this.props.addEmployees(newStore);
    }

    showAllEmployees() {
        console.log( this.allEmployees )
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

                <Dropdown values={['ASC', 'DESC']} orderby={'По алфавиту'} updateStore={this.sortByName}/>
                <Dropdown values={['ASC', 'DESC']} orderby={'По дате'} updateStore={this.sortByDate}/>
                <Dropdown values={['Повар', 'Курьер', 'Официант']} orderby={'Должность'} updateStore={this.updateByPost}/>

                <Checkbox updateStore={this.archive}>В архиве</Checkbox>
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