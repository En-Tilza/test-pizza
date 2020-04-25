import React, { Component } from 'react';
import { connect } from 'react-redux';

// style
import './employees.scss';

// components
import Container from '../../components/container/container';
import PageTitle from '../../components/page-title/page-title';
import Card from '../../components/card/card';

class Employees extends Component {
    render() {
        const { employees } = this.props.newStore
        return(
            <section className="page">
                <Container>
                    <PageTitle>Сотрудники</PageTitle>

                    <div className="employees">
                        {employees ? (
                            <>
                                {employees.map((employe, index) =>
                                    <Card employe={employe} key={index} />
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