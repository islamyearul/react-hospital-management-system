import React, { Component } from 'react';

class ServiceContent extends Component {
    render() {
        return (
            <div>
                <section className="service-area bg-f8 animatedParent animateOnce">
            <div className="container">
                <div className="section-title">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <h2>Our <span className="color-defult">Services</span></h2>
                            <div className="line-border-center bg-defult"></div>
                            <p>Repellendus error placeat numquam doloribus perferendis consequatur maxime molestiae soluta Corporis quidem quaerat accusantium omnis repudiandae nulla recusandae</p>
                        </div>
                    </div>
                </div>
                <div className="section-content">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="service-item text-center style-3">
                                <span className="flaticon-heart-1"></span>
                                <h4><a href="#">Heart Transplants</a></h4>
                                <div className="border-center"></div>
                                <p>  Provide direct support to an individual, family or community by paying medical expenses for service.</p>
                                <button type="submit" className="btn btn-theme margin-top-20" data-text="Send Message">Read More</button>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="service-item text-center style-3">
                                <span className="flaticon-broken-bone"></span>
                                <h4><a href="#">Orthopaedics</a></h4>
                                <div className="border-center"></div>
                                <p>  Provide direct support to an individual, family or community by paying medical expenses for service.</p>
                                <button type="submit" className="btn btn-theme margin-top-20" data-text="Send Message">Read More</button>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="service-item text-center style-3">
                                <span className="flaticon-stomach"></span>
                                <h4><a href="#">Gastroenterology</a></h4>
                                <div className="border-center"></div>
                                <p>  Provide direct support to an individual, family or community by paying medical expenses for service.</p>
                                <button type="submit" className="btn btn-theme margin-top-20" data-text="Send Message">Read More</button>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="service-item text-center style-3">
                                <span className="flaticon-brain-2"></span>
                                <h4><a href="#">Neurosciences</a></h4>
                                <div className="border-center"></div>
                                <p>  Provide direct support to an individual, family or community by paying medical expenses for service.</p>
                                <button type="submit" className="btn btn-theme margin-top-20" data-text="Send Message">Read More</button>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="service-item text-center style-3">
                                <span className="flaticon-spine-bone"></span>
                                <h4><a href="#">Spine Care</a></h4>
                                <div className="border-center"></div>
                                <p>  Provide direct support to an individual, family or community by paying medical expenses for service.</p>
                                <button type="submit" className="btn btn-theme margin-top-20" data-text="Send Message">Read More</button>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="service-item text-center style-3">
                                <span className="flaticon-virus"></span>
                                <h4><a href="#">Cancer Care</a></h4>
                                <div className="border-center"></div>
                                <p>  Provide direct support to an individual, family or community by paying medical expenses for service.</p>
                                <button type="submit" className="btn btn-theme margin-top-20" data-text="Send Message">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            </div>
        );
    }
}

export default ServiceContent;