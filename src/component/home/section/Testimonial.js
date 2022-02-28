import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

class Testimonial extends Component {
    responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
     
    render() {
        return (
            <>
           
               <section className="testimonial">
            <div className="container">
                <div className="section-title">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <h2>Our <span className="color-defult"> Clients</span> Say</h2>
                            <div className="line-border-center bg-defult"></div>
                            <p>Repellendus error placeat numquam doloribus perferendis consequatur maxime molestiae soluta Corporis quidem quaerat accusantium omnis repudiandae nulla recusandae</p>
                        </div>
                    </div>
                </div>
                <div className="section-content">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="testimonial-carousel-one">
                              
                                    <Carousel
                                    swipeable={false}
                                    draggable={false}
                                    showDots={true}
                                    responsive={this.responsive}
                                    
                                    ssr={true} // means to render carousel on server-side.
                                    infinite={true}
                                    autoPlay={this.props.deviceType !== "mobile" ? true : false}
                                    autoPlaySpeed={1000}
                                    keyBoardControl={true}
                                    customTransition="all .5"
                                    transitionDuration={500}
                                    containerClass="carousel-container"
                                    removeArrowOnDeviceType={["tablet", "mobile"]}
                                    deviceType={this.props.deviceType}
                                    dotListClass="custom-dot-list-style"
                                    itemClass="carousel-item-padding-40-px"
                                   
                                    >
                                  
                                   
                                            
                                <div className="item">
                                    <div className="testimonial-item text-center">
                                        <div className="testimonial-author">
                                            <div className="author-img">
                                                <img className="img-responsive" src="img/testimonial/1.png" alt="" />
                                            </div>
                                            <h4>John Daniel</h4>
                                            <h6>business man</h6>
                                            <ul>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                            </ul>
                                        </div>
                                        <p>consectetur adipisicing elit. Nemo ex doloremque maiores quas, cumque commodi eaque molestiae in ratione nam obcaecati nihil provident illum eius sed ullam amet, expedita molestias iusto.</p> 
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-item text-center">
                                        <div className="testimonial-author">
                                            <div className="author-img">
                                                <img className="img-responsive" src="img/testimonial/2.png" alt="" />
                                            </div>
                                            <h4>John Daniel</h4>
                                            <h6>business man</h6>
                                            <ul>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                            </ul>
                                        </div>
                                        <p>consectetur adipisicing elit. Nemo ex doloremque maiores quas, cumque commodi eaque molestiae in ratione nam obcaecati nihil provident illum eius sed ullam amet, expedita molestias iusto.</p> 
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-item text-center">
                                        <div className="testimonial-author">
                                            <div className="author-img">
                                                <img className="img-responsive" src="img/testimonial/3.png" alt="" />
                                            </div>
                                            <h4>John Daniel</h4>
                                            <h6>business man</h6>
                                            <ul>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                            </ul>
                                        </div>
                                        <p>consectetur adipisicing elit. Nemo ex doloremque maiores quas, cumque commodi eaque molestiae in ratione nam obcaecati nihil provident illum eius sed ullam amet, expedita molestias iusto.</p> 
                                    </div>
                                </div>
                                </Carousel>
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

export default Testimonial;