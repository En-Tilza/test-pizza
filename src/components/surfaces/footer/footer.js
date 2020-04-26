import React, { Component } from 'react';

// style
import './footer.scss';

// components
import Logo from '../../logo/logo';
import Container from '../../layout/container/container';
import Menu from '../../navigation/menu/menu';

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