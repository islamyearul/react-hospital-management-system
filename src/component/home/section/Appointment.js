import React, { Component } from 'react';

class Appointment extends Component {
    render() {
        return (
            <>
               <section className=" animatedParent animateOnce">
            <div className="container padding-bottom-none">
                <div className="section-content">
                    <div className="row">
                        <div className="col-md-6">
                            <img className="animated fadeInLeftShort slow delay-500 booking-cantact-img" src="img/bg/c1.png" alt="" />
                        </div>
                        <div className="col-md-6 bg-f8 padding-tb margin-bottom-80 animated fadeInRightShort slow delay-500">
                            <div className="booking-from">
                                <h2>Make An <span className="color-defult">Appointment</span></h2>
                                <div className="border-style-2 margin-bottom-30"></div>
                                <p className="margin-bottom-30">Consectetur adipisicing elit. Id dignissimos atque debitis esse possimus, <br></br> fuga tenetur rem et. Vitae, repudiandae.</p>
                                <form method="post" action="#">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input type="text" name="name" id="fname" className="form-control" placeholder="First Name" required /> 
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" name="name" id="lname" className="form-control" placeholder="Last Name" required />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" name="subject" className="form-control" placeholder="Input Subject" id="subject" required />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" name="Reservation" className="form-control" placeholder="Input Date" id="Reservation" required />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="email" name="email" className="form-control" placeholder="Your Email Here" id="email" required />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" name="phone" className="form-control" placeholder="Your Phone" id="phone" required />
                                        </div>
                                        <div className="col-md-12">
                                            <div className="contact-textarea">
                                                <textarea className="form-control" rows="6" placeholder="Wright Message" id="message" name="message" required></textarea>
                                                <button className="btn btn-theme" type="submit" value="Submit Form">Send Message</button>
                                            </div>
                                        </div>
                                        <div id="form-messages"></div>
                                    </div>
                                </form>
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

export default Appointment;