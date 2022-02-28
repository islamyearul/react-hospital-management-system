import React, { Component } from 'react';
import { FaRibbon, FaHeartbeat, FaMedkit, FaAngleRight } from "react-icons/fa";
import {Link} from 'react-router-dom'

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
                        <h1 className='text-white'><span>{<FaRibbon></FaRibbon>}</span></h1>
                        <h5><Link to={'/doctors'}>Our Doctors</Link></h5>
                        <div className="line-border-center bg-gray margin-bottom-20"></div>
                        <p>Choose by name, specialty, city and more.</p>
                        <Link to={'/doctors'}><button className="btn btn-theme btn-sm">Find a Doctor {<FaAngleRight></FaAngleRight>}</button></Link>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div className="appointment-item">
                    <h1 className='text-white'><span>{<FaHeartbeat></FaHeartbeat>}</span></h1>
                        <h5><Link to={'/service'}>Department & Service</Link></h5>
                        <div className="line-border-center bg-gray margin-bottom-20"></div>
                        <p>Find maps and more for all locations.</p>
                        <Link to={'/service'}><button className="btn btn-theme btn-sm">Get Directions {<FaAngleRight></FaAngleRight>}</button></Link>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 center-block">
                    <div className="appointment-item">
                    <h1 className='text-white'><span>{<FaMedkit></FaMedkit>}</span></h1>
                        <h5><Link to={'/appointment'} >Appointments</Link></h5>
                        <div className="line-border-center bg-gray margin-bottom-20"></div>
                        <p>Click in, walk in or call us today.</p>
                        <Link to={'/appointment'}> <button className="btn btn-theme btn-sm">Get Appointment {<FaAngleRight></FaAngleRight>}</button></Link>
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