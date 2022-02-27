import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return (
            <>
                <section>
            <div className="container">
                <div className="section-content">
                    <div className="row">
                        <div className="col-md-7">
                            <h2>Why chose us</h2>
                            <h3 className="color-defult">Get a world class Health service now</h3>
                            <p className="lead">Medicative Hospital is here for you. Call <span className="ff-p">+00 999 3030</span></p>
                            <p><span className="fw-b">Consectetur</span> adipisicing elit. Ratione ut culpa, illo, odit tempore dignissimos nisi consequatur voluptatem, eveniet quaerat officiis sed ad et fugiat praesentium nesciunt sunt ipsa quam magnam.</p>
                            <div className="row margin-top-20">
                                <div className="col-md-6">
                                    <img className="margin-top-10" src="img/services/s1.jpg" alt="" />
                                </div>
                                <div className="col-md-6">
                                    <p>Medicative <span className="color-defult fw-b">adipisicing elit</span>. Animi eveniet ipsam, error dolorum impedit debitis, officiis sint saepe similique quasi dolor, ut. Ipsum quaerat saepe, sapiente doloribus ab laudantium ipsam!</p>
                                </div>
                            </div>
                            <div className="clearfix margin-top-20 margin-right-10"> 
                                <div className="skills" data-percent="85%">
                                    <div className="title-bar">
                                    <h5>Cardiology</h5>
                                    </div>
                                    <span>85%</span>
                                    <div className="skillbar-1"></div>  
                                </div>
                                <div className="skills" data-percent="60%">
                                    <div className="title-bar">
                                    <h5>General Practice</h5>
                                    </div>
                                    <span>60%</span>
                                    <div className="skillbar-2"></div>  
                                </div>
                                <div className="skills" data-percent="89%">
                                    <div className="title-bar">
                                    <h5>General surgery</h5>
                                    </div>
                                    <span>89%</span>
                                    <div className="skillbar-3"></div>  
                                </div>
                                <div className="skills" data-percent="60%">
                                    <div className="title-bar">
                                    <h5>Pharmacology</h5>
                                    </div>
                                    <span>60%</span>
                                    <div className="skillbar-4"></div>  
                                </div>
                            </div>

                        </div>
                        <div className="col-md-5">
                            <div>
                            <img alt="" src="img/services/w1.jpg" /> 
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

export default Welcome;