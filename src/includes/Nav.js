import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

class Nav extends Component {
     openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
 
    render() {


        return (
            <>
                <div className="header-topbar style-2">
        <div className="container padding-none">
            <div className="row">
                <div className="col-md-8 col-sm-6 welcome-top">
                    <ul className="list-inline top-icon">
                        <li><i className="fa fa-envelope"></i> yearulislamonem@gmail.com</li>
                        <li><i className="fa fa-clock-o"></i> Mon - Sat 8.00 - 18.00</li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-6">
                    <ul className="list-inline text-right icon-style-1">
                        <li className=" hvr-rectangle-out"><a href="#" target="_blank" rel="noopener noreferrer" onClick={() => this.openInNewTab('https://twitter.com')}>{<FaTwitter></FaTwitter>}</a>
                        </li>
                        <li className=" hvr-rectangle-out"><a href="#" onClick={() => this.openInNewTab('https://linkedin.com')}>{<FaLinkedin></FaLinkedin>}</a>
                        </li>
                        <li className=" hvr-rectangle-out"><a href="#" onClick={() => this.openInNewTab('https://facebook.com')}>{<FaFacebookF></FaFacebookF>}</a>
                        </li>
                        <li className=" hvr-rectangle-out"><a href="#" onClick={() => this.openInNewTab('https://instagram.com')}>{<FaInstagram></FaInstagram>}</a>
                        </li>                      
                    
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div className="main-navbar conner-style style-2 position-fixed">
        <div className="container padding-none">
            <div className="row">
                <div className="col-md-12">
                    <nav className="navbar navbar-default">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand dis-none" href="index-2.html"><img src="img/logo-black.png" alt="" />
                                </a>
                            <Link className="navbar-brand dis-block" to={'/'}><img src="img/logo-black.png" alt="" />
                                </Link>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1" data-hover="dropdown" data-animations-delay="1.8s" data-animations="fadeInUp">
                            <ul className="nav navbar-nav bg-none navbar-right style-3">
                                <li className="dropdown active">
                                    <Link to={'/'} className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span data-hover="Home">Home</span> </Link>
                                   
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span data-hover="Depertment">Depertment <i className="fa fa-angle-down" aria-hidden="true"></i></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="depertment-1.html">Cardilogists Depertment</a>
                                        </li>
                                        <li><a href="depertment-2.html">Orthopaedics Depertment</a>
                                        </li>
                                        <li><a href="depertment-3.html">Gastroenlogy Depertment</a>
                                        </li>
                                        <li><a href="depertment-4.html">Neuroscien Depertment</a>
                                        </li>
                                        <li><a href="depertment-5.html">Spine Depertment</a>
                                        </li>
                                        <li><a href="depertment-6.html">Cancer Depertment</a>
                                        </li>
                                        <li><a href="depertment-3.html">Colorectal Depertment</a>
                                        </li>
                                        <li><a href="depertment-4.html">Bariatric Depertment</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <Link to='/doctors' className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <span data-hover="Doctors">Doctors</span></Link>
                                    
                                </li>
                                <li className="dropdown">
                                    <Link to='/portfolio' className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span data-hover="Portfolio">Portfolio</span></Link>
                                   
                                </li>
                                <li className="dropdown">
                                    <Link to={'/appointment'} className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span data-hover="Pages">Appointment</span></Link>
                                   
                                </li>
                                <li className="dropdown">
                                    <Link to={'/blog'} className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span data-hover="Blog">Blog</span></Link>
                                   
                                </li>
                                <li className="dropdown">
                                    <Link to={'/contact'} className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span data-hover="Contact">Contact </span></Link>
                                   
                                </li>
                                <li>
                                    <div className="dropdown-buttons">
                                        <div className="btn-group menu-search-box">
                                            <button type="button" className="btn dropdown-toggle" id="header-drop-3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="icon icon-Search"></i></button>
                                            <ul className="dropdown-menu dropdown-menu-right dropdown-animation" aria-labelledby="header-drop-3">
                                                <li>
                                                    <form role="search" className="search-box">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Search" />
                                                            <i className="icon icon-Search form-control-feedback"></i>
                                                        </div>
                                                    </form>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button type="button" className="btn dropdown-toggle" id="header-drop-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="icon icon-ShoppingCart"></i><span className="menu-cart">8</span></button>
                                            <ul className="dropdown-menu dropdown-menu-right cart dropdown-animation" aria-labelledby="header-drop-4">
                                                <li>
                                                    <table className="table table-hover">
                                                        <thead>
                                                        <tr>
                                                            <th className="quantity">QTY</th>
                                                            <th className="product">Product</th>
                                                            <th className="amount">Subtotal</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td className="quantity">2 x</td>
                                                            <td className="product"><a href="shop-product.html">Android 4.4 Smartphone</a><span className="small">4.7" Dual Core 1GB</span></td>
                                                            <td className="amount">$199.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="quantity">3 x</td>
                                                            <td className="product"><a href="shop-product.html">Android 4.2 Tablet</a><span className="small">7.3" Quad Core 2GB</span></td>
                                                            <td className="amount">$299.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="quantity">3 x</td>
                                                            <td className="product"><a href="shop-product.html">Desktop PC</a><span className="small">Quad Core 3.2MHz, 8GB RAM, 1TB Hard Disk</span></td>
                                                            <td className="amount">$1499.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="total-quantity" colspan="2"><strong>Total 8 Items</strong></td>
                                                            <td className="total-amount"><strong>$1997.00</strong></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                    <div className="panel-body text-right">
                                                        <a href="#" className="menu-shop-btn">View Cart</a>
                                                        <a href="#" className="menu-shop-btn">Checkout</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
            </>
        );
    }
}

export default Nav;