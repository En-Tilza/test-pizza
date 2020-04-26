import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dropdown from '../../moduls/dropdown/dropdown';

class Filters extends Component {
    constructor(props) {
        super(props);

        this.update = this.update.bind(this);
    }
    sort() {
        return this.props.employees.slice(0, 3);
    }
    update() {
        let newStore = this.sort();
        this.props.dispatch({newStore});
    }
    render() {
        return(
            <div className="filter">
                <button type="button" className="reset-filters">Все</button>

                <Dropdown values={['ASC', 'DESC']} orderby={'По алфавиту'} updateStore={this.update}/>
                <Dropdown values={['ASC', 'DESC']} orderby={'По дате'} updateStore={this.update}/>
                <Dropdown values={['Повар', 'Курьер', 'Официант']} orderby={'Должность'} updateStore={this.update}/>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        employees: state.store.employees
    }
}

function mapDispatchToProps(dispatch) {
    return { dispatch }
};
export default connect(mapStateToProps, mapDispatchToProps)(Filters)