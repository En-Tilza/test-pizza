import React from 'react';

import Container from 'components/Container';

import './index.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <div className="footer__wrapper">
                    <p className="copyright">© копирайт</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;