import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className="header">
            <div className="container">
                <h1>{props.title}</h1>
                {props.breadcrumb.length > 0 &&
                    <ul>
                        <li><Link to='/'>Strona główna</Link></li>
                        {props.breadcrumb.map((item, key) => {
                            return (
                                <li key={item.name}><Link to={item.link}>{item.name}</Link></li>
                            );
                        })}
                    </ul>
                }
            </div>
        </div>
    );
};

export default Header;