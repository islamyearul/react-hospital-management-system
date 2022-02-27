import React, { Component } from 'react';

class Divider extends Component {
    render() {
        return (
            <>
                <section className="about-3col animatedParent animateOnce">
<div className="container">
    <div className="section-content">
        <div className="row">
            <div className="about-feature style-2">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div className="appointment-item">
                        <i className="flaticon-ribbon"></i>
                        <h5><a href="#">Our Doctors</a></h5>
                        <div className="line-border-center bg-gray margin-bottom-20"></div>
                        <p>Choose by name, specialty, city and more.</p>
                        <button className="btn btn-theme btn-sm">Find a Doctor <i className="pe-7s-angle-right"></i></button>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div className="appointment-item">
                        <i className="flaticon-cardiogram"></i>
                        <h5><a href="#">Department & Service</a></h5>
                        <div className="line-border-center bg-gray margin-bottom-20"></div>
                        <p>Find maps and more for all locations.</p>
                        <button className="btn btn-theme btn-sm">Get Directions <i className="pe-7s-angle-right"></i></button>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 center-block">
                    <div className="appointment-item">
                        <i className="flaticon-first-aid-kit"></i>
                        <h5><a href="#">Appointments</a></h5>
                        <div className="line-border-center bg-gray margin-bottom-20"></div>
                        <p>Click in, walk in or call us today.</p>
                        <button className="btn btn-theme btn-sm">Get Appointment <i className="pe-7s-angle-right"></i></button>
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

export default Divider;