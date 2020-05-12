import React, { Component } from 'react';
import { connect } from 'react-redux';


import './index.scss';

import Card from 'components/card';
import Modal from 'components/modal';

class ListEmployees extends Component {
    render() {
        const { employees } = this.props.employees;

        return(
            <>
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
    

                <Modal />
            </>
        )
    }
}


const mapStateToProps = state => ({
    employees: state.employees
})

export default connect(mapStateToProps)(ListEmployees)