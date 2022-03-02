import React, { Component } from 'react';
import axios from "axios";
import { FaMedrt,  } from "react-icons/fa";

class ServiceContent extends Component {
    constructor(props) {
        super(props)
          this.state = {            
              Service:[],
              errorMessage: [],
                  }
          }
          Base_url_of_database = 'http://localhost/react/react-hospital-management-system/api/';
          componentDidMount(){
            //get request
            axios.get(this.Base_url_of_database + 'service.php').then(res => 
            {    
            this.setState({Service: res.data});
             })
               .catch(error => {
                this.setState({ errorMessage: error.message });
                console.error('There was an error!', error);
            });
            
    }

    render() {
        return (
            <div>
                <section className="service-area bg-f8 animatedParent animateOnce">
            <div className="container">
                <div className="section-title">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <h2>Our <span className="color-defult">Services</span></h2>
                            <div className="line-border-center bg-defult"></div>
                            <p>Repellendus error placeat numquam doloribus perferendis consequatur maxime molestiae soluta Corporis quidem quaerat accusantium omnis repudiandae nulla recusandae</p>
                        </div>
                    </div>
                </div>
                <div className="section-content">
                    <div className="row">
                    {this.state.Service.map(Service => 
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="service-item text-center style-3">
                                <span className="">{<FaMedrt></FaMedrt>}</span>
                                <h4><a href="#">{Service.name}</a></h4>
                                <div className="border-center"></div>
                                <p>{Service.message}</p>
                                <button type="button" className="btn btn-theme margin-top-20" data-text="Send Message">Read More</button>
                            </div>
                        </div>
                      )}
                    </div>
                </div>
            </div>
            </section>
            <section>

            </section>
            </div>
        );
    }
}

export default ServiceContent;