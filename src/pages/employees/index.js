import React, { Component } from 'react';
import { connect } from 'react-redux';

// style
import './index.scss';

// components
import Container from 'components/container';
import PageSection from 'components/page-section';
import PageTitle from 'components/page-title';
import Filters from 'components/filters';
import Card from 'components/card';

class Employees extends Component {
    render() {
        const { employees } = this.props.employees
        return(
            <PageSection>
                <Container>
                    <PageTitle>Сотрудники</PageTitle>

                    <Filters />

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
            </PageSection>
        )
    }
}


function mapStateToProps(state) {
    return {
        employees: state.employees
    }
}
export default connect(mapStateToProps)(Employees)