import React, { Component } from 'react';
import axios from "axios";

import { FaMedrt,  } from "react-icons/fa";
import Context from '../../baseUral/Baseurl';
import { useContext } from 'react';


class Appointmentsec extends Component {
    constructor(props) {
        super(props)
          this.state = {            
              DoctorsSchedure:[],
              errorMessage: [],
                  }
          }
          
          
          Base_url_of_database = 'http://localhost/react/react-hospital-management-system/api/';
          componentDidMount(){
            //get request
            axios.get(this.Base_url_of_database + 'doctorsSchedule.php').then(res => 
            {    
            this.setState({DoctorsSchedure: res.data});
             })
               .catch(error => {
                this.setState({ errorMessage: error.message });
                console.error('There was an error!', error);
            });
            
    }



    render() {
        return (
            <>
            <section className="service-area bg-f8 animatedParent animateOnce">
            <div className="container">
                <div className="section-title">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <h2>Doctors <span className="color-defult">Schedule</span></h2>
                            <div className="line-border-center bg-defult"></div>
                            <p>Repellendus error placeat numquam doloribus perferendis consequatur maxime molestiae soluta Corporis quidem quaerat accusantium omnis repudiandae nulla recusandae</p>
                        </div>
                    </div>
                </div>
                <div className="section-content">
                    <div className='row'>
                    {this.state.DoctorsSchedure.map(Schedule => 
                    
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="service-item text-center style-3">
                                <span className="">{<FaMedrt></FaMedrt>}</span>
                                <h4><a href="#">Doctor Name: {Schedule.doc_name}</a></h4>
                                <h4><a href="#">In Room: {Schedule.room}</a></h4>
                                <div className="border-center"></div>
                                <p className="m-1">Schedule Date: {Schedule.date}</p>
                                <p>Start Time: {Schedule.start_time} to {Schedule.end_time}</p>
                                <p>  Provide direct support to an individual, family or community by paying medical expenses for service.</p>
                                <button type="button" className="btn btn-theme margin-top-20" data-text="Send Message">Take Appointment</button>
                            </div>
                        </div>
                    
                    )}
                    </div>
                </div>
            </div>
            </section>
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

export default Appointmentsec;