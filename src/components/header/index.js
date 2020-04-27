import React, { Component } from 'react';

// style
import 'style/general.scss';
import './index.scss';

// components
import Logo from 'components/logo';
import Container from 'components/container';
import Menu from 'components/menu';

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