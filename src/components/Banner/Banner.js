import React from 'react';
import './Banner.css';
// import ba from '../../Image/bannerbackground.png';

const Banner = () => {
    return (
        <div className="main">
            <section className="banner-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col text-center banner-content">
                            <h1>Best food waiting for you belly</h1>
                            <div className="banner-input">
                            <input type="text" placeholder="Search food item"/>
                            <button className="btn primary-btn button-search">Search</button>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            
            
            
            
            {/* <section className="col banner d-flex align-items-center" >
                <div className="wrapper d-flex justify-content-center">
                    <h1>Best Food Waiting for your Belly</h1>
                </div>
               <div className="searchFood">
                    <input type="text" placeholder="Search for food"/>
                    <a href="#">Search</a>
               </div>
            </section> */}
        </div>
    );
};

export default Banner;