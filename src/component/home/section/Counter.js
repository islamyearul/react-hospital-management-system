import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <>
               <section className="funfact-field over-layer-default" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/6.jpg')` }}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="counter-col text-center">
                            <i className="flaticon-heart"></i>
                            <div className="count">
                                <div className="start-count">25</div>
                                <h4>Heart Transplants</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="counter-col text-center">
                            <i className="flaticon-human-lungs"></i>
                            <div className="count">
                                <div className="start-count">979</div>
                                <h4>BARIATRIC SURGERY</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="counter-col text-center">
                            <i className="flaticon-kidney"></i>
                            <div className="count">
                                <div className="start-count">5264</div>
                                <h4>CRITICAL CARE</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="counter-col text-center">
                            <i className="flaticon-first-aid-kit"></i>
                            <div className="count">
                                <div className="start-count border-none">119</div>
                                <h4>EXTPART Doctor</h4>
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

export default Counter;