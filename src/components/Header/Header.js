import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../Login/use-auth';
const Header = (props) => {
    const auth=useAuth();
    return (
        <div className="main">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white py-2 fixed-top d-flex justify-content-between ">
                    <Link className="navbar-brand" to="/">
                        <img src="https://i.ibb.co/g7hNrMG/logo2.png" alt=""/>
                    </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item">
                        <Link className="cart" to="/shipment">
                        <FontAwesomeIcon icon={faCartPlus} />
                            <span className="badge bg-light">{props.cart.length}</span>
                        </Link>
                    </li>
                    {
                        auth.user?
                    <span style={{color:'black',marginRight:'8px'}}>{auth.user.displayName}</span>
                    :
                    <li className="nav-item">
                        <Link className="login" to="/login">Login</Link>
                    </li>
                    }
                    
                    <li className="nav-item">
                        {
                            auth.user?
                            <a href="/">
                                 <button onClick={()=>{auth.signOut()}} className="btn btn-danger btn-rounded">Sign Out</button>
                            </a>
                            :
                            <a href="/login">
                            <button className="btn btn-danger btn-rounded">Sign Up</button>
                        </a>
                        }
                        
                    </li>

                </ul>
                </nav>
            </div>
           
        </div>
    );
};

export default Header;