import React, { Component } from 'react';
import { FaPhoneAlt, FaMailBulk, FaMapMarkerAlt } from "react-icons/fa";


class Divider2 extends Component {
    render() {
        return (
            <>
               <section className="service-area over-layer-default" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/5.jpg')` }}>
            <div className="container padding-bottom-none padding-top-40">
                <div className="section-content">
                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            <div className="service-item style-1 text-white border-right">
                                <div className="service-icon">
                                <span>{<FaPhoneAlt></FaPhoneAlt>}</span>
                                </div>
                                <div className="content">
                                    <h5><a href="#">Give us a Call</a></h5>
                                    <p>+88 01825 682260</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className="service-item style-1 text-white border-right">
                                <div className="">
                                <span>{<FaMailBulk></FaMailBulk>}</span>
                                </div>
                                <div className="content">
                                    <h5><a href="#">Send us a Message</a></h5>
                                    <p>islamyearul@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className="service-item style-1 text-white">
                                <div className="">
                                   <span>{<FaMapMarkerAlt></FaMapMarkerAlt>}</span>
                                </div>
                                <div className="content">
                                    <h5><a href="#">Visit our Location</a></h5>
                                    <p>102, Nahar Manson, Motijheel C/A, Dhaka </p>
                                </div>
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

export default Divider2;