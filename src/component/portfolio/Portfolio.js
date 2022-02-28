import React, { Component } from 'react';

class Portfolio extends Component {
    render() {
        return (
            <>
                 
    <section className="inner-bg over-layer-black" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/4.jpg')` }}>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="mini-title inner-style-2">
                        <h3>Portfolio</h3>
                        <p><a href="index-one.html">Home</a> <span className="fa fa-angle-right"></span> <a href="#">Portfolio</a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>

     {/* <!-- portfolio start --> */}
    <section className="gallery-area">
        <div className="container">
            <div className="section-content">
                <div className="row clearfix">
                    <div className="gallery-filter-item text-center">
                        <ul className="gallery-filter">
                            <li className="active"><a href="#" data-filter="*" className="current">All</a></li>
                            <li className=""><a href="#" data-filter=".gp-two" className="current">Transplants</a></li>
                            <li className=""><a href="#" data-filter=".gp-three" className="current">OHR Program</a></li>
                            <li className=""><a href="#" data-filter=".gp-four" className="current">SURGERY</a></li>
                            <li className=""><a href="#" data-filter=".gp-five" className="current">CRITICAL CARE</a></li>
                        </ul>
                    </div>

                    <div className="gallery col-3 gutter">
                        <div className="gallery-item gp-two">
                            <div className="thumb">
                                <img src="img/portfolio/1.jpg" alt="" />
                                <div className="gallery-hover">
                                    <div className="gallery-info">
                                        <div className="gallery-btn">
                                            <a href="img/portfolio/1.jpg" data-fancybox-group="gallery" className="lightbox-image" title="lightbox view"> <i className="pe-7s-graph2"></i>  </a>
                                        </div>
                                        <h4><a href="img/portfolio/1.jpg" data-fancybox-group="gallery" className="lightbox-image" title="lightbox view">Your title here</a></h4>
                                        <p><a href="#">Sub Title here</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-item gp-three">
                            <div className="thumb">
                                <img src="img/portfolio/2.jpg" alt="" />
                                <div className="gallery-hover">
                                    <div className="gallery-info">
                                        <div className="gallery-btn">
                                            <a href="img/portfolio/2.jpg" data-fancybox-group="gallery" className="lightbox-image" title="lightbox view"> <i className="pe-7s-graph2"></i>  </a>
                                        </div>
                                        <h4><a href="img/portfolio/2.jpg" data-fancybox-group="gallery" className="lightbox-image" title="lightbox view">Your title here</a></h4>
                                        <p><a href="#">Sub Title here</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-item gp-four">
                            <div className="thumb">
                                <img src="img/portfolio/3.jpg" alt="" />
                                <div className="gallery-hover">
                                    <div className="gallery-info">
                                        <div className="gallery-btn">
                                            <a href="img/portfolio/3.jpg" data-fancybox-group="gallery" className="lightbox-image" title="lightbox view"> <i className="pe-7s-graph2"></i>  </a>
                                        </div>
                                        <h4><a href="img/portfolio/3.jpg" data-fancybox-group="gallery" className="lightbox-image" title="lightbox view">Your title here</a></h4>
                                        <p><a href="#">Sub Title here</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-item gp-five">
                            <div className="thumb">
                                <img src="img/portfolio/4.jpg" alt="" />
                                <div className="gallery-hover">
                                    <div className="gallery-info">
                                        <div className="gallery-btn">
                                            <a href="img/portfolio/4.jpg" data-fancybox-group="gallery" className="lightbox-image" title="lightbox view"> <i className="pe-7s-graph2"></i>  </a>
                                        </div>
                                        <h4><a href="img/portfolio/4.jpg" data-fancybox-group="gallery" className="lightbox-image" title="lightbox view">Your title here</a></h4>
                                        <p><a href="#">Sub Title here</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-item gp-two">
                            <div className="thumb">
                                <img src="img/portfolio/5.jpg" alt="" />
                                <div className="gallery-hover">
                                    <div className="gallery-info">
                                        <div className="gallery-btn">
                                            <a href="img/portfolio/5.jpg" data-fancybox-group="gallery" className="lightbox-image" title="lightbox view"> <i className="pe-7s-graph2"></i>  </a>
                                        </div>
                                        <h4><a href="img/portfolio/5.jpg" data-fancybox-group="gallery" className="lightbox-image" title="lightbox view">Your title here</a></h4>
                                        <p><a href="#">Sub Title here</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-item gp-three">
                            <div className="thumb">
                                <img src="img/portfolio/6.jpg" alt="" />
                                <div className="gallery-hover">
                                    <div className="gallery-info">
                                        <div className="gallery-btn">
                                            <a href="img/portfolio/6.jpg" data-fancybox-group="gallery" className="lightbox-image" title="lightbox view"> <i className="pe-7s-graph2"></i>  </a>
                                        </div>
                                        <h4><a href="img/portfolio/6.jpg" data-fancybox-group="gallery" className="lightbox-image" title="lightbox view">Your title here</a></h4>
                                        <p><a href="#">Sub Title here</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-item gp-four">
                            <div className="thumb">
                                <img src="img/portfolio/7.jpg" alt="" />
                                <div className="gallery-hover">
                                    <div className="gallery-info">
                                        <div className="gallery-btn">
                                            <a href="img/portfolio/7.jpg" data-fancybox-group="gallery" className="lightbox-image" title="lightbox view"> <i className="pe-7s-graph2"></i>  </a>
                                        </div>
                                        <h4><a href="img/portfolio/7.jpg" data-fancybox-group="gallery" className="lightbox-image" title="lightbox view">Your title here</a></h4>
                                        <p><a href="#">Sub Title here</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-item gp-five">
                            <div className="thumb">
                                <img src="img/portfolio/8.jpg" alt="" />
                                <div className="gallery-hover">
                                    <div className="gallery-info">
                                        <div className="gallery-btn">
                                            <a href="img/portfolio/8.jpg" data-fancybox-group="gallery" className="lightbox-image" title="lightbox view"> <i className="pe-7s-graph2"></i>  </a>
                                        </div>
                                        <h4><a href="img/portfolio/8.jpg" data-fancybox-group="gallery" className="lightbox-image" title="lightbox view">Your title here</a></h4>
                                        <p><a href="#">Sub Title here</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-item gp-four">
                            <div className="thumb">
                                <img src="img/portfolio/7.jpg" alt="" />
                                <div className="gallery-hover">
                                    <div className="gallery-info">
                                        <div className="gallery-btn">
                                            <a href="img/portfolio/7.jpg" data-fancybox-group="gallery" className="lightbox-image" title="lightbox view"> <i className="pe-7s-graph2"></i>  </a>
                                        </div>
                                        <h4><a href="img/portfolio/7.jpg" data-fancybox-group="gallery" className="lightbox-image" title="lightbox view">Your title here</a></h4>
                                        <p><a href="#">Sub Title here</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- portfolio end --> */}

   {/* <!-- divider start --> */}
    <section className="service-area over-layer-default" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/5.jpg')` }}>
        <div className="container padding-bottom-none padding-top-40">
            <div className="section-content">
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <div className="service-item style-1 text-white border-right">
                            <div className="service-icon">
                                <i className="pe-7s-call"></i>
                            </div>
                            <div className="content">
                                <h5><a href="#">Give us a Call</a></h5>
                                <p>+970-438-3258</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="service-item style-1 text-white border-right">
                            <div className="">
                                <i className="pe-7s-mail-open"></i>
                            </div>
                            <div className="content">
                                <h5><a href="#">Send us a Message</a></h5>
                                <p>Your_malil@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="service-item style-1 text-white">
                            <div className="">
                                <i className="pe-7s-map-marker"></i>
                            </div>
                            <div className="content">
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

export default Portfolio;