import React from 'react';

import './index.scss';

import PageSection from 'components/page-section';
import Container from 'components/container';
import PageTitle from 'components/page-title';
import Filters from 'components/filters';
import ListEmployees from 'components/employees';

export default function Employees() {
    return(
        <PageSection>
            <Container>
                <PageTitle>Сотрудники</PageTitle>

                <Filters />

                <ListEmployees />
            </Container>
        </PageSection>
    )
}