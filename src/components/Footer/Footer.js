import React from 'react';
import './Footer.css';
import flogo from '../../Image/logo.png';

const Footer = () => {
    return (
        <footer className="bg-dark">
            <div className="footer-container justify-content-center">
                <div className="row top-footer">
                    <div className="col-md-6 mb-5 d-flex justify-content-start" style={{textAlign:'start'}}>
                        <img src={flogo} style={{height:'60px'}} alt=""/>
                    </div>
                    <div className="col-md-3">
                        <ul className="list-unstyled" style={{textAlign:'start',color:'white',lineHeight:'40px'}}>
                            <li>About Online Food</li>
                            <li>Read Our Blog</li>
                            <li>Sign Up To Deliver</li>
                            <li>Add Your Restaurant</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="list-unstyled" style={{textAlign:'start', color:'white',lineHeight:'40px'}}>
                            <li>Get Help</li>
                            <li>Read FAQ</li>
                            <li>View All Cities</li>
                            <li>Restaurant Near Me</li>
                        </ul>
                    </div>
                </div>

                <div className="bottom-footer d-flex justify-content-between" style={{marginTop:'80px'}}>
                    <small className="text-secondary">Copyright ©  2020 Online Food</small> 
                    <ul className="list-inline" style={{textAlign:'start', color:'white'}}>
                        <li className="list-inline-item">Privacy Policy</li>
                        <li className="list-inline-item">Terms of Use</li>
                        <li className="list-inline-item">Pricing</li>
                    </ul>

                </div>    

            </div>
        </footer>
    );
};

export default Footer;