import React, { Component } from 'react';
import { connect } from 'react-redux';

// style
import './employees.scss';

// components
import Container from '../../components/container/container';
import PageTitle from '../../components/page-title/page-title';

class Employees extends Component {
    render() {
        const { employees } = this.props.newStore
        return(
            <section className="page">
                <Container>
                    <PageTitle>Employees</PageTitle>

                    <div className="employees">
                        {employees ? (
                            <>
                                {employees.map((user, index) =>
                                    <div key={index}>{user.name}</div>
                                )}
                            </>
                        ): (
                            <div>loading...</div>
                        )}
                    </div>
                </Container>
            </section>
        )
    }
}


export default connect(
    state => ({
        newStore: state
    }),
    dispatch => ({})
)(Employees)