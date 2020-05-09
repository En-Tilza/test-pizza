import React from 'react';
import { connect } from 'react-redux';

import './index.scss'

import Card from 'components/card';


function listEmployees(props) {
    const { employees } = props.employees
    return(
        <div className="employees">
            {employees ? (
                <>
                    {employees.map(employe =>
                        <Card employe={employe} key={employe.id} />
                    )}
                </>
            ): (
                <div>loading...</div>
            )}
        </div>
    )
}


function mapStateToProps(state) {
    return {
        employees: state.employees
    }
}
export default connect(mapStateToProps)(listEmployees)