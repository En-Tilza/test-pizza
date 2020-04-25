import React, { Component } from 'react';
import { connect } from 'react-redux';


// style
import './main-page.scss';

// components
import Container from '../../components/container/container';
import PageTitle from '../../components/page-title/page-title';
import Card from '../../components/card/card';
import Dropdown from '../../components/dropdown/dropdown';


class Home extends Component {
    render() {
        const { employees } = this.props.newStore
        return(
            <section className="page">
                <Container>
                    <PageTitle>ПиццаФабрика</PageTitle>

                    <div className="content">
                        <div className="content-text">
                            <p><span className="main-color">ПиццаФабрика</span> - это сеть семейных кафе и пиццерий с доставкой, предлагающая клиентам популярные блюда современной кухни: пицца, роллы, лапша WOK. Главные наши преимущества – собственная облачная система автоматизации и то, что мы кормим клиентов по любому поводу (помимо основного меню, бизнес-ланчи, вечернее и детское меню). Наши производственные мощности всегда загружены работой!</p>

                            <h2>Сотрудники</h2>
                        </div>

                        <div className="filter">
                            <button type="button" className="reset-filters">Все</button>

                            <Dropdown variables={['ASC', 'DESC']} orderby={'По алфавиту'}/>
                            <Dropdown variables={['ASC', 'DESC']} orderby={'По дате'}/>
                        </div>
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



export default connect(
    state => ({
        newStore: state
    }),
    dispatch => ({})
)(Home)