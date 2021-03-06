import React, { Component } from 'react';
import axios from "axios";

import $ from 'jquery';
import { FaPhoneAlt, FaMailBulk, FaMapMarkerAlt, FaClock  } from "react-icons/fa";
// import Baseurl from '../baseUral/Baseurl';

class Contact extends Component {
    constructor(props) {
        super(props)
          this.state = {
              name:'',
              email:'',
              subject:'',
              message:'',
              emailValidationError:'',
              companyAddress:[],
              errorMessage: [],
                  }
                  this.handleSubmit = this.handleSubmit.bind(this);
          } //end of constructor

     OnchangeHandler = (event) => {
        //var newname = event.target.value;
        var inputName = event.target.name;
        var inputvalue = event.target.value;
        this.setState({[inputName]: inputvalue})

        if(inputName === 'email'){
            var Emailpattern = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
            if(!Emailpattern.test(inputvalue)){
                this.setState({emailValidationError: "Email Is Not Valid"})
            }
           
        
        }
    };
    Base_url_of_database = 'http://localhost/react/react-hospital-management-system/api/';
    componentDidMount(){
            //get request
            axios.get(this.Base_url_of_database + 'companyAddress.php').then(res => 
            {    
            this.setState({companyAddress: res.data});
             })
               .catch(error => {
                this.setState({ errorMessage: error.message });
                console.error('There was an error!', error);
            });
            
    } // End Of Digmount

    handleSubmit(event) {
        event.preventDefault();
     
        let formData = new FormData();
        formData.append('name', this.state.name)
        formData.append('email', this.state.email)
        formData.append('subject', this.state.subject)
        formData.append('message', this.state.message)
        
        axios({
            method: 'post',
            url:  this.Base_url_of_database + 'addGetInTouch.php',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (response) {
            //handle success
            //console.log(response)
            alert('New Contact Successfully Added.');  
        })
        .catch(function (response) {
            //handle error
            alert('Something Is Wrong');  
            //console.log(response)
        });
     
      }//end of submit

    render() {
        return (
            <>
                
    <section className="inner-bg over-layer-black" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/4.jpg')` }}>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="mini-title inner-style-2">
                        <h3>Contact Us</h3>
                        <p><a href="index-one.html">Home</a> <span className="fa fa-angle-right"></span> <a href="#">Contact</a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section>
        <div className="container">
            <div className="section-content">
                <div className="row">
                    <div className="col-md-7">
                        <div className="section-title margin-left-20 ">
                            <h6>Contact</h6>
                            <h2>Get in Touch</h2>
                            <div className="small-line-border-2"></div>
                        </div>
                        <form id="ajax-contact" method="post" action="" onSubmit={this.handleSubmit}>
                            <div className="col-md-6">
                                <input  type="text" name="name" id="name" className="form-control" placeholder="Your Name" onChange={this.OnchangeHandler} />
                                <span className='text-danger'></span>
                            </div>
                            <div className="col-md-6">
                                <input type="email" name="email" id="email" className="form-control" placeholder="Your Email" onChange={this.OnchangeHandler} required />
                                <span className='text-danger'>{this.state.emailValidationError}</span>
                            </div>
                            <div className="col-md-12">
                                <input type="text" name="subject" className="form-control" placeholder="Subject" id="subject" onChange={this.OnchangeHandler} required /> 
                                <span className='text-danger'></span>
                            </div>
                            <div className="col-md-12">
                                <div className="contact-textarea">
                                    <textarea className="form-control" rows="6" placeholder="Wright Message" id="message" name="message" onChange={this.OnchangeHandler} required></textarea>
                                    <span className='text-danger'></span>  
                                </div>
                            </div>
                            <div className="col-md-12">
                            <button className="btn btn-theme" type="submit" value="Submit Form">Send Message</button>
                            </div>
                            {/* <div id="form-messages"></div> */}
                        </form>
                    </div>
                    <div className="col-md-5 contact-info margin-top-60">
                        <div className="service-item style-1 bg-f8">
                            <div className="service-icon">
                            {<FaMapMarkerAlt></FaMapMarkerAlt>}
                            </div>
                            <div className="content">
                                <h5><a href="#" className="color-333">Contact Info</a></h5>
                                <p>{this.state.companyAddress.map(company => company.address )}<br></br></p>
                            </div>
                        </div>
                        <div className="service-item style-1 bg-f8">
                            <div className="">
                            {<FaClock ></FaClock >}
                            </div>
                            <div className="content">
                                <h5><a href="#" className="color-333">Business Hours</a></h5>
                                <p>Monday-Friday: 10am to 8pm <br></br> Saturday: 11am to 3pm</p>
                            </div>
                        </div>
                        <div className="service-item style-1 bg-f8">
                            <div className="">
                            {<FaMailBulk></FaMailBulk>}
                            
                            </div>
                            <div className="content">
                                <h5><a href="#" className="color-333">Email</a></h5>
                                <p>{this.state.companyAddress.map(company => company.email )}<br></br> {this.state.companyAddress.map(company => company.email2 )} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="map">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.501660642948!2d90.41378741498094!3d23.72948378459968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b859989fd797%3A0xf234fc70cefb96ab!2sIslam%20Chamber%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1646117631841!5m2!1sen!2sbd"
             width="100%" 
             height="450" 
             frameBorder="0"
             style={{ border: 0 }}
             allowfullscreen="" 
             aria-hidden="false"
             tabIndex="0"
             ></iframe>
        </div>
    </section>

   {/* <!-- divider start --> */}
    <section className="service-area over-layer-default" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/5.jpg')` }}>
        <div className="container padding-bottom-none padding-top-40">
            <div className="section-content">
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <div className="service-item style-1 text-white border-right">
                            <div className="service-icon">
                                {<FaPhoneAlt></FaPhoneAlt>}
                            </div>
                            <div className="content">
                                <h5><a href="#">Give us a Call</a></h5>
                                <p>{
                                    this.state.companyAddress.map(company =>
                                        company.cell
                                        )
                                }</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="service-item style-1 text-white border-right">
                            <div className="">
                                {<FaMailBulk></FaMailBulk>}
                            </div>
                            <div className="content">
                                <h5><a href="#">Send us a Message</a></h5>
                                <p>{
                                    this.state.companyAddress.map(company =>
                                        company.email
                                        )
                                }</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="service-item style-1 text-white">
                            <div className="">
                                {<FaMapMarkerAlt></FaMapMarkerAlt>}
                            </div>
                            <div className="content">
                                <h5><a href="#">Visit our Location</a></h5>
                                <p>
                                    {
                                    this.state.companyAddress.map(company =>
                                        company.address
                                        )
                                }
                                </p>
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