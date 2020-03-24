import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    return (
        <div className="main">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white py-2 fixed-top d-flex justify-content-between ">
                    <a className="navbar-brand" href="/">
                        <img src="https://i.ibb.co/g7hNrMG/logo2.png" alt=""/>
                    </a>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item">
                        <a className="cart" href="/cart">
                        <FontAwesomeIcon icon={faCartPlus} />
                        <span className="badge bg-light">0</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="login" href="/login">Login</a>
                    </li>
                    <li className="nav-item">
                        <a href="/signup">
                            <button className="btn btn-danger btn-rounded">Sign Up</button>
                        </a>
                    </li>

                </ul>
                </nav>
            </div>
           
        </div>
    );
};

export default Header;