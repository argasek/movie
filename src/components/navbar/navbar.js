import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'
import Menu from '../menu/menu';
import './navbar.scss';

const Navbar = () => {
    return (
        <div id="nav">
            <div className="container">
                <div className="left">
                    <Menu />
                    <Link to="/" className="logo">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div>
                    Witaj gościu, zaloguj się
                </div>
            </div>

        </div>
    );
}

export default Navbar;