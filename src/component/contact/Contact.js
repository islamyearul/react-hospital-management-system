import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <>
                
    <section class="inner-bg over-layer-black" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/4.jpg')` }}>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="mini-title inner-style-2">
                        <h3>Contact Us</h3>
                        <p><a href="index-one.html">Home</a> <span class="fa fa-angle-right"></span> <a href="#">Contact</a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section>
        <div class="container">
            <div class="section-content">
                <div class="row">
                    <div class="col-md-7">
                        <div class="section-title margin-left-20 ">
                            <h6>Contact</h6>
                            <h2>Get in Touch</h2>
                            <div class="small-line-border-2"></div>
                        </div>
                        <form id="ajax-contact" method="post" action="https://heatmaponline.com/html/medcative/php/contact.php">
                            <div class="col-md-6">
                                <input type="text" name="name" id="name" class="form-control" placeholder="Your Name" required />
                            </div>
                            <div class="col-md-6">
                                <input type="email" name="email" id="email" class="form-control" placeholder="Your Email"  required />
                            </div>
                            <div class="col-md-12">
                                <input type="text" name="subject" class="form-control" placeholder="Subject" id="subject" required /> 
                            </div>
                            <div class="col-md-12">
                                <div class="contact-textarea">
                                    <textarea class="form-control" rows="6" placeholder="Wright Message" id="message" name="message" required></textarea>
                                    <button class="btn btn-theme" type="submit" value="Submit Form">Send Message</button>
                                </div>
                            </div>
                            <div id="form-messages"></div>
                        </form>
                    </div>
                    <div class="col-md-5 contact-info margin-top-60">
                        <div class="service-item style-1 bg-f8">
                            <div class="service-icon">
                                <i class="pe-7s-map"></i>
                            </div>
                            <div class="content">
                                <h5><a href="#" class="color-333">Contact Info</a></h5>
                                <p>5B Streat, City 50987 New Town US, <br></br> Khulna, BD</p>
                            </div>
                        </div>
                        <div class="service-item style-1 bg-f8">
                            <div class="">
                                <i class="pe-7s-clock"></i>
                            </div>
                            <div class="content">
                                <h5><a href="#" class="color-333">Business Hours</a></h5>
                                <p>Monday-Friday: 10am to 8pm <br></br> Saturday: 11am to 3pm</p>
                            </div>
                        </div>
                        <div class="service-item style-1 bg-f8">
                            <div class="">
                                <i class="pe-7s-mail-open"></i>
                            </div>
                            <div class="content">
                                <h5><a href="#" class="color-333">Email</a></h5>
                                <p>info@bdcoder.com <br></br> set-info@bdcoder.com </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="map">
            <h1>Here is Google MAp</h1>
        </div>
    </section>

   {/* <!-- divider start --> */}
    <section class="service-area over-layer-default" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/5.jpg')` }}>
        <div class="container padding-bottom-none padding-top-40">
            <div class="section-content">
                <div class="row">
                    <div class="col-sm-12 col-md-4">
                        <div class="service-item style-1 text-white border-right">
                            <div class="service-icon">
                                <i class="pe-7s-call"></i>
                            </div>
                            <div class="content">
                                <h5><a href="#">Give us a Call</a></h5>
                                <p>+970-438-3258</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4">
                        <div class="service-item style-1 text-white border-right">
                            <div class="">
                                <i class="pe-7s-mail-open"></i>
                            </div>
                            <div class="content">
                                <h5><a href="#">Send us a Message</a></h5>
                                <p>Your_malil@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4">
                        <div class="service-item style-1 text-white">
                            <div class="">
                                <i class="pe-7s-map-marker"></i>
                            </div>
                            <div class="content">
                                <h5><a href="#">Visit our Location</a></h5>
                                <p>12 New york, USA </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- divider end --> */}
            </>
        );
    }
}

export default Contact;