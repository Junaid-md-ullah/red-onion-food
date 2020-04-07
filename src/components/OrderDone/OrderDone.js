import React from 'react';
import map from '../../../src/Image/map.png';
import './OrderDone.css';
import man from '../../Image/Group 1151.png';
import delivery from '../../Image/Group 1152.png';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const OrderDone = (props) => {
    const {orderPlacedId}=useParams()

    return (
        <div>
            <div className="container-ship d-flex justify-content-center">
                <div className="row img-wrapper d-flex justify-content-center">
                    <div className="col-md-12  align-items-center" style={{textAlign:'center'}}>
                        <h3>Thank You for Purchasing</h3>
                        <h4 style={{textDecoration:'underLine'}}>Order Id #{orderPlacedId}</h4>

                    </div>
                    <div className="col-md-8 img-file justify-content-center">
                    <img src={map} alt=""/>
                    </div>
                    <div className="col-md-4 details-wrapper">
                        <div className="column4 bg-light">
                        <div className="shipping-container">
                            <img src={man} alt=""/>
                        </div>
                        <div className="address bg-white">
                            <h4>Your Location</h4>
                            <p>{props.deliveryDet.address}, {props.deliveryDet.RoadNo}</p>
                            <h4>Shop Address</h4>
                            <p>Izumi Japanese kitchen</p>
                        </div>
                        <div className="delivery-time">
                            <h1>02:00</h1>
                            <p>Estimated Delivery</p>
                        </div>
                        <div className="delivery-man d-flex align-items-start bg-white">
                            <img src={delivery} alt=""/>
                            <div className="delivery-man-details ">
                                <h6>Hamim</h6>
                                <p>Your Rider</p>
                            </div>
                        </div>
                        <div className="contact">
                            <button className="btn btn-danger">Contact</button>
                        </div>
                        
                    </div>

                </div>

                </div>
            </div>
        </div>
    );
};

export default OrderDone;