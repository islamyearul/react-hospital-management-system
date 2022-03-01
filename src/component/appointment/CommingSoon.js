import React, { Component } from 'react';
import CountdownTimer from './commingsoon/CountdownTimer';
import {Link} from 'react-router-dom'

class CommingSoon extends Component {
    render() {
        return (
            <div>
                 {/* <!-- Header navbar end --> */}
<div className="coming-soon over-layer-black" id="coming-soon" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/3.jpg')` }}>
    <div className="inner-bg">
        <div className="container padding-top-bottom-150">
            <div className="row">
                <div className="col-sm-12 text-center">
                    <i className="flaticon-edit-1"></i>
                    {/* <!-- Count down area --> */}
                    <div className="timer">
                        <CountdownTimer></CountdownTimer>
                        
                    </div>
                    <div className="content">
                        <h2>We're coming soon</h2>
                        <p> We are working very hard on the new version of our site. <br></br> It will bring a lot of new features. Stay tuned!</p>
                        <Link to={'/'}><button type="submit" className="btn btn-theme hvr-bounce-to-top" data-text="Send Message"><span>Back To Home Page</span></button></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            </div>
        );
    }
}

export default CommingSoon;