import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addEmployees, sortByNameASC, sortByNameDESC, sortByDateASC, sortByDateDESC } from 'store/employees/actions';


import Dropdown from 'components/moduls/dropdown/dropdown';
import Checkbox from 'components/navigation/checkbox';

class Filters extends Component {
    constructor(props) {
        super(props);

        this.sortByName = this.sortByName.bind(this);
        this.sortByDate = this.sortByDate.bind(this);
        this.updateByPost = this.updateByPost.bind(this);
        this.archive = this.archive.bind(this);
        this.showAllEmployees = this.showAllEmployees.bind(this);
    }

    sortByName(orderby) {
        if( orderby === 'ASC' ) this.props.sortByNameASC(this.props.employees);
        if( orderby === 'DESC' ) this.props.sortByNameDESC(this.props.employees);
    }

    sortByDate(orderby) {
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
        let newArr = this.allEmployees.filter(el => {
            return role === el.role;
        })
        return newArr;
    }

    updateByPost(orderby) {
        let newStore = this.sortByPost(orderby);
        this.props.addEmployees(newStore);
    }

    archive(input) {
        let newStore = this.allEmployees.filter(el => {
            return el.isArchive === input;
        })
        this.props.addEmployees(newStore);
    }

    showAllEmployees() {
        this.props.addEmployees(this.allEmployees);
    }

    render() {
        if( this.allEmployees === undefined )
            this.allEmployees = this.props.employees;

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