import React, { Component } from 'react';

class Portfolio extends Component {
    render() {
        return (
            <>
               <section className="gallery-area">
            <div className="container">
                <div className="section-title">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <h2>Our<span className="color-defult"> Portfolio</span></h2>
                            <div className="line-border-center bg-defult"></div>
                            <p>Repellendus error placeat numquam doloribus perferendis consequatur maxime molestiae <br></br> quidem quaerat accusantium omnis repudiandae nulla recusandae</p>
                        </div>
                    </div>
                </div>
                <div className="section-content">
                    <div className="row clearfix">
                        <div className="gallery-filter-item text-center">
                            <ul className="gallery-filter">
                                <li className="active"><a href="#" data-filter="*" className="current">All Projects</a></li>
                                <li className=""><a href="#" data-filter=".gp-two" className="current"> Buliding</a></li>
                                <li className=""><a href="#" data-filter=".gp-three" className="current">Industry</a></li>
                                <li className=""><a href="#" data-filter=".gp-four" className="current">Transportation</a></li>
                                <li className=""><a href="#" data-filter=".gp-five" className="current">Residential</a></li>
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
                        </div>
                    </div>
                </div>
            </div>
            </section>
            </>
        );
    }
}

export default Portfolio;