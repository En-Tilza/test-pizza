import React from 'react';
import { Link } from 'react-router-dom'

import Container from 'components/Container';

import './index.scss';

const Header = () => {
    return (
        <header className="header">
            <Container>
                <div className="header__wrapper">
                    <a href="/" className="logo">Logo</a>

                    <nav>
                        <ul className="menu">
                            <li><Link to="/">Сотрудники</Link></li>
                        </ul>
                    </nav>
                </div>
            </Container>
        </header>
    )
}

export default Header;