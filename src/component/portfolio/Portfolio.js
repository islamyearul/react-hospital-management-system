import React, { Component } from 'react';

class Portfolio extends Component {
    render() {
        return (
            <>
                 
    <section class="inner-bg over-layer-black" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/4.jpg')` }}>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="mini-title inner-style-2">
                        <h3>Portfolio</h3>
                        <p><a href="index-one.html">Home</a> <span class="fa fa-angle-right"></span> <a href="#">Portfolio</a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>

     {/* <!-- portfolio start --> */}
    <section class="gallery-area">
        <div class="container">
            <div class="section-content">
                <div class="row clearfix">
                    <div class="gallery-filter-item text-center">
                        <ul class="gallery-filter">
                            <li class="active"><a href="#" data-filter="*" class="current">All</a></li>
                            <li class=""><a href="#" data-filter=".gp-two" class="current">Transplants</a></li>
                            <li class=""><a href="#" data-filter=".gp-three" class="current">OHR Program</a></li>
                            <li class=""><a href="#" data-filter=".gp-four" class="current">SURGERY</a></li>
                            <li class=""><a href="#" data-filter=".gp-five" class="current">CRITICAL CARE</a></li>
                        </ul>
                    </div>

                    <div class="gallery col-3 gutter">
                        <div class="gallery-item gp-two">
                            <div class="thumb">
                                <img src="img/portfolio/1.jpg" alt="" />
                                <div class="gallery-hover">
                                    <div class="gallery-info">
                                        <div class="gallery-btn">
                                            <a href="img/portfolio/1.jpg" data-fancybox-group="gallery" class="lightbox-image" title="lightbox view"> <i class="pe-7s-graph2"></i>  </a>
                                        </div>
                                        <h4><a href="img/portfolio/1.jpg" data-fancybox-group="gallery" class="lightbox-image" title="lightbox view">Your title here</a></h4>
                                        <p><a href="#">Sub Title here</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="gallery-item gp-three">
                            <div class="thumb">
                                <img src="img/portfolio/2.jpg" alt="" />
                                <div class="gallery-hover">
                                    <div class="gallery-info">
                                        <div class="gallery-btn">
                                            <a href="img/portfolio/2.jpg" data-fancybox-group="gallery" class="lightbox-image" title="lightbox view"> <i class="pe-7s-graph2"></i>  </a>
                                        </div>
                                        <h4><a href="img/portfolio/2.jpg" data-fancybox-group="gallery" class="lightbox-image" title="lightbox view">Your title here</a></h4>
                                        <p><a href="#">Sub Title here</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="gallery-item gp-four">
                            <div class="thumb">
                                <img src="img/portfolio/3.jpg" alt="" />
                                <div class="gallery-hover">
                                    <div class="gallery-info">
                                        <div class="gallery-btn">
                                            <a href="img/portfolio/3.jpg" data-fancybox-group="gallery" class="lightbox-image" title="lightbox view"> <i class="pe-7s-graph2"></i>  </a>
                                        </div>
                                        <h4><a href="img/portfolio/3.jpg" data-fancybox-group="gallery" class="lightbox-image" title="lightbox view">Your title here</a></h4>
                                        <p><a href="#">Sub Title here</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="gallery-item gp-five">
                            <div class="thumb">
                                <img src="img/portfolio/4.jpg" alt="" />
                                <div class="gallery-hover">
                                    <div class="gallery-info">
                                        <div class="gallery-btn">
                                            <a href="img/portfolio/4.jpg" data-fancybox-group="gallery" class="lightbox-image" title="lightbox view"> <i class="pe-7s-graph2"></i>  </a>
                                        </div>
                                        <h4><a href="img/portfolio/4.jpg" data-fancybox-group="gallery" class="lightbox-image" title="lightbox view">Your title here</a></h4>
                                        <p><a href="#">Sub Title here</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="gallery-item gp-two">
                            <div class="thumb">
                                <img src="img/portfolio/5.jpg" alt="" />
                                <div class="gallery-hover">
                                    <div class="gallery-info">
                                        <div class="gallery-btn">
                                            <a href="img/portfolio/5.jpg" data-fancybox-group="gallery" class="lightbox-image" title="lightbox view"> <i class="pe-7s-graph2"></i>  </a>
                                        </div>
                                        <h4><a href="img/portfolio/5.jpg" data-fancybox-group="gallery" class="lightbox-image" title="lightbox view">Your title here</a></h4>
                                        <p><a href="#">Sub Title here</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="gallery-item gp-three">
                            <div class="thumb">
                                <img src="img/portfolio/6.jpg" alt="" />
                                <div class="gallery-hover">
                                    <div class="gallery-info">
                                        <div class="gallery-btn">
                                            <a href="img/portfolio/6.jpg" data-fancybox-group="gallery" class="lightbox-image" title="lightbox view"> <i class="pe-7s-graph2"></i>  </a>
                                        </div>
                                        <h4><a href="img/portfolio/6.jpg" data-fancybox-group="gallery" class="lightbox-image" title="lightbox view">Your title here</a></h4>
                                        <p><a href="#">Sub Title here</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="gallery-item gp-four">
                            <div class="thumb">
                                <img src="img/portfolio/7.jpg" alt="" />
                                <div class="gallery-hover">
                                    <div class="gallery-info">
                                        <div class="gallery-btn">
                                            <a href="img/portfolio/7.jpg" data-fancybox-group="gallery" class="lightbox-image" title="lightbox view"> <i class="pe-7s-graph2"></i>  </a>
                                        </div>
                                        <h4><a href="img/portfolio/7.jpg" data-fancybox-group="gallery" class="lightbox-image" title="lightbox view">Your title here</a></h4>
                                        <p><a href="#">Sub Title here</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="gallery-item gp-five">
                            <div class="thumb">
                                <img src="img/portfolio/8.jpg" alt="" />
                                <div class="gallery-hover">
                                    <div class="gallery-info">
                                        <div class="gallery-btn">
                                            <a href="img/portfolio/8.jpg" data-fancybox-group="gallery" class="lightbox-image" title="lightbox view"> <i class="pe-7s-graph2"></i>  </a>
                                        </div>
                                        <h4><a href="img/portfolio/8.jpg" data-fancybox-group="gallery" class="lightbox-image" title="lightbox view">Your title here</a></h4>
                                        <p><a href="#">Sub Title here</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="gallery-item gp-four">
                            <div class="thumb">
                                <img src="img/portfolio/7.jpg" alt="" />
                                <div class="gallery-hover">
                                    <div class="gallery-info">
                                        <div class="gallery-btn">
                                            <a href="img/portfolio/7.jpg" data-fancybox-group="gallery" class="lightbox-image" title="lightbox view"> <i class="pe-7s-graph2"></i>  </a>
                                        </div>
                                        <h4><a href="img/portfolio/7.jpg" data-fancybox-group="gallery" class="lightbox-image" title="lightbox view">Your title here</a></h4>
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
    <section class="service-area over-layer-default" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/5.jpg')` }}>
        <div class="container padding-bottom-none padding-top-40">
            <div class="section-content">
                <div class="row">
                    <div class="col-sm-12 col-md-4">
                        <div class="service-item style-1 text-white border-right">
                            <div class="service-icon">
                                <i class="pe-7s-call"></i>
                            </div>
                            <div class="content">
                                <h5><a href="#">Give us a Call</a></h5>
                                <p>+970-438-3258</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4">
                        <div class="service-item style-1 text-white border-right">
                            <div class="">
                                <i class="pe-7s-mail-open"></i>
                            </div>
                            <div class="content">
                                <h5><a href="#">Send us a Message</a></h5>
                                <p>Your_malil@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4">
                        <div class="service-item style-1 text-white">
                            <div class="">
                                <i class="pe-7s-map-marker"></i>
                            </div>
                            <div class="content">
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