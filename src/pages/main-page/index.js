import React, { Component } from 'react';
import { connect } from 'react-redux';


import './index.scss';

import Container from 'components/container';
import PageTitle from 'components/page-title';
import Filters from 'components/filters';
import Card from 'components/card';


class Home extends Component {
    render() {
        const { employees } = this.props.employees

        return(
            <section className="page">
                <Container>
                    <PageTitle>ПиццаФабрика</PageTitle>

                    <div className="content">
                        <div className="content-text">
                            <p><span className="main-color">ПиццаФабрика</span> - это сеть семейных кафе и пиццерий с доставкой, предлагающая клиентам популярные блюда современной кухни: пицца, роллы, лапша WOK. Главные наши преимущества – собственная облачная система автоматизации и то, что мы кормим клиентов по любому поводу (помимо основного меню, бизнес-ланчи, вечернее и детское меню). Наши производственные мощности всегда загружены работой!</p>

                            <h2>Сотрудники</h2>
                        </div>

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
                    </div>
                </Container>
            </section>
        )
    }
}


function mapStateToProps(state) {
    return {
        employees: state.employees
    }
}
export default connect(mapStateToProps)(Home)