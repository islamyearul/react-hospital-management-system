import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <>
                 <footer className="bg-faded">
        <div className="container">
            <div className="section-content">
                <div className="row margin-top-30">
                    <div className="col-md-3">
                      <div className="footer-item footer-widget-one">
                          <img alt="" src="img/logo.png" className="footer-logo" />
                          <p>Voluptate porro esse repellat quo exercitationem debitis incidunt.</p>

                          <ul className="address">
                            <li><i className="pe-7s-call"></i>Phone: 001 (407) 901-6400</li>
                            <li><i className="pe-7s-mail"></i><a href="mailto:">Email: info@bdcoder.com</a></li>
                          </ul>
                          
                          <hr></hr>
                          <ul className="social-icon bg-theme">
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
                          </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                      <div className="footer-item">
                        <div className="footer-title">
                          <h4>Our Peges </h4>
                          <div className="border-style-2"></div>
                        </div>
                        <ul className="footer-list border-deshed color-icon">
                          <li><i className="pe-7s-angle-right"></i><a href="#">About Us</a></li>
                          <li><i className="pe-7s-angle-right"></i><a href="#">Services</a></li>
                          <li><i className="pe-7s-angle-right"></i><a href="#">Gallery</a></li>
                          <li><i className="pe-7s-angle-right"></i><a href="#">Blog</a></li>
                          <li><i className="pe-7s-angle-right"></i><a href="#">Contact</a></li>
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
          <div className="col-12 text-center">
            <p><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></p>
          </div>
        </div>
      </div>
    </section>
            </>
        );
    }
}

export default Footer;