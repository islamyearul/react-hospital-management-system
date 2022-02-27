import React, { Component } from 'react';

class Divider2 extends Component {
    render() {
        return (
            <>
               <section className="service-area over-layer-default" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/5.jpg')` }}>
            <div className="container padding-bottom-none padding-top-40">
                <div className="section-content">
                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            <div className="service-item style-1 text-white border-right">
                                <div className="service-icon">
                                    <i className="pe-7s-call"></i>
                                </div>
                                <div className="content">
                                    <h5><a href="#">Give us a Call</a></h5>
                                    <p>+970-438-3258</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className="service-item style-1 text-white border-right">
                                <div className="">
                                    <i className="pe-7s-mail-open"></i>
                                </div>
                                <div className="content">
                                    <h5><a href="#">Send us a Message</a></h5>
                                    <p>Your_malil@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className="service-item style-1 text-white">
                                <div className="">
                                    <i className="pe-7s-map-marker"></i>
                                </div>
                                <div className="content">
                                    <h5><a href="#">Visit our Location</a></h5>
                                    <p>12 New york, USA </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section> 
            </>
        );
    }
}

export default Divider2;