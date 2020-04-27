import React, { Component } from 'react';
import { connect } from 'react-redux';

import './index.scss';

import Container from 'components/container';
import PageSection from 'components/page-section';
import PageTitle from 'components/page-title';
import EditForm from 'components/edit-form';

class Employee extends Component {
    constructor(props) {
        super(props);

        console.log( this )
    }
    render() {
        return(
            <PageSection>
                <Container>
                    <PageTitle>Редактировать сотрудника</PageTitle>


                    <EditForm />
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
export default connect(mapStateToProps)(Employee)