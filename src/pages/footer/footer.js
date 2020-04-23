import React, { Component } from 'react';

// style
import './footer.scss';

// components
import Logo from '../../components/logo/logo';
import Container from '../../components/container/container';
import Menu from '../../components/menu/menu';

export default class Footer extends Component {
    render() {
        return(
            <footer className="footer">
                <Container>
                    <div className="footer__wrapper">
                        <Logo />

                        <Menu />
                    </div>
                </Container>
            </footer>
        )
    }
}