import React, { Component } from 'react';
import axios from "axios";

import { FaMedrt,  } from "react-icons/fa";
import Context from '../../baseUral/Baseurl';
import { useContext } from 'react';


class Appointmentsec extends Component {
    constructor(props) {
        super(props)
          this.state = {  
            app_p_name: '',          
            app_p_phone: '',          
            app_doc_id: '',          
            app_date: '',          
            app_message: '',          
            app_status: 'Active',  

              DoctorsSchedure:[],
              DoctorsList:[],
              errorMessage: [],
                  }
                   this.handleSubmit = this.handleSubmit.bind(this);
          }
          
              OnchangeHandler = (event) => {
        //var newname = event.target.value;
        var inputName = event.target.name;
        var inputvalue = event.target.value;
        this.setState({[inputName]: inputvalue})
         };
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
            axios.get('http://127.0.0.1:8000/api/get-doctors').then(res => 
            {    
             this.setState({DoctorsList: res.data});
            //console.log(res);
             })
               .catch(error => {
                this.setState({ errorMessage: error.message });
                console.error('There was an error!', error);
            });
            
             }

            handleSubmit(event) {
                event.preventDefault();
             
    
           axios.post('http://127.0.0.1:8000/api/add-appointment', this.state).then(res => 
           {    
                //console.log(res.data);
                alert(res.data.message)
            }).catch(error => {
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
                                <form method="post" action="" onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input type="text" name="app_p_name" id="fname" className="form-control" placeholder="Patient Name" onChange={this.OnchangeHandler}  required /> 
                                        </div>
                                        <div className="col-md-6">
                                            <input type="number" name="app_p_phone" id="fname" className="form-control" onChange={this.OnchangeHandler}  placeholder="Patient Phone" required /> 
                                        </div>
                                        <div className="col-md-6">
                                            <select name="app_doc_id" className="form-control" onChange={this.OnchangeHandler} >
                                                    <option selected disabled >---Select Doctor---</option>
                                                  {this.state.DoctorsSchedure.map(docs => 
                                                    <option value={docs.id}>{docs.doc_name}</option>
                                                    )}
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <input type="date" name="app_date" className="form-control" placeholder="Input Subject" id="subject" onChange={this.OnchangeHandler}  required />
                                        </div>
                                        <div className="col-md-12">
                                            <div className="contact-textarea">
                                                <textarea className="form-control" rows="6" placeholder="Wright Message" id="message" name="app_message" onChange={this.OnchangeHandler}  required></textarea>
       
                                            </div>
                                        </div>
                                        {/* <span className='text-danger'>{this.state.app_p_name}</span> */}
                                        {/* <div class=" col-md-6 form-control">

                                                <input name="app_status" onChange={this.OnchangeHandler}  type="radio" value="active" /> &nbsp; Active &nbsp;
                                                <input name="app_status" onChange={this.OnchangeHandler}  type="radio" value="inactive" /> &nbsp; Inactive
                                        </div> */}
                                        <button className="btn btn-theme" type="submit" value="Submit Form">Add Appointment</button>
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