import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { FaPhoneAlt, FaMailBulk, FaFacebookF, FaTwitter, FaLinkedin, FaInstagram, FaAngleRight } from "react-icons/fa";


class Footer extends Component {
    render() {
        return (
            <>
       <footer className="bg-faded">
        <div className="container">
            <div className="section-content">
                <div className="row margin-top-30">
                    <div className="col-md-4">
                      <div className="footer-item footer-widget-one">
                          <img alt="" src="img/logo.png" className="footer-logo" />
                          <p>Voluptate porro esse repellat quo exercitationem debitis incidunt.</p>

                          <ul className="address">
                            <li>{<FaPhoneAlt></FaPhoneAlt>}&nbsp; Phone: 01825 -682260</li>
                            <li>{<FaMailBulk></FaMailBulk>} &nbsp;<a href="mailto:">Email: yearulislamonem@gmail.com</a></li>
                          </ul>
                          
                          <hr></hr>
                          <ul className="social-icon bg-theme">
                        <li className=" hvr-rectangle-out m-1" style={{margin: "5px" }}><a href="#" target="_blank" rel="noopener noreferrer" onClick={() => this.openInNewTab('https://twitter.com')}>{<FaTwitter></FaTwitter>}</a>
                        </li>
                        <li className=" hvr-rectangle-out m-1" style={{margin: "5px" }}><a href="#" onClick={() => this.openInNewTab('https://linkedin.com')}>{<FaLinkedin></FaLinkedin>}</a>
                        </li>
                        <li className=" hvr-rectangle-out m-1" style={{margin: "5px" }}><a href="#" onClick={() => this.openInNewTab('https://facebook.com')}>{<FaFacebookF></FaFacebookF>}</a>
                        </li>
                        <li className=" hvr-rectangle-out m-1" style={{margin: "5px" }}><a href="#" onClick={() => this.openInNewTab('https://instagram.com')}>{<FaInstagram></FaInstagram>}</a>
                        </li>
                        
                      
                    </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                      <div className="footer-item">
                        <div className="footer-title">
                          <h4>Menus </h4>
                          <div className="border-style-2"></div>
                        </div>
                        <ul className="footer-list border-deshed color-icon">
                          <li>{<FaAngleRight></FaAngleRight>} &nbsp;<Link to={'/appointment'}>Appintment</Link></li>
                          <li>{<FaAngleRight></FaAngleRight>} &nbsp;<Link to={'/doctors'}>Service</Link></li>
                          <li>{<FaAngleRight></FaAngleRight>} &nbsp;<Link to={'/portfolio'}>Portfolio</Link></li>
                          <li>{<FaAngleRight></FaAngleRight>} &nbsp;<Link to={'/blog'}>Blog</Link></li>
                          <li>{<FaAngleRight></FaAngleRight>} &nbsp;<Link to={'/contact'}>Contact</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="footer-item">
                        <div className="footer-title">
                          <h4>Our Services </h4>
                          <div className="border-style-2"></div>
                        </div>
                        <ul className="footer-list border-deshed color-icon">
                          <li><i className="pe-7s-angle-right"></i><a href="#">Transplants</a></li>
                          <li><i className="pe-7s-angle-right"></i><a href="#">Gastroenterology</a></li>
                          <li><i className="pe-7s-angle-right"></i><a href="#">Orthopaedics</a></li>
                          <li><i className="pe-7s-angle-right"></i><a href="#">Spine Care</a></li>
                          <li><i className="pe-7s-angle-right"></i><a href="#">Cancer Care</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="footer-item">
                        <div className="footer-item clearfix">
                          <div className="footer-title">
                            <h4>Fliker Feed</h4>
                            <div className="border-style-1"></div>
                          </div>
                          <div className="flicker-feed gutter">
                            <a href="img/flicker/1.jpg" className="lightbox-image" title="Image Caption Here"><img src="img/flicker/1.jpg" alt="" /></a>
                            <a href="img/flicker/2.jpg" className="lightbox-image" title="Image Caption Here"><img src="img/flicker/2.jpg" alt="" /></a>
                            <a href="img/flicker/3.jpg" className="lightbox-image" title="Image Caption Here"><img src="img/flicker/3.jpg" alt="" /></a>
                            <a href="img/flicker/4.jpg" className="lightbox-image" title="Image Caption Here"><img src="img/flicker/4.jpg" alt="" /></a>
                            <a href="img/flicker/5.jpg" className="lightbox-image" title="Image Caption Here"><img src="img/flicker/5.jpg" alt="" /></a>
                            <a href="img/flicker/6.jpg" className="lightbox-image" title="Image Caption Here"><img src="img/flicker/6.jpg" alt="" /></a>
                            <a href="img/flicker/7.jpg" className="lightbox-image" title="Image Caption Here"><img src="img/flicker/7.jpg" alt="" /></a>
                            <a href="img/flicker/8.jpg" className="lightbox-image" title="Image Caption Here"><img src="img/flicker/8.jpg" alt="" /></a>
                            <a href="img/flicker/9.jpg" className="lightbox-image" title="Image Caption Here"><img src="img/flicker/9.jpg" alt="" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <section className="footer-copy-right bg-f9">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center">
            <p><b>Service</b> Is Our Aim</p>
          </div>
          <div className="col-md-4 text-center">
            <p><Link target="_blank" to={'/'}>Islam Diagnostic Center & Hospital Soluation</Link></p>
          </div>
          <div className="col-md-4 text-center">
          <p><b>Come</b> for Serve & Leave with Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
            </>
        );
    }
}

export default Footer;