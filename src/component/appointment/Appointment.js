
import React, { Component } from 'react';
import Appointmentsec from '../home/section/Appointmentsec';


class Appointment extends Component {
    render() {
        return (
            <>

{/* <!-- Header navbar end --> */}

<div className="coming-soon over-layer-black" id="coming-soon" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/3.jpg')` }}>
    <div className="inner-bg">
        <div className="container padding-top-bottom-150">
            <div className="row">
                <div className="col-sm-12 text-center">
                    <i className="flaticon-edit-1"></i>
                    {/* <!-- Count down area --> */}
                    <div className="timer">
                        <div className="days-wrapper">
                            <span className="days"></span> <br></br> days
                        </div>
                        <div className="hours-wrapper">
                            <span className="hours"></span> <br></br> hours
                        </div>
                        <div className="minutes-wrapper">
                            <span className="minutes"></span> <br></br> minutes
                        </div>
                        <div className="seconds-wrapper">
                            <span className="seconds"></span> <br></br> seconds
                        </div>
                    </div>
                    <div className="content">
                        <h2>We're coming soon</h2>
                        <p> We are working very hard on the new version of our site. <br></br> It will bring a lot of new features. Stay tuned!</p>
                        <a href="index-2.html"><button type="submit" className="btn btn-theme hvr-bounce-to-top" data-text="Send Message"><span>Back To Home Page</span></button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<Appointmentsec></Appointmentsec>
            </>
        );
    }
}

export default Appointment;