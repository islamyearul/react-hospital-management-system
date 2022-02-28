import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <>
                    <div class="preloader"></div>



{/* <!-- Header navbar end --> */}

<div class="coming-soon over-layer-black" id="coming-soon" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/3.jpg')` }}>
    <div class="inner-bg">
        <div class="container padding-top-bottom-150">
            <div class="row">
                <div class="col-sm-12 text-center">
                    <i class="flaticon-edit-1"></i>
                    {/* <!-- Count down area --> */}
                    <div class="timer">
                        <div class="days-wrapper">
                            <span class="days"></span> <br></br> days
                        </div>
                        <div class="hours-wrapper">
                            <span class="hours"></span> <br></br> hours
                        </div>
                        <div class="minutes-wrapper">
                            <span class="minutes"></span> <br></br> minutes
                        </div>
                        <div class="seconds-wrapper">
                            <span class="seconds"></span> <br></br> seconds
                        </div>
                    </div>
                    <div class="content">
                        <h2>We're coming soon</h2>
                        <p> We are working very hard on the new version of our site. <br></br> It will bring a lot of new features. Stay tuned!</p>
                        <a href="index-2.html"><button type="submit" class="btn btn-theme hvr-bounce-to-top" data-text="Send Message"><span>Back To Home Page</span></button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            </>
        );
    }
}

export default About;