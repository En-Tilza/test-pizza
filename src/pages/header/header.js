import React, { Component } from 'react';

// style
import './general.scss';
import './header.scss';

// components
import Logo from '../../components/logo/logo';
import Container from '../../components/container/container';
import Menu from '../../components/menu/menu';

export default class Header extends Component {
    render() {
        return(
            <header className="header">
                <Container>
                    <div className="header__wrapper">
                        <Logo />

                        <Menu />
                    </div>
                </Container>
            </header>
        )
    }
}