import React, { Component } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import {Link} from 'react-router-dom'

class Slider extends Component {
    render() {
        return (
            <>
                    {/* <!-- Start  bootstrap-touch-slider Slider --> */}
    <div id="bootstrap-touch-slider" className="carousel bs-slider fade  control-round indicators-line" data-ride="carousel" data-pause="hover" data-interval="5000" >

{/* <!-- Indicators --> */}
<ol className="carousel-indicators">
    <li data-target="#bootstrap-touch-slider" data-slide-to="0" className="active"></li>
    <li data-target="#bootstrap-touch-slider" data-slide-to="1"></li>
    <li data-target="#bootstrap-touch-slider" data-slide-to="2"></li>
</ol>

{/* <!-- Wrapper For Slides --> */}
<div className="carousel-inner" role="listbox">
{/* <!-- Third Slide --> */}
<div className="item active">
    {/* <!-- Slide Background --> */}
    <img src="img/bg/3.jpg" alt="Slider Images"  className="slide-image"/>
    <div className="bs-slider-overlay"></div>

    <div className="slide-text slide_style_left">
        <h1 data-animation="animated fadeInRight">The <span className="color-defult"> Medicative </span>Hospital</h1>
        <p data-animation="animated fadeInLeft">Our team of over 7000 doctors join me in giving you the best <br></br>  of modern healthcare to ensure you stay healthy, always.</p>
        <Link to={'/ourservice'} target="_blank" className="btn btn-default" data-animation="animated fadeInLeft">Read more</Link>
        <Link to={'/appointment'} target="_blank"  className="btn btn-primary" data-animation="animated fadeInRight">Take A Appointment</Link>
    </div>
</div>
{/* <!-- End of Slide --> */}

{/* <!-- Second Slide --> */}
<div className="item">            
    {/* <!-- Slide Background --> */}
    <img src="img/bg/2.jpg" alt="Slider Images" className="slide-image"/>
    <div className="bs-slider-overlay"></div>
    {/* <!-- Slide Text Layer --> */}
    <div className="slide-text slide_style_center">
        <h1 data-animation="animated bounceInDown"> Treat<span className="color-defult"> heart</span> disease.</h1>
        <p data-animation="animated lightSpeedIn">consectetur adipisicing elit. Eligendi vel ipsam deleniti dignissimos <br></br> corporis consequatur possimus eaque voluptates.</p>
        <Link to={'/service'} target="_blank" className="btn btn-default" data-animation="animated fadeInUp">Read More</Link>
        <Link to={'/ourservice'} target="_blank"  className="btn btn-primary" data-animation="animated fadeInRight">Take A Appointment</Link>
    </div>
</div>
{/* <!-- End of Slide --> */}

{/* <!-- Third Slide --> */}
<div className="item">            
    {/* <!-- Slide Background --> */}
    <img src="img/bg/1.jpg" alt="Slider Images"  className="slide-image"/>
    <div className="bs-slider-overlay"></div>
    {/* <!-- Slide Text Layer --> */}
    <div className="slide-text slide_style_right">
        <h1 data-animation="animated fadeInLeft">Life Wellness<span className="color-defult"> Programs</span></h1>
        <p data-animation="animated fadeInRight">Stay in touch and in shape with periodic tips from our <br></br>  in-house  experts on wellness, fitness and nutrition.</p>
        <Link to={'/ourservice'} target="_blank" className="btn btn-default" data-animation="animated fadeInLeft">Read More</Link>
        <Link to={'/appointment'} target="_blank"  className="btn btn-primary" data-animation="animated fadeInRight">Take A Appointment</Link>
    </div>
</div>
{/* <!-- End of Slide --> */}
</div>
{/* <!-- End of Wrapper For Slides --> */}

{/* <!-- Left Control --> */}
<a className="left carousel-control" href="#bootstrap-touch-slider" role="button" data-slide="prev">
<span className="" aria-hidden="true">{<FaAngleLeft></FaAngleLeft>} </span>
<span className="sr-only">Previous</span>
</a>

{/* <!-- Right Control --> */}
<a className="right carousel-control" href="#bootstrap-touch-slider" role="button" data-slide="next">
<span className="" aria-hidden="true">{<FaAngleRight></FaAngleRight>}</span>
<span className="sr-only">Next</span>
</a>

</div> 
{/* <!-- End  bootstrap-touch-slider Slider --> */}
            </>
        );
    }
}

export default Slider;