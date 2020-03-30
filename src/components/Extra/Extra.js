import React from 'react';
import './Extra.css';
import feimg1 from '../../Image/architecture-building-city-2047397.png';
import feimg2 from '../../Image/adult-blur-blurred-background-687824.png';
import feimg3 from '../../Image/chef-cook-food-33614.png';
import icon1 from '../../Image/Group 204.png';
import icon2 from '../../Image/Group 245.png';

const Extra = () => {
    return (
        <div>
            <div className="extra-container">
                <div className="row extra-row d-flex">
                    <div className="col-md-12">
                        <div className="row feature-row">
                            <div className="col-md-6">
                                <h2>Why you choose us</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente eaque repellendus asperiores nisi! Architecto, praesentium eligendi consequatur inventore fuga eius totam officia adipisci. Nostrum quia soluta vel distinctio delectus!</p>
                            </div>
                        </div>
                    </div>
                </div>
        <div className="card-wrapper d-flex justify-content-center">
            <div className="row feature-card-row">
                <div className="col-md-4">
                <div class="card border-0" style={{width: '22rem',boxShadow:'5px 5px 10px gray'}}>
                    <img class="card-img-top" src={feimg1} alt="Card image cap"/>
                    <div class="card-body d-flex">
                        <div>
                            <img src={icon2} style={{marginRight:'8px'}} alt=""/>
                        </div>
                        <div>
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary border-0" style={{backgroundColor:'white',color:'green'}}>See more</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div class="card border-0" style={{width: '22rem',boxShadow:'5px 5px 10px gray'}}>
                    <img class="card-img-top" src={feimg3} style={{height:'19.6rem'}} alt="Card image cap"/>
                    <div class="card-body d-flex">
                        <div>
                            <img src={icon2} style={{marginRight:'8px'}} alt=""/>
                        </div>
                        <div>
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary border-0" style={{backgroundColor:'white',color:'green'}}>See more</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div class="card border-0" style={{width: '22rem',boxShadow:'5px 5px 10px gray'}}>
                    <img class="card-img-top" src={feimg2}  alt="Card image cap"/>
                    <div class="card-body d-flex">
                        <div>
                            <img  src={icon1} style={{marginRight:'8px'}} alt=""/>
                        </div>
                        <div>
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary border-0" style={{backgroundColor:'white',color:'green'}}>See more</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>

            </div>
        </div>
    );
};

export default Extra;