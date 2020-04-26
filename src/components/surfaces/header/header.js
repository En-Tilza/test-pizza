import React, { Component } from 'react';

// style
import './general.scss';
import './header.scss';

// components
import Logo from '../../logo/logo';
import Container from '../../layout/container/container';
import Menu from '../../navigation/menu/menu';

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