import React from 'react';

import './index.scss';

import Logo from 'components/logo';
import Container from 'components/container';
import Menu from 'components/menu';

export default function Footer() {
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