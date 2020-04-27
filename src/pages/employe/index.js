import React, { Component } from 'react';

import './index.scss';

import Container from 'components/container';
import PageSection from 'components/page-section';
import PageTitle from 'components/page-title';

export default class Employee extends Component {
    constructor(props) {
        super(props);

        console.log( this )
    }
    render() {
        return(
            <PageSection>
                <Container>
                    <PageTitle>Редактировать сотрудника</PageTitle>

                </Container>
            </PageSection>
        )
    }
}
